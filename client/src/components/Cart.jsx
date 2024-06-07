import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      iNew: true,
      price: 17,
    },
    
   
  ];
  return (
    <div className="absolute right-5 top-10 z-50 bg-white p-11 border-solid border-2 shadow-lg">
      <h1 className="mb-1 text-gray-400 text-lg font-bold uppercase">product in your cart</h1>
      {data?.map((item) => (
        <div className=" items-center gap-10" key={item.id}>
          <img className="w-24 h-24 object-cover" src={item.img} />
          <div id="details" className="">
            <h1 className="text-medium font-bold">{item.title}</h1>
            <p className="text-gray-400 my-1 font-semibold">{item.desc?.substring(0,100)}</p>
            <div className="text-blue-700">
                1 x ${item.price}
                
            </div>
          </div>
          <DeleteOutlineIcon className="text-red-600 cursor-pointer" / >
            <div className="flex justify-between font-medium text-base">
                <span className="flex items-center justify-center gap-5">SUBTOTAL</span>
                <span className="flex items-center justify-center gap-5">$123</span>
                <button className=" rounded px-3 py-3 flex items-center justify-center gap-5 cursor-pointer border-none bg-blue-500 text-white font-semibold mb-2.5 ">PEOCEED TO CHECKOUT</button>
                <span className="text-red-600 cursor-pointer text-medium flex items-center justify-center gap-5 ">RESET CART</span>


            </div>
        </div>
      ))}
      
    </div>
  );
};

export default Cart;
