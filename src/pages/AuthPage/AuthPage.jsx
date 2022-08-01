import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>Welcome to Sugar and Spice! </h1>
      <div>
      {showLogin ? (
      <SignUpForm setUser={setUser} />
      ) : (
      <LoginForm setUser={setUser} />
      )}
       <button
            onClick={() => setShowLogin(!showLogin)}
            className="bg-[#1f1f1f] text-white font-medium py-2 px-4 rounded hover:ring hover:ring-orange-400"
          >
            {showLogin ? "LOG IN" : "SIGN UP"}
          </button>
      </div>
    </main> 
  );
}
