import React, { useState, useEffect } from "react";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";
import { MdLocalPhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";

export default function ProfileList({ profile }) {
  const [profiles, setProfiles] = useState(profile.data.users);

  // useEffect(() => {
  //   fetchProfiles();
  // }, []);

  // const fetchProfiles = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/v1/users");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch profiles");
  //     }
  //     const data = await response.json();
  //     console.log("Fetched data:", data.data.users);
  //     setProfiles(data.data.users);
  //   } catch (error) {
  //     console.error("Error fetching profiles:", error);
  //   }
  // };

  console.log("Profiles", profiles);

  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const itemTemplate = (profile) => {
    console.log("profile", profile);
    return (
      <div className="col-4 pt-2" key={profile._id}>
        <div className="outline p-4">
          <div className="flex gap-4 w-full">
            <div className="bg-[pink] rounded-full w-12 h-12 flex items-center justify-center">
              <span>
                {getInitials(profile.firstname + " " + profile.lastname)}
              </span>
            </div>
            <div className="w-[80%]">
              <div className="text-xl font-bold text-900">
                {profile.firstname} {profile.lastname}
              </div>
              <div>{profile.description}</div>
              <div className="flex items-center">
                <div>
                  <MdLocalPhone />
                </div>
                <div className="ml-1">{profile.phoneNumber}</div>
              </div>
              <div className="flex items-center">
                <div>
                  <LuMapPin />
                </div>
                <div className="ml-1">View Map</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (profiles) => {
    console.log("listT", profiles);
    if (!profiles || profiles.length === 0) return null;

    const rows = [];
    for (let i = 0; i < profiles.length; i += 3) {
      rows.push(
        <div className="grid grid-cols-3 gap-4" key={i}>
          {profiles.slice(i, i + 3).map((profile) => itemTemplate(profile))}
        </div>
      );
    }

    return <>{rows}</>;
  };

  return (
    <div className="card p-5 flex justify-center items-center">
      <DataView
        value={profiles}
        listTemplate={listTemplate}
        paginator
        rows={5}
      />
    </div>
  );
}
