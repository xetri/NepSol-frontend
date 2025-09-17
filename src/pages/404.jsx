import React from 'react';
import CenteredContainer from './Centercontainer'; // same container

const NotFound = () => {
  return (
    <CenteredContainer
      title="404 - Page Not Found"
      subtitle="Sorry, the page you are looking for does not exist."
      footer="Return to the homepage or contact support if you need help."
    >
      <a href="/" className="signin-button" style={{display: 'inline-block', textDecoration: 'none'}}>
        Go to Home
      </a>
    </CenteredContainer>
  );
};

export default NotFound;
