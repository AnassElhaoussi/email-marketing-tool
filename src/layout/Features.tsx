import paperPlane from "../assets/3d-fluency-paper-plane.png";
import envelope from "../assets/3d-fluency-opened-envelope.png";
import browserWindow from "../assets/business-3d-browser-window-with-open-web-page.png";
import pinkDoodle from "../assets/quirky-pink-doodle.png";
import useComponentAnimation from "../hooks/useComponentAnimation";
import {motion} from "framer-motion"

const Features = () => {
  const { animation: firstCardAnimation, ref: firstCardRef } =
    useComponentAnimation({
      animationType: "vertical",
      delayTime: 0.05,
      startingPoint: 80
    });
  const { animation: secondCardAnimation, ref: secondCardRef } =
    useComponentAnimation({
      animationType: "vertical",
      delayTime: 0.1,
      startingPoint: 80
      
    });
  const { animation: thirdCardAnimation, ref: thirdCardRef } =
    useComponentAnimation({
      animationType: "vertical",
      delayTime: 0.15,
      startingPoint: 80
    });
    
  return (
    <section className="px-10 space-y-16 pb-10" id="features">
      <div className="flex flex-wrap relative pb-14">
        <div className="space-y-4">
          <img src={pinkDoodle} alt="" className="w-20" />
          <h1 className="text-7xl text-gray-800">Discover The Key Features</h1>
          <p className="text-gray-500">
            Discover the tools that will empower your success and transform your
            strategies like never before.
          </p>
        </div>
      </div>
      <div className="flex xl:flex-nowrap flex-wrap items-stretch justify-center gap-x-5 gap-y-20">
        <motion.div className="relative flex flex-col gap-y-4 items-center bg-gradient-to-b flex-1 from-gray-50 to-gray-200 p-8 rounded-2xl text-center border-b-8 border-gray-700" animate={firstCardAnimation} ref={firstCardRef}>
          <img
            src={envelope}
            alt=""
            className="absolute w-28 -top-16 bg-gradient-to-b from-gray-50 to-gray-200 rounded-lg p-4"
          />
          <h2 className="text-5xl font-extrabold text-gray-700 mt-10">
            Email Campaigns
          </h2>
          <p className="text-gray-600">
            Drive engagement and conversions with powerful email campaigns using
            GetResponse's user-friendly tools.
          </p>
          <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white font-light py-3 px-6 rounded-lg text-xl hover:scale-105 transition-all">
            See more
          </button>
        </motion.div>
        <motion.div className="relative flex flex-col gap-y-4 items-center justify-center flex-1 bg-gradient-to-b from-gray-50 to-gray-200 p-8 rounded-2xl text-center border-b-8 border-gray-700" animate={secondCardAnimation} ref={secondCardRef}>
          <img
            src={browserWindow}
            alt=""
            className="absolute w-28 -top-16 bg-gradient-to-b from-gray-50 to-gray-200 rounded-lg p-4"
          />
          <h2 className="text-5xl font-extrabold text-gray-700 mt-5">
            Landing Pages
          </h2>
          <p className="text-gray-600">
            Easily create compelling landing pages to showcase your affiliate
            offers and increase conversions.
          </p>
        </motion.div>
        <motion.div className="relative flex flex-col gap-y-4 items-center justify-center flex-1 bg-gradient-to-b from-gray-50 to-gray-200 p-8 rounded-2xl text-center border-b-8 border-gray-700" animate={thirdCardAnimation} ref={thirdCardRef}>
          <img
            src={paperPlane}
            alt=""
            className="absolute w-28 -top-16 bg-gradient-to-b from-gray-50 to-gray-200 rounded-lg p-4"
          />
          <h2 className="text-5xl font-extrabold text-gray-700 mt-5">
            Automation
          </h2>
          <p className="text-gray-600">
            Simplify your marketing process with automated workflows that
            deliver targeted messages to the right audience at the right time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
