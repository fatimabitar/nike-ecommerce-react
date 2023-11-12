import React from "react";

const SocialLinks = ({ icon }) => {
  return (
    <>
      <div>
        <img
          src={icon}
          alt=""
          className="w-8 h-8 flex items-center justify-items-center
         cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-300
         hover:scale-110"
        />
      </div>
    </>
  );
};

export default SocialLinks;
