
import mainImage from "../assets/vecteezy_3d-flying-space-with-dollar-coin-or-3d-flying-rocket-with_10915819_389.png";
import underline from "../assets/quirky-pink-line.png";
import smallConfetti from "../assets/quirky-small-confetti.png"

const Hero = () => {
  return (
    <section className="relative flex items-center px-14">
      <div className="relative z-10 space-y-5 w-3/4">
        <h1 className="relative lg:text-[5.6rem] lg:leading-[5.8rem] md:text-7xl sm:text-6xl text-7xl font-extrabold text-gray-800">
          <span>Start <img src={underline} alt="" className="absolute lg:top-20 md:top-16 sm:top-[3.2rem] top-16 rotate-[-2deg] " /></span> Your Affiliate Marketing Business Now!
        </h1>
        <p className="text-gray-500 min-w-2/3 lg:text-base text-sm">
          An easy-to-use and suitable platform for <span className="bg-purple-300 text-purple-600 rounded-md">affiliate marketers</span> to send
          emails, create Landing Pages and automate communication.
        </p>
        <button className="bg-gradient-to-r from-purple-900 to-purple-600 py-3 px-6 rounded-lg text-white text-xl font-light hover:px-8 transition-all">
          Get started
        </button>
      </div>
      <div className="relative lg:w-[60%] md:w-[80%] sm:w-[90%] w-0 z-0">
        <div className="absolute right-20 top-20 w-2/3 h-2/3 bg-purple-300 blur-3xl rounded-full"></div>
        <img
          src={mainImage}
          alt=""
          className="relative z-10 rounded-full rotate-[38deg] "
        />
      </div>
      <img src={smallConfetti} alt="" className="absolute top-0 right-10 sm:w-44 w-0" />
    </section>
  );
};
export default Hero;
