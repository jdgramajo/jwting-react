// TODO:
// - Move posting credentials to either calling it from an
//   RTK Query provided hoook (which means maybe deprecating
//   this service), or adapting it here some other way.
import { useLoginMutation } from "../store";

const postCredentials = (username, password) =>
  useLoginMutation({ username, password });

const getMyRolesRequest = async () => {
  const url = "https://jwting.herokuapp.com:443/myRoles";
  const init = { credentials: "include" };

  return await fetch(url, init);
};

export { postCredentials, getMyRolesRequest };
