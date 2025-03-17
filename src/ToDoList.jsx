import React from "react";
import bgApp from "../src/assets/img/bg.webp";
import TaskMain from "./component/TaskMain";

const ToDoList = () => {
  return (
    <div
      className="w-full min-h-screen font-Poppins flex justify-center items-center bg-cover bg-center py-[30px]"
      style={{ backgroundImage: `url(${bgApp})` }}
    >
      <TaskMain />
    </div>
  );
};

export default ToDoList;
