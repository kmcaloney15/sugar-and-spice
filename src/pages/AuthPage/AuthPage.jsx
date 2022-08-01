import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div className="auth-left ">
        <>
          <Logo />
          <br></br>
          <h3>Welcome to Sugar and Spice! </h3>
          <br></br>
          {showLogin ? (
            <>
              <LoginForm setUser={setUser} />
              <h3>
                Don't have an account? &nbsp;&nbsp;
                <a
                  href="#"
                  onClick={() => setShowLogin(!showLogin)}
                  className="underline text-sage-green-400"
                >
                  Sign Up
                </a>
              </h3>
            </>
          ) : (
            <>
              <SignUpForm setUser={setUser} />
              <h3>
                Already have an account? &nbsp;&nbsp; <a
                href="#"
                onClick={() => setShowLogin(!showLogin)}
                className="underline text-sage-green-400"
              >
                Log In
              </a></h3>
            </>
          )}
        </>
      </div>
    </main>
  );
}
