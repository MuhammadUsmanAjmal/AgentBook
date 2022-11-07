import React from "react";
import FigImage from "../common/Image";

const ExpertLocalAgent = () => {
  return (
    <div className="expertagent">
      <div className="agentText">
        <h1>Connect with an expert local agent</h1>
        <p>
          Our agents are here to help you. Let's make your home search or sale
          easier
        </p>
      </div>

      <div className="agentform ">
        <input
          type="text"
          placeholder="Search For Vegetables and Fruits"
        />
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            background: "#4B6DF3",
            width: "100px",
            textAlign: "center",
            color: "white",
            padding: "13px",
            cursor: "pointer",
          }}
        ></i>
      </div>

    </div>
  );
};

export default ExpertLocalAgent;
