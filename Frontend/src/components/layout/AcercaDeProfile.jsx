import React from "react";
import CardAboutProfile from "../company/CardAboutProfile";

export default function AcercaDeProfile({ profileUserId }) {
  return (
    <>
      <div className="nav_Content_Profile">
        <CardAboutProfile profileUserId={profileUserId} />
      </div>
    </>
  );
}
