import React from "react";

const UserInfo = ({ data, imgClassName }) => {
  return (
    <div className="flex gap-[15px] items-center">
      <img
        src={data?.user?.profilePicture}
        alt="user"
        className={imgClassName}
      />
      <div>
        <p className="text-gray-800 text-lg font-semibold">
          {data?.user?.firstName} {data?.user?.lastName}
        </p>
        <p className="text-gray-800 text-sm font-normal">
          {data?.company?.name}{" "}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
