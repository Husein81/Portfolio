import React from "react";

interface IPhoneMockupProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({
  imageUrl,
  alt,
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* iPhone Frame */}
      <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/10 to-transparent z-5"></div>

          {/* App Content */}
          <div className="pt-12 h-full">
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/30 rounded-full"></div>
        </div>

        {/* Side Buttons */}
        <div className="absolute left-0 top-20 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute left-0 top-36 w-1 h-8 bg-gray-800 rounded-l"></div>
        <div className="absolute left-0 top-48 w-1 h-8 bg-gray-800 rounded-l"></div>
        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
