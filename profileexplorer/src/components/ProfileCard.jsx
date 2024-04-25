import React, { useState } from "react";

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  const handleSummaryClick = () => {
    setShowMap(!showMap);
  };

  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white text-4xl flex items-center justify-center h-40">
        <span>{getInitials(profile.firstname + " " + profile.lastname)}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {profile.firstname} {profile.lastname}
        </h3>
        <p className="text-gray-700 text-base">{profile.description}</p>
        <button
          onClick={handleSummaryClick}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showMap ? "Hide Map" : "Show Map"}
        </button>
        {showMap && (
          <div className="mt-4">{/* Add GoogleMapsEmbed component here */}</div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
