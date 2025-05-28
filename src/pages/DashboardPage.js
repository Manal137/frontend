// // src/pages/DashboardPage.js
// import React from 'react';

// const DashboardPage = () => {
//   return (
//     <div>
//       <h2>Welcome to your Dashboard</h2>
//       <p>This is where the engine platform will be displayed.</p>
//     </div>
//   );
// };

// export default DashboardPage;


// src/pages/DashboardPage.js
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'Point A', value: 100 },
  { name: 'Point B', value: 300 },
  { name: 'Point C', value: 200 },
  { name: 'Point D', value: 400 },
  { name: 'Point E', value: 150 },
];

const DashboardPage = () => {
  const [data, setData] = useState([]);

  const handleGeneratePlot = () => {
    // Simulate plot generation with dummy data
    setData(dummyData);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-r from-[#f5f0e6] to-[#8b5e3c] text-[#5b3a29]">
      <div className="max-w-4xl mx-auto bg-[#f3e9dc] p-8 rounded-2xl shadow-lg border border-[#a97458]">
        <h2 className="text-3xl font-bold mb-4 text-center">Dashboard</h2>
        <p className="mb-6 text-center">This is where the engine platform will be displayed.</p>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleGeneratePlot}
            className="px-6 py-2 rounded text-white transition"
            style={{ backgroundColor: '#6f4e37' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8b5e3c')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6f4e37')}
          >
            Generate Plot
          </button>
        </div>

        {data.length > 0 && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#5b3a29" />
              <YAxis stroke="#5b3a29" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#a97458" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
