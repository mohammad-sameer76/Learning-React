import React from "react";

function Card({username,btnText="View"}) {
  return (
    <>
      <div className="relative mb-10">
        <img
          src="https://images.pexels.com/photos/6009651/pexels-photo-6009651.jpeg"
          className="h-90 w-70 object-cover rounded-2xl"
        />
        <div className="absolute inset-0  text-[#fff] font-bold ">
          <div className="absolute bottom-20 flex ml-4 text-shadow-2xs text-2xl">
            {username}
          </div>
          <div className="absolute bottom-15 flex ml-4 text-shadow-2xl">
            The Anti-Patterns
          </div>
          <div>
            <button className="w-fit absolute bottom-2 flex ml-2">
              {btnText} ➜
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
