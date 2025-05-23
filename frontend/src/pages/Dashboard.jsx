// frontend/src/pages/Dashboard.jsx
import React from 'react';
import ClientStatusDashboard from '../components/ClientStatusDashboard';
import StatsChart from '../components/StatsChart';

const Dashboard = () => (
  <div>
    <ClientStatusDashboard />
    <StatsChart />
  </div>
);

export default Dashboard;