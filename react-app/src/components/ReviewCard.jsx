import StarsRating from "./StarsRating";

const ReviewCard = ({
  userAvatar,
  userName,
  userRating,
  userDescription,
  listImgs,
  date,
}) => {
  return (
    <div className="flex p-4">
      <div className="flex gap-4 w-[350px] h-fit items-center">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-8 h-8 aspect-square"
        />
        <div>{userName}</div>
      </div>
      <div className="flex flex-col gap-2">
        <StarsRating stars={userRating} className="w-4 h-4" />
        <time className="text-sm text-first-text">
          {new Date(date).toLocaleString("sv-SE")}
        </time>
        <div>{userDescription}</div>
        <div className="flex gap-2">
          {listImgs.length > 0 &&
            listImgs.map((img, index) => (
              <img
                key={`review-img-${index}`}
                className="w-14 h-14 aspect-square"
                src={img}
                alt="User Review Image"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
