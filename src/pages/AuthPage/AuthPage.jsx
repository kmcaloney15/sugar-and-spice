import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div className="auth-left ">
        <Logo />
        <br></br>
        <h3>Welcome to Sugar and Spice! </h3>
      <br></br>
        {showLogin ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
        <button
          onClick={() => setShowLogin(!showLogin)}
          className=" text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400"
        >
          {showLogin ? "LOG IN" : "SIGN UP"}
        </button>
      </div>
    </main>
  );
}
