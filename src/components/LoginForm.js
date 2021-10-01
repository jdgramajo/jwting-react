const LoginForm = () => {
  return (
    <div className="container col-12 col-sm-10 col-md-9 col-lg-8 col-xl-6 col-xxl-4">
      <div>
        <div className="card p-5">
          <form id="login-form" noValidate={true}>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-center h3 mb-3">Login</div>
              <div className="my-2 form-floating">
                <input id="user-input" type="text" placeholder="Usuario" className="form-control" required={true} />
                <label htmlFor="user-input">Usuario</label>
                <div className="invalid-feedback">
                  Usuario es requerido.
                </div>
              </div>
              <div className="mb-2 form-floating">
                <input id="password-input" type="password" placeholder="Contraseña" className="form-control" required={true} />
                <label htmlFor="user-input">Contraseña</label>
                <div className="invalid-feedback">
                  Contraseña es requerida.
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button id="submit-button" type="submit" className="btn btn-lg btn-outline-success w-50">Ingresar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
