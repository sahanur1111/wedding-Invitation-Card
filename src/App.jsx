import React, { useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import "./App.css";
import { PiMapPinLineBold } from "react-icons/pi";
import { FaCalendarPlus } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const WeddingInvitation = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-02-22") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("falling-heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    };
    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = document.getElementById("wedding-song");
    setTimeout(() => {
      audio.play().catch((error) => console.log("Autoplay failed:", error));
    }, 3000);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-pink-200 to-purple-300 animate-bgPulse">
      {/* Floating Glowing Effect */}
      <div className="absolute inset-0 bg-white opacity-20 blur-3xl animate-floatSlow"></div>
      
      {/* Animated Entry Effect */}
      <div className="animate-fadeInDown text-center relative z-10">
        <h1 className="text-6xl font-dancing-script font-bold text-pink-700 animate-float">Kohinur</h1>
        <h2 className="text-3xl text-purple-700 animate-bounce">&</h2>
        <h1 className="text-6xl font-dancing-script font-bold text-pink-700 animate-float">Lal Mohammad</h1>
        <h3 className="text-xl text-purple-700 mt-4 animate-fadeIn">Are getting married</h3>
        <p className="text-gray-600 mt-4 animate-fadeInUp">
          on <span className="font-bold text-purple-700">23 February 2025</span> at 
          <span className="font-bold text-purple-700"> Lohapur, Nalhati, Birbhum</span>
        </p>
      </div>
      
      {/* Countdown Timer */}
      <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl mt-6 border border-purple-300 animate-glowEffect">
        <h3 className="text-2xl font-bold text-purple-700 animate-fadeIn">Countdown Begins!</h3>
        <div className="flex justify-center gap-6 text-xl font-semibold text-gray-800 mt-4">
          <span className="bg-purple-100 px-4 py-2 rounded-lg shadow-md">{timeLeft.days}d</span>
          <span className="bg-purple-100 px-4 py-2 rounded-lg shadow-md">{timeLeft.hours}h</span>
          <span className="bg-purple-100 px-4 py-2 rounded-lg shadow-md">{timeLeft.minutes}m</span>
          <span className="bg-purple-100 px-4 py-2 rounded-lg shadow-md">{timeLeft.seconds}s</span>
        </div>
      </div>
      
      {/* Footer */}
      <p className="text-gray-600 text-center mt-6 animate-fadeIn">
        Can't wait to celebrate with you! Ping us: <span className="font-semibold">+91 9832744839</span>
      </p>
      
      {/* Background Wedding Song */}
      <audio id="wedding-song" autoPlay>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WeddingInvitation;
