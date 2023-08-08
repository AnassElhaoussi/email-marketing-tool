import React from "react"
import boost from "../assets/icons8-boost-96.png"

const Footer = () => {
    return (
        <footer className="relative overflow-hidden flex justify-between items-center px-10 py-6 bg-gray-900 font-light">
            <div className="absolute -z-0 -left-10 w-72 h-72 bg-gray-800 rounded-full"></div>
            <div className="absolute -z-0 -left-10 w-64 h-64 bg-gray-700 rounded-full"></div>
            <h3 className="relative z-10 flex items-center text-2xl cursor-pointer font-bold text-white">
                <img src={boost} alt="" className="w-10" />
                AffiliateBoost
            </h3>
            <ul className="relative z-10 space-y-2 text-gray-400">
                <li className="cursor-pointer hover:scale-110 transition-all">Home</li>
                <li className="cursor-pointer hover:scale-110 transition-all">Services</li>
                <li className="cursor-pointer hover:scale-110 transition-all">Features</li>
                <li className="cursor-pointer hover:scale-110 transition-all">Pricing</li>
            </ul>
            <button className="relative z-10 bg-gradient-to-r from-gray-200 to-gray-50 text-black font-normal py-3 px-6 rounded-lg">Contact Support</button>
            <div className="absolute -z-0 -right-20 -bottom-44 w-72 h-72 bg-gray-800 rounded-full"></div>
        </footer>
    )
}

export default Footer