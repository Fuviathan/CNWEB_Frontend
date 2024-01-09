import { Button, Rating, TextareaAutosize } from "@mui/material";
import { red } from "@mui/material/colors";

export const Review = () => {
  return (
    <div className="mt-4">
      <div className="bg-white p-4   box-shadow-2 border-2 lg:mx-[4rem] pb-[3rem]">
        <div className="text-3xl font-bold ">Review</div>
        <div className="mt-4">
          <div className="text-2xl font-bold ">Customer Reviews</div>
          <div className="flex gap-4">
            <Rating value={4.5}></Rating>
            <div className="text-xl text-gray-400 font-semibold">
              Based on 0 Reviews
            </div>
          </div>

          <div>
            <div className="text-xl text-gray-400 font-semibold">
              Write a Review
            </div>
            <div className="text-xl text-gray-400 font-semibold mt-4">
              Rating
            </div>
            <Rating name="size-medium" defaultValue={3} />
            <div className="text-xl text-gray-400 font-semibold mt-4">
              Write your review
            </div>
            <TextareaAutosize
              minRows={5}
              placeholder="Comments"
              className="w-full border-2 p-4 focus:outline-gray-500  "
            ></TextareaAutosize>

            <Button
              className="outline-black bg-black text-white rounded-2xl hover:bg-[#febd69] hover:border-[#febd69] hover:shadow-lg mt-2"
              variant="outlined"
            >
              <p className="text-md font-bold">Submit Review</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
