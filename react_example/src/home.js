import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <p>Go to the contact page by using one of the following:</p>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
      </p>

     
    </>
  );
};

export default Home;