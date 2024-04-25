const express = require("express");
const catchAsync = require("../utils/catchAsync");
const { User } = require("../models/user.model");

const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users: users,
    },
  });
});

const addUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const response = await fetch(
    `https://geocode.maps.co/search?q=${userData.address}&api_key=6624fb3c307aa976910233xlr700a4c`
  );
  const address = await response.json();
  console.log(address);
  const existingUser = await User.findOne({
    firstname: userData.firstname,
    lastname: userData.lastname,
  });

  const existPhone = await User.findOne({
    phoneNumber: userData.phoneNumber,
  });

  if (existingUser || existPhone) {
    return res.status(409).json({
      status: "fail",
      message:
        "User with the same first name and last name already exists or phoneNumber already exist",
    });
  }

  const newUser = await User.create({
    firstname: userData.firstname,
    lastname: userData.lastname,
    phoneNumber: userData.phoneNumber,
    description: userData.description,
    address: address.length > 0 ? address[0].display_name : userData.address, // If address exists, use it, otherwise use an empty string
    lat: address.length > 0 ? address[0].lat : null, // Use null or any default value when address is not available
    lng: address.length > 0 ? address[0].lon : null,
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});

module.exports = {
  getAllUsers,
  addUser,
};
