import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logo = ({ className, logo }) => {
  const navigate = useNavigate();
  const configuration = useSelector((state) => state?.appConfig);

  return (
    <div className={className} onClick={() => navigate("/")}>
      <img
        src={configuration?.logo}
        alt="logo"
        className="w-[140px] h-[26px]"
      />
    </div>
  );
};

export default Logo;
