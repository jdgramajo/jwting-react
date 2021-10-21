import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeUserInfo, useGetMyRolesQuery } from "../store";

const UserInfo = () => {
  // TODO:
  // - Redirect to root directory if not logged in (no userInfo available).
  // - Add logout to the header and actually remove cookie (if possible).
  // - Add change password to the header option and navigate to a new component to do so.
  const { userInfo } = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data } = useGetMyRolesQuery();
  console.log(data);
  const { roles } = data ?? [];
  console.log(roles);
  if (!roles) history.push("/");
  dispatch(changeUserInfo({ roles }));

  return (
    <div>
      <div className="text-body display-3">Hi {userInfo.name}!</div>
      <div className="text-body display-5">Your roles are:</div>
      <ul className="text-body display-6">{roles}</ul>
    </div>
  );
};

export default UserInfo;
