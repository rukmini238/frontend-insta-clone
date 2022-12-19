import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landingimg">
          <img
            width={400}
            src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
            alt=""
          />
        </div>
        <div className="enter">
          <h1>10X Team</h1>
          <button>
            {" "}
            <Link to="/main" style={linkStyle}>
              Enter
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
