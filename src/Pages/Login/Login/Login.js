import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Button } from "react-bootstrap";
import googleLogo from "../../../image/google.svg";
import useAuth from "../../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const { signInWithGoogle, setUser, error, setError, setLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from?.pathname || "/";

  const handleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),url(https://i.ibb.co/6b3t1BM/login.png)",
      }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <HelmetProvider>
        <title>Login - Travel Tour</title>
      </HelmetProvider>
      <div className="text-center">
        <h2 className="mb-5" style={{ color: "orange" }}>
          Login in our Website
        </h2>
        <Button onClick={handleSignIn} variant="outline-dark">
          Login With Google
          <span>
            <img style={{ width: "35px" }} src={googleLogo} alt="" />
          </span>
        </Button>
        <p className="text-danger">{error}</p>
      </div>
    </div>
  );
};

export default Login;
