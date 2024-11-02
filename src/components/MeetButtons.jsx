import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons';

const MeetButtons = () => {
  return (
    <div className="p-6 h-fit bg-white shadow-lg rounded-lg lg:w-[40%] flex flex-wrap justify-start items-center space-x-4">
      <div className="flex flex-col items-center gap-2">
        <button className="flex w-fit h-fit items-center justify-center bg-[#3EDACB] text-blue-950 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />
        </button>
        <h4 className='text-sm font-semibold leading-tighter'>Schedule a Webinar</h4>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button className="flex w-fit h-fit items-center justify-center bg-[#3EDACB] text-blue-950 p-4 rounded-lg">
          <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
        </button>
        <h4 className='text-sm font-semibold leading-tighter'>Join a Webinar</h4>
      </div>
      <div className="flex flex-col lg:mt-5 items-center gap-2">
        <button className="flex w-fit h-fit items-center justify-center bg-[#3EDACB] text-blue-950 p-4 rounded-lg">
          <FontAwesomeIcon icon={faVideo} className="w-5 h-5" />
        </button>
        <h4 className='text-sm font-semibold leading-tighter'>Open Recordings</h4>
      </div>
    </div>

  );
};

export default MeetButtons;