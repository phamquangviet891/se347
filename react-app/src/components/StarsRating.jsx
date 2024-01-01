import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarsRating = ({ stars, className }) => {
  const [howMany, setHowMany] = useState(stars);
  const five = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {five.map((n, index) => (
        <div key={`star-${index}`}>
          {howMany >= n ? (
            <FaStar className={`text-yellow-500 ${className}`} />
          ) : (
            <FaStar className={`text-gray-300 ${className}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarsRating;
