import { useHistory } from "react-router-dom";

// TODO:
// - Find out if custom hook is necesary or of the useQuery hook
//   provided by RTK Query is enough. -> Seems it isn't, maybe custom
//   hooks?
// import { changeUserInfo } from "../store";
// import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../store";

const LoginForm = () => {
  // const { changeUserInfo } = useSelector((store) => store);
  // const dispatch = useDispatch();
  const history = useHistory();
  const [login, loginResponse] = useLoginMutation();

  const navigateToMain = () => {
    history.push("/main");
  };

  const navigateToError = () => {
    history.push("/error");
  };

  const submitCredentialsIfValid = async (event) => {
    event.preventDefault();
    const loginForm = document.getElementById("login-form");

    if (!loginForm.checkValidity()) {
      loginForm.classList.add("was-validated");
    } else {
      const username = document.getElementById("user-input").value;
      const password = document.getElementById("password-input").value;
      try {
        const response = await login({ username, password });
        console.log(response);
        navigateToMain();
        // return response;
      } catch (err) {
        console.log(err);
        navigateToError();
        return;
      }
    }
  };

  return (
    <div className="container col-lg-8 col-xl-6 col-xxl-4">
      <div>
        <div className="card p-5">
          <form id="login-form" noValidate={true}>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-center h3 mb-3">Login</div>
              <div className="my-2 form-floating">
                <input
                  id="user-input"
                  type="text"
                  placeholder="Usuario"
                  className="form-control"
                  required={true}
                  defaultValue=""
                />
                <label htmlFor="user-input">Usuario</label>
                <div className="invalid-feedback">Usuario es requerido.</div>
              </div>
              <div className="mb-2 form-floating">
                <input
                  id="password-input"
                  type="password"
                  placeholder="Contraseña"
                  className="form-control"
                  required={true}
                  defaultValue=""
                />
                <label htmlFor="user-input">Contraseña</label>
                <div className="invalid-feedback">Contraseña es requerida.</div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  id="submit-button"
                  type="submit"
                  className="btn btn-lg btn-outline-success w-50"
                  onClick={submitCredentialsIfValid}
                >
                  Ingresar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
