import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeUserRoles, useGetMyRolesQuery } from "../store";

const UserInfo = () => {
  // TODO:
  // - Redirect to root directory if not logged in (no userInfo available).
  // - Add logout to the header and actually remove cookie (if possible).
  // - Add change password to the header option and navigate to a new component to do so.
  const { userName } = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();

  // TODO:
  // - Since the following is working upon a second login (as not at the first),
  //   there needs to be a way to await getting the roles.
  const { data } = useGetMyRolesQuery();
  console.log(data);
  const { roles } = data ?? [];
  console.log(roles);
  if (!roles) history.push("/");
  dispatch(changeUserRoles(roles));

  return (
    <div>
      <p>
        <div className="text-body display-3">Hi {userName}!</div>
      </p>
      <p>
        <div className="text-body display-5">Your roles are:</div>
        <ul className="text-body display-6">{roles}</ul>
      </p>
    </div>
  );
};

export default UserInfo;
