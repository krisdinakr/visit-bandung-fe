export const LoginAdminPage = () => {
  return (
    <div className="login-admin-page">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100 p-3">
          <div className="col-md-6 col-lg-4 bg-primary p-4 rounded">
            <h4 className="py-3 text-info">Login</h4>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label>Password</label>
            </div>
            <div className="text-end my-3">
              <button type="submit" className="btn btn-info">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
