import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function Visualization({ worries }) {
  return (
    <BarChart width={600} height={300} data={worries}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="worry" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="rating" fill="#8884d8" />
    </BarChart>
  );
}

export default Visualization;