import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMyRolesRequest } from "../services/jwtingService";
import { changeUserInfo } from "../store";

const UserInfo = () => {
  // TODO:
  // - Store the above in the global state.
  // - Use a service to fetch user data, role, name, the works.
  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store);
  const { roles } = getMyRolesRequest();
  dispatch(changeUserInfo({ roles }));
  // console.log(userInfo);
  // - Redirect to root directory if not logged in (no userInfo available).
  // - Add logout to the header and actually remove cookie (if possible).
  // - Add change password to the header and navigate to a new component to do so.

  return (
    <div>
      <div className="text-body display-2">
        Hi {userInfo.username}! Your roles are:
      </div>
      <ul className="text-body display-3"></ul>
    </div>
  );
};

export default UserInfo;
