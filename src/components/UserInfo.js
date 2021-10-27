import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeUserRoles, useGetMyRolesQuery } from "../store";

const UserInfo = () => {
  // TODO:
  // - Research why upon a refresh, redirection to main happens.
  const { userName, userRoles } = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!userName) history.push("/");
  const { data } = useGetMyRolesQuery();

  useEffect(() => {
    dispatch(changeUserRoles(data?.roles ?? []));
  }, [data, dispatch]);

  const roles = userRoles.map((role) => <li key={role}>{role}</li>);

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
