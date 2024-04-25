import React, { useState, useEffect } from "react";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";

export default function Dashboard({ profile }) {
  const [profiles, setProfiles] = useState(profile.data.users);

  console.log("Profiles", profiles);

  const getInitials = (name) => {
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const itemTemplate = (profile, index) => {
    console.log("profile", profile);
    return (
      <div className="col-12 outline mt-4" key={profile._id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <div className="flex justify-between w-full gap-3">
            <div className="flex ">
              <div className="bg-[pink] rounded-full mr-2 w-12 h-12 flex items-center justify-center">
                <span>
                  {getInitials(profile.firstname + " " + profile.lastname)}
                </span>
              </div>
              <div>
                <div className="text-xl font-bold text-900">
                  {" "}
                  {profile.firstname} {profile.lastname}
                </div>

                <div className="text-sm">{profile.description}</div>
              </div>
            </div>
            <div className="flex m-2 ">
              <button className="bg-[pink] mr-2 p-2 rounded-md">Edit</button>
              <button className="bg-[pink] p-2 rounded-md">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (profiles) => {
    console.log("listT", profiles);
    if (!profiles || profiles.length === 0) return null;

    let list = profiles.map((profile, index) => {
      return itemTemplate(profile, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
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
