import React from "react";
import "./Dash.css";

export default function Dash() {
  const user = { name: "Sher Bahadur Deuba" };
  const activities = [
    { initials: "JD", text: "John tipped you $25", time: "2 hours ago", tag: "Tip" },
    { initials: "MK", text: "Maria became a supporter", time: "5 hours ago", tag: "New" },
    { initials: "AL", text: "Alex left a comment", time: "1 day ago", tag: "Comment" },
  ];

  const stats = [
    { title: "Total Earnings", value: "NPR 2,847", change: "+12.5% from last month", color: "green" },
    { title: "Tips Received", value: "342", change: "+23.1% from last month", color: "purple" },
    
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="dashboard-header">
        <div className="profile">
          <img
            src=""
            alt="Profile"
            className="profile-img"
          />
          <div>
            <h2> {user.name}</h2>
          </div>
        </div>
        <div className="header-buttons">
          <button className="btn">Withdraw</button>
        </div>
      </header>

      {/* Stats */}
      <div className="stats">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <h4>{s.title}</h4>
            <h2>{s.value}</h2>
            
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Recent Activity */}
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <p>Your latest supporter interactions</p>
          <ul>
            {activities.map((act, index) => (
              <li key={index}>
                <div className="avatar">{act.initials}</div>
                <div className="activity-info">
                  <p>{act.text}</p>
                  <span>{act.time}</span>
                </div>
                <span className="tag">{act.tag}</span>
              </li>
            ))}
          </ul>
        </div>

       </div>
    </div>
  );
}


