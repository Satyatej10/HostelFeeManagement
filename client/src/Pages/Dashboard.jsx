import React, { useState } from "react";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={styles.body}>
      {/* Top Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>HostelFee</div>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
        </div>
        <div style={styles.profileSection}>
          <img
            src="profile-icon.png"
            alt="Profile"
            style={styles.profileIcon}
            onClick={toggleSidebar}
          />
          <div style={styles.dropdownMenu}>
            <a href="#" style={styles.dropdownLink}>Settings</a>
            <a href="#" style={styles.dropdownLink}>Notifications</a>
            <a href="#" style={styles.dropdownLink}>Log Out</a>
          </div>
        </div>
      </nav>

      {/* Side Navigation Menu */}
      <aside style={{ ...styles.sidebar, width: isSidebarOpen ? "200px" : "60px" }}>
        <ul style={styles.sidebarLinks}>
          <li style={styles.sidebarLink}>
            <span>🏠</span>
            {isSidebarOpen && <span>Dashboard</span>}
          </li>
          <li style={styles.sidebarLink}>
            <span>💳</span>
            {isSidebarOpen && <span>Mess Card</span>}
          </li>
          <li style={styles.sidebarLink}>
            <span>👤</span>
            {isSidebarOpen && <span>Account</span>}
          </li>
          <li style={styles.sidebarLink}>
            <span>📊</span>
            {isSidebarOpen && <span>Transactions</span>}
          </li>
          <li style={styles.sidebarLink}>
            <span>📄</span>
            {isSidebarOpen && <span>Reports</span>}
          </li>
        </ul>
      </aside>

      {/* Main Dashboard Content */}
      <main style={styles.mainContent}>
        {/* Key Metrics Cards */}
        <div style={styles.metricsGrid}>
          <div style={styles.metricCard}>
            <h3>Total Balance</h3>
            <h1>$1,500</h1>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "70%" }}></div>
            </div>
          </div>
          <div style={styles.metricCard}>
            <h3>Total Spending</h3>
            <h1>$350</h1>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progress, width: "30%" }}></div>
            </div>
          </div>
          <div style={styles.metricCard}>
            <h3>Recent Transactions</h3>
            <ul style={styles.transactionList}>
              <li>Paid Mess Fee - $50</li>
              <li>Recharge - $100</li>
            </ul>
          </div>
          <div style={styles.metricCard}>
            <h3>Upcoming Payments</h3>
            <ul style={styles.transactionList}>
              <li>Mess Fee Due - $50</li>
              <li>Hostel Rent Due - $200</li>
            </ul>
          </div>
        </div>

        {/* Real-Time Graph */}
        <div style={styles.graphContainer}>
          <h2>Spending Trends</h2>
          <div style={styles.graphPlaceholder}></div>
        </div>

        {/* Quick Actions */}
        <div style={styles.quickActions}>
          <button style={styles.actionButton}>Add Funds</button>
          <button style={styles.actionButton}>View Report</button>
          <button style={styles.actionButton}>Recharge Mess Card</button>
        </div>
      </main>

      {/* Notification Panel */}
      <div style={styles.notificationPanel}>
        <p>⚠️ Your balance is low. Please recharge soon!</p>
      </div>
    </div>
  );
};

// Internal CSS Styles
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    background: "#f4f7f6",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007bff",
  },
  searchBar: {
    flex: 1,
    margin: "0 20px",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  profileSection: {
    position: "relative",
  },
  profileIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  dropdownMenu: {
    display: "none",
    position: "absolute",
    right: 0,
    background: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "10px",
  },
  dropdownLink: {
    textDecoration: "none",
    color: "#333",
    display: "block",
    padding: "5px 0",
  },
  sidebar: {
    width: "60px",
    background: "#fff",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
    transition: "width 0.3s",
  },
  sidebarLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sidebarLink: {
    padding: "15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    marginLeft: "60px",
    transition: "margin-left 0.3s",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  metricCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  progressBar: {
    background: "#e0e0e0",
    borderRadius: "10px",
    height: "10px",
  },
  progress: {
    background: "#007bff",
    height: "100%",
    borderRadius: "10px",
  },
  transactionList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  graphContainer: {
    marginTop: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  graphPlaceholder: {
    height: "200px",
    background: "#e0e0e0",
    borderRadius: "10px",
  },
  quickActions: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  actionButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s, background 0.3s",
  },
  notificationPanel: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "#ff4d4d",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    animation: "slideDown 0.5s ease-out",
  },
};

export default DashboardPage;