
import check from "../assets/icons8-check-96.png"
import doodlyBrushLine from "../assets/quirky-doodly-brush-line.png"

const SecondCard = () => {
  return (
    <section className="relative flex items-center justify-center px-20 py-14 mx-10 bg-gradient-to-r from-purple-900 to-purple-600 rounded-3xl shadow-2xl shadow-gray-400">
      <img src={doodlyBrushLine} alt="" className="absolute w-16 top-5 left-10 z-0" />
      <div className="relative z-10 space-y-4 w-2/3">
        <h2 className="text-[3.5rem] leading-[4.3rem] font-black text-white">Our Services Are Useful For Any Affiliate Marketer</h2>
        <p className="text-gray-300 font-light text-sm w-2/3">Our comprehensive marketing platform offers a range of tools designed to streamline and enhance your affiliate marketing efforts.</p>
      </div>
      <ul className="space-y-4 text-sm font-semibold text-purple-600">
        <li className="flex items-center gap-4 bg-gradient-to-r from-gray-300 to-white py-3 px-6 rounded-xl">
            <img src={check} alt="" className="w-6" />
            Email Marketing
        </li>
        <li className="flex items-center gap-4 bg-gradient-to-r from-gray-300 to-white py-3 px-6 rounded-xl">
            <img src={check} alt="" className="w-6" />
            Landing Page Builder
        </li>
        <li className="flex items-center gap-4 bg-gradient-to-r from-gray-300 to-white py-3 px-6 rounded-xl">
            <img src={check} alt="" className="w-6" />
            Marketing Automation
        </li>
      </ul>
    </section>
  );
};

export default SecondCard;
