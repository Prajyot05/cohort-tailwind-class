import React from 'react';
import ProfileCard from './ProfileCard';
import Schedule from './Schedule';
import MeetButtons from './MeetButtons';
import WebinarList from './WebinarList';

const Dashboard = () => {
  return (
    <div className='bg-white w-full'>
        <img className='w-full h-[20vh] object-cover' src="https://images.unsplash.com/photo-1652267113336-8bba86c7cc44?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="flex p-8 gap-8">
        <ProfileCard />
        <div className='w-full'>
            <h3 className='text-gray-800 text-xl font-medium'>Monday, 14th October</h3>
            <h1 className='text-3xl mt-5 mb-10 text-[#0D2149] font-bold'>Good Morning, Prabhleen! 👋</h1>
            <div className="flex flex-col lg:flex-row gap-6">
                <WebinarList />
                <MeetButtons />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;