import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from '../features/stats/statsSlice';
import { Bar } from 'react-chartjs-2';

const StatsChart = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.stats);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  const chartData = {
    labels: data.map(stat => stat.date),
    datasets: [{
      label: 'Ad Plays',
      data: data.map(stat => stat.count),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  };

  return (
    <div>
      <h2>Ad Statistics</h2>
      {status === 'loading' ? 'Loading...' : <Bar data={chartData} />}
    </div>
  );
};

export default StatsChart;
