import React from "react";
import CardHomeProfile from "../company/CardHomeProfile";

export default function InicioProfile({ profileUserId }) {
  return (
    <>
      <div className="nav_Content_Profile">
        <CardHomeProfile profileUserId={profileUserId} />
      </div>
    </>
  );
}
