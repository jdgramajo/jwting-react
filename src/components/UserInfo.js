import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  // TODO:
  // - Redirect to root directory if not logged in (no userInfo available).
  // - Add logout to the header and actually remove cookie (if possible).
  // - Add change password to the header option and navigate to a new component to do so.
  const { userInfo } = useSelector((store) => store);

  return (
    <div>
      <div className="text-body display-2">Hi {userInfo}! Your roles are:</div>
      <ul className="text-body display-3"></ul>
    </div>
  );
};

export default UserInfo;
