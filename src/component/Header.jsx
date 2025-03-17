import React, { useEffect, useState } from "react";
import headerBg from "../assets/img/header.jpg";

const Header = () => {
  const [day, setDay] = useState("");
  
  let newDate = new Date();
  let dateYear = newDate.getFullYear();
  let dateMonth = newDate.getMonth();
  let dateDate = newDate.getDate();

  let Hours = newDate.getHours();
  let Minutes = newDate.getMinutes();
  let Seconds = newDate.getSeconds();

  let date = `${dateDate} / ${
    dateMonth + 2
  } / ${dateYear} - (${Hours} : ${Minutes} : ${Seconds})`;

  useEffect(() => {
    // console.log(date);
    setTimeout(() => {
      setDay(`${date}`);
    }, 1000);
  }, [day]);

  return (
    <div
      className="w-full h-[25%] rounded-t-xl flex items-end bg-cover bg-center"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="p-[20px]">
        <h2 className="mb-[5px] text-[20px] font-bold">My Day</h2>
        <h4 className="text-[17px]">{day}</h4>
      </div>
    </div>
  );
};

export default Header;
