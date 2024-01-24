export const Description = ({ description }) => {
  return (
    <div className="mt-2">
      <div className="bg-white p-4   box-shadow-2 lg:mx-[4rem] ">
        <h4 className="font-semibold text-2xl ml-4">Description</h4>
        <div
          className="mt-2 px-4"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      </div>
    </div>
  );
};
