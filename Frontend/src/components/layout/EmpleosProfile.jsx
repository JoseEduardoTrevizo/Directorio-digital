import React from "react";
import CardHireProfile from "../company/CardHireProfile";

export default function EmpleosProfile({ profileUserId }) {
  return (
    <>
      <div className="nav_Content_Profile">
        <CardHireProfile profileUserId={profileUserId} />
      </div>
    </>
  );
}
