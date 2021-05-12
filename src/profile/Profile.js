import React from "react";

import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, func, children }) => {
  return (
    <div
      className="Profile"
      style={{
        margin: "0px 50px",
        display: "flex",
        backgroundColor: "ivory",
        borderRadius: "15px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <img
        style={{ backgroundColor: "ivory", width: "400px" }}
        src={children}
        alt=""
      />
      <div
        style={{
          margin: "50px auto",
          padding: "30px auto",
          backgroundColor: "ivory",
        }}
      >
        <h1 style={{ backgroundColor: "ivory" }}>Name: {fullName}</h1>
        <h2 style={{ backgroundColor: "ivory" }}>Profession: {profession}</h2>
        <h3 style={{ backgroundColor: "ivory" }}>Biography: </h3>
        <h5 style={{ backgroundColor: "ivory" }}>{bio}</h5>
        <button
          style={{ backgroundColor: "ivory" }}
          onClick={() => func(fullName)}
        >
          Who I am ?
        </button>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Your name",
  bio: "Describe yourself",
  profession: "What do you do for living ?",
  children: "profilePic.jpg",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.number,
};

export default Profile;
