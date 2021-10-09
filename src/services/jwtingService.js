// TODO:
// - Fetch the token from the backend
// - Store client info globally

const postCredentials = (userName, password) => {
  console.log(
    `Should send POST request with: { userName: ${userName}, password: ${password} }`
  );

  return {
    userName: userName,
    roles: ["jwting-guest"],
  };
};

export { postCredentials };
