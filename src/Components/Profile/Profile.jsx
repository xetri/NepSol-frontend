import React from "react";
import "./Profile.css";
import { auth } from "../../firebase";

const Profile = () => {
  const user = auth.currentUser;

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <img
          src={user?.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2 className="profile-name">{user?.displayName || "Sarah Artist"}</h2>
          <p className="profile-username">@{user?.email?.split("@")[0] || "sarahartist_"}</p>
          <p className="profile-bio">
            Digital artist creating vibrant illustrations and NFT collections.
            Passionate about bringing imagination to life through colors and
            creativity.
          </p>
          <div className="profile-meta">
            <span>📅 Joined March 2023</span>
          </div>
        </div>
        <div className="profile-actions">
          <button className="tip-btn">💰 Connect Wallet & Tip</button>
    
        </div>
      </div>

      {/* Stats Section */}
      <div className="profile-stats">
        
        <div className="stat-box">
          <h3>342</h3>
          <p>Tips Received</p>
        </div>
        <div className="stat-box">
          <h3>$2,847</h3>
          <p>Total Earned</p>
        </div>
      </div>

      {/* About Section */}
      <div className="profile-about">
        <h3>About</h3>
        <p>
          Hi! I’m {user?.displayName || "Sarah"}, a digital artist based in San
          Francisco. I specialize in creating vibrant, colorful illustrations
          and NFT collections that bring imagination to life. My work is inspired
          by everyday experiences, nature, and emotions, which I translate into
          bold, expressive art.
        </p>
        <p>
          Beyond NFTs, I also collaborate with brands and individuals to create
          unique designs that stand out. When I’m not illustrating, I enjoy
          exploring art museums, experimenting with new styles, and connecting
          with fellow creators.
        </p>
      </div>
    </div>
  );
};

export default Profile;
