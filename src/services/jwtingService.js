const backendRootURL = "https://jwting.herokuapp.com:443"; // "http://localhost:8081"; //

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

export { postCredentials };
