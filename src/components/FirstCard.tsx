
import robot from "../assets/3d-fluency-chatbot.png"
import blackDoodle from "../assets/inky-firework.png"

const Card = () => {
  return (
    <section className="relative flex justify-between items-center px-16 py-10 bg-gradient-to-r from-blue-900 to-blue-600 mx-10 rounded-3xl shadow-2xl shadow-gray-400">
      <img src={blackDoodle} alt="" className="absolute w-20 top-5 right-10" />
      <div className="relative text-start space-y-2">
        <img src={robot} alt="" className="absolute -top-40 w-52" />
        <h2 className="text-6xl text-white font-black pt-10">Build your webiste using AI</h2>
        <p className="text-gray-200 font-light text-lg">
          Elevate your online presence effortlessly with our <span className="font-semibold">AI-driven</span> website
          building solution.
        </p>
      </div>
      <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-xl hover:scale-110 transition-all">Build it now</button>
    </section>
  );
};

export default Card;
