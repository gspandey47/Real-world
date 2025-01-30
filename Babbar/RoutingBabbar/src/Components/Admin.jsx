import React from 'react';

const cards = [
  { title: 'Registered Users', count: 120, link: '/registered' },
  { title: 'Logged-in Users', count: 85, link: '/loggedin' },
  { title: 'Job Registrations', count: 40, link: '/jobregister' },
  { title: 'Attendances', count: 320, link: '/attendances' },
  { title: 'Shifts', count: 25, link: '/shifts' },
  { title: 'Leaves', count: 18, link: '/leaves' },
];

function Admin() {
  return (
    <div className="min-h-screen mx-auto bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">{card.count}</p>
            <a href={card.link} className="mt-4 inline-block bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition">
              Explore
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
