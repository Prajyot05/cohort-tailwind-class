import { faAngleDown, faArrowLeftLong, faArrowRightLong, faCalendar, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const webinars = [
  { time: "11:30 AM", status: "Live", title: "UX Webinar" },
  { time: "11:30 AM", status: "Upcoming", title: "My first Webinar" },
  { time: "11:30 AM", status: "Upcoming", title: "Important Webinar" },
  { time: "11:30 AM", status: "Upcoming", title: "Webinar 1" },
];

const WebinarList = () => {
  return (
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className="mx-auto w-[70%] bg-white rounded-lg p-5">
      <div className="flex items-center justify-between p-1 rounded-sm mb-4 border-b bg-[#F5F6F9]">
        <div className="flex items-center space-x-2 text-gray-600">
            <FontAwesomeIcon icon={faCalendar} />
            <span className="font-semibold text-md">Monday, 14 October 2024</span>
            <FontAwesomeIcon className="text-xs" icon={faAngleDown} />
        </div>
        <div className="flex space-x-2 text-gray-500">
        <FontAwesomeIcon className="text-lg" icon={faArrowLeftLong} />
          <FontAwesomeIcon className="text-lg" icon={faArrowRightLong} />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {webinars.map((webinar, index) => (
          <div key={index} className={`flex items-center pb-2 ${index !== webinars.length - 1 && 'border-b-2'}`}>

            <div className="text-sm w-20">
              <p className="font-semibold text-gray-600">{webinar.time}</p>
              <p className="text-xs text-gray-500">{webinar.time}</p>
            </div>

            <div className="flex-1 relative">
            <div className="-ml-3 border-l-2 absolute border-teal-300 h-full mx-2 text-white">H</div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-600 font-medium">
                  {webinar.status === "Live" ? (
                    <h3 className=" flex items-center">
                      <span className="pr-3">Live</span> <FontAwesomeIcon className="text-[1rem] text-red-500" icon={faVideo} />
                    </h3>
                  ) : (
                    <h3 className="flex items-center">
                      <span className="pr-3">Upcoming</span> <FontAwesomeIcon className="text-[1rem] text-blue-500" icon={faVideo} />
                    </h3>
                  )}
                </span>
              </div>
              <p className="font-semibold">{webinar.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebinarList;