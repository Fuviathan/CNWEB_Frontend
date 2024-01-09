import React from "react";

const Color = (props) => {
  return (
    <>
      <ul className="flex gap-4 ">
        {props?.data?.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                backgroundColor: item.title,
                border: "1px solid rgb(183 155 156)",
                borderRadius: "50%",
                cursor: "pointer",
                width: "1.5rem",
                height: "1.5rem",
              }}
              // className={``}
              onClick={() => {
                props?.setColor(item["_id"]);
              }}
            ></li>
          );
        })}
      </ul>
    </>
  );
};

export default Color;
