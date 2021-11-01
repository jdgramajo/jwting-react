import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useGetMyRolesQuery } from "../store";

const UserInfo = () => {
  // TODO:
  // - Research why upon a refresh, redirection to main happens.
  // - The above also keeps the roles data for the next login, which is not desired.
  const { userName } = useSelector((store) => store);
  const history = useHistory();

  if (!userName) history.push("/");

  const { data } = useGetMyRolesQuery();

  return (
    <div>
      <div>
        <div className="text-body display-3">Hi {userName}!</div>
      </div>
      <div>
        <div className="text-body display-5">Your roles are:</div>
        <ul className="text-body display-6">
          {data?.roles?.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
