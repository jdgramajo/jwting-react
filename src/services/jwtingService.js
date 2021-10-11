const backendRootURL = "https://jwting.herokuapp.com:443";

const postCredentials = async (username, password) => {
  const url = `${backendRootURL}/auth/signin`;
  const init = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ username, password }),
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return await fetch(url, init);
};

const getMyRolesRequest = async () => {
  const url = `${backendRootURL}/myRoles`;
  const init = { credentials: "include" };

  return await fetch(url, init);
};

export { postCredentials, getMyRolesRequest };
