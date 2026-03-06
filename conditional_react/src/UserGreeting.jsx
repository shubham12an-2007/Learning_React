import React from "react";
// import PropTypes from "prop-types";

const UserGreeting = ({ isLoogedIn, username = "Guest" }) => {
  const welcomeMessage = (
    <h2 className="welcome-message "> Welcome {username} </h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue </h2>
  );

  return isLoogedIn ? welcomeMessage : loginPrompt;
};

// UserGreeting.prototypes = {
//   isLoogedIn: PropTypes.bool,
//   username: PropTypes.string,
// };

export default UserGreeting;
