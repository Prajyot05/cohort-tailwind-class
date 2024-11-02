import React from 'react';

const Schedule = () => {
  const events = [
    { time: "11:30 AM", title: "UX Webinar", status: "Live" },
    { time: "11:30 AM", title: "My First Webinar", status: "Upcoming" },
    { time: "11:30 AM", title: "Important Webinar", status: "Upcoming" },
    { time: "11:30 AM", title: "Webinar 1", status: "Upcoming" },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex-1">
      <h2 className="text-xl font-bold">Good morning, Prabhleen! 👋</h2>
      <p className="text-gray-500">Monday, 14 October 2024</p>
      <div className="mt-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="text-gray-700">{event.time}</span>
            <span className={`text-sm ${event.status === 'Live' ? 'text-red-500' : 'text-blue-500'}`}>
              {event.status}
            </span>
            <span className="text-gray-700">{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;