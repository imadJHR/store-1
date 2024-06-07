import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [count, setCount] = useState(1);
  const IMGS = [
    "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "https://images.pexels.com/photos/17368053/pexels-photo-17368053/free-photo-of-homme-village-voiture-vehicule.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="flex px-8 py-5  gap-14">
      <div className="flex mx-7 gap-7 ">
        <div className="flex-1 ">
          <img
            src={IMGS[0]}
            className="w-full h-[300px] object-cover cursor-pointer mb-2.5  "
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={IMGS[1]}
            className="w-full  h-[300px] object-cover cursor-pointer mb-2.5 my-5 "
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="flex-5">
          <img
            src={IMGS[selectedImg]}
            className="w-full  max-h-[800px] object-cover cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <h1>title</h1>
        <span className="text-2xl font-bold text-blue-500">$200</span>
        <p className="text-xl font-medium text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          distinctio sint consectetur a cupiditate tempore 
        </p>
        <div className="flex items-center gap-3">
          <button onClick={() => setCount((prev) => prev + 1)}className="w-5 h-5 flex items-center justify-center cursor-pointer border-solid border-2 " >+</button>
          {count}
          <button
            onClick={() => setCount((prev) => (prev === 1 ? 1 : prev - 1))}
            className="w-5 h-5 flex items-center justify-center cursor-pointer border-solid border-2 "
          >
            -
          </button>
        </div>
        <button className="bg-blue-600 rounded-md w-36 h-11 font-semibold text-white flex justify-center items-center gap-1 cursor-pointer p-1 hover:shadow-xl hover:bg-white hover:text-blue-600">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="flex gap-5 ">
          <div className="flex items-center gap-2.5 text-blue-500 font-medium">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="flex items-center gap-2.5 text-blue-500  font-medium">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 text-gray-400 font-medium mt-3">
          <span>Vendre : Polo</span>
          <span>Product ype : T-shirt</span>
          <span>Tag: T-shirt, Women , Top</span>
        </div>
        <hr className=" border-solid border-1 border-blue-500" />
       <div className="flex flex-col gap-y-2.5 text-gray-400 font-medium mt-3">
        <span>DESCRIPTION</span>
        <hr className="w-1/4 border-solid border-1 border-blue-500 " />
        <span>ADDITIONAL INFORMATION</span>
        <hr className="w-1/4 border-solid border-1 border-blue-500"/>
        <span>FAQ</span>
       </div>
      </div>
    </div>
  );
};

export default Product;
