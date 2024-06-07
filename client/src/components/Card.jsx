import { Link } from "react-router-dom";



const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="group block overflow-hidden">
       
       <div className="relative flex flex-col h-[350px] sm:h-[450px]">
 
    <img
      src={item.img1}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={item.img2}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>

    </Link>
  );
};

export default Card;
