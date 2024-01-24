import React from "react";

const Color = (props) => {
  return (
    <>
      <ul className="flex gap-4 flex-wrap ">
        {props?.data?.map((item, index) => {
          return (
            <button
              key={index}
              style={{
                backgroundColor: item.title,
              }}
              className={`border-2 rounded-3xl cursor-pointer w-6 h-6 ${
                props.color === item["_id"] ? "border-red-500" : " "
              }`}
              onClick={() => {
                props?.setColor(props.color === item["_id"] ? "" : item["_id"]);
              }}
            ></button>
          );
        })}
      </ul>
    </>
  );
};

export default Color;
