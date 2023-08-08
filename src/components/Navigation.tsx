
import boost from "../assets/icons8-boost-96.png";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center text-gray-700 text-sm py-3 px-20 w-full border-b-[0.5px] border-gray-300">
      <h3 className="flex items-center text-xl font-bold">
        <img src={boost} alt="" className="w-10" />
        AffiliateBoost
      </h3>
      <ul className="flex gap-x-28 ">
        <li className="cursor-pointer hover:scale-110 transition-all">Home</li>
        <li className="cursor-pointer hover:scale-110 transition-all">
          Services
        </li>
        <li className="cursor-pointer hover:scale-110 transition-all">
          Features
        </li>
        <li className="cursor-pointer hover:scale-110 transition-all">
          Pricing
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
