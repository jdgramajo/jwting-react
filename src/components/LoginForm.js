import { postCredentials } from "../services/jwtingService";

const LoginForm = () => {
  // TODO:
  // - Upon successful login, navigate to main, with React Router.

  const submitCredentialsIfValid = async (event) => {
    event.preventDefault();
    const loginForm = document.getElementById("login-form");

    if (!loginForm.checkValidity()) {
      loginForm.classList.add("was-validated");
    } else {
      const username = document.getElementById("user-input").value;
      const password = document.getElementById("password-input").value;
      try {
        return await postCredentials(username, password);
      } catch (err) {
        console.log(err);
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
