import React, { useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const stats = [
    { id: 1, title: "Total Revenue", value: "$24,500", change: "+12%", color: "#4CAF50" },
    { id: 2, title: "Active Users", value: "1,240", change: "+8.3%", color: "#2196F3" },
    { id: 3, title: "New Signups", value: "85", change: "-2%", color: "#FF9800" },
    { id: 4, title: "Server Load", value: "42%", change: "Stable", color: "#E91E63" },
  ];

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">AdminOS</h2>

        {["Overview", "Analytics", "Users", "Settings"].map((tab) => (
          <button
            key={tab}
            className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h1>{activeTab}</h1>
          <p>Welcome back, Admin</p>
        </div>

        <div className="grid">
          {stats.map((item) => (
            <div key={item.id} className="card-wrapper">
              <div className="card">
                <div
                  className="accent-bar"
                  style={{ backgroundColor: item.color }}
                />

                <h4 className="card-title">{item.title}</h4>

                <h2 className="card-value">{item.value}</h2>

                <p
                  className="card-change"
                  style={{
                    color: item.change.startsWith("+")
                      ? "#4CAF50"
                      : item.change.startsWith("-")
                      ? "#F44336"
                      : "#757575",
                  }}
                >
                  {item.change} this week
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}