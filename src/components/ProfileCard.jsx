import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-lg -mt-20 h-fit rounded-xl py-12 px-3 flex flex-col items-center w-64">
      <img
        src="/image.avif"
        alt="Profile"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <h2 className="text-lg font-bold pt-5">Prabhleen Kaur</h2>
      <p className="text-gray-600 text-sm pt-3 pb-1">prabhleen@gmail.com</p>
      <p className="text-gray-600 text-sm">9899999882</p>
      <p className="text-gray-500 text-sm pt-3">Delhi, India</p>
    </div>
  );
};

export default ProfileCard;