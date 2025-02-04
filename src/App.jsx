import React, { useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import "./App.css"; // Import the CSS for falling hearts
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
      heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000); // Remove after animation
    };

    const interval = setInterval(createHeart, 500); // Create a heart every 500ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = document.getElementById("wedding-song");
    setTimeout(() => {
      audio.play().catch((error) => console.log("Autoplay failed:", error));
    }, 3000);
  }, []);

  // Google Calendar Event URL
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Kohinur%20%26%20Lal%20Muhammad%20Wedding&dates=20250223T000000Z/20250223T235900Z&details=Join%20us%20for%20our%20special%20day%21%20Haldi%20%26%20Mehandi%20on%2022nd%20Feb,%20Wedding%20on%2023rd%20Feb.&location=Lohapur%20(Paschim%20Kanal%20Para),%20Nalhati,%20Birbhum&sf=true&output=xml`;


  return (
    <div className="font-arvo flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 relative overflow-hidden">
      {/* Falling Hearts Animation */}
      <div className="falling-hearts"></div>

      {/* Floating Elements */}
      <img
        src="https://i.imgur.com/dGOOfnA.png"
        alt="image-top-right"
        className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 animate-fadeInDown"
      />
      <img
        src="https://i.imgur.com/t6ffnbn.png"
        alt="image-top-left"
        className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 animate-fadeInDown"
      />

      {/* Main Content */}
      <div className="wrap text-center px-4 sm:px-6 md:px-12 mt-8 sm:mt-10 animate-fadeIn">
        <h1 className="font-dancing-script font-bold text-4xl sm:text-6xl text-pink-700 mb-2 animate-float">Kohinur</h1>
        <h2 className="font-dancing-script font-bold text-2xl text-purple-700 animate-bounce">&</h2>
        <h1 className="font-dancing-script font-bold text-4xl sm:text-6xl text-pink-700 animate-float">Lal  Muhammad</h1>
        <h3 className="font-light uppercase tracking-widest text-xl sm:text-2xl text-purple-700 mt-4 sm:mt-5 animate-fadeIn">
          Are getting married
        </h3>
        <p className="text-gray-600 uppercase tracking-widest text-sm sm:text-base mt-6 sm:mt-8 animate-fadeInUp">
          on <span className="date font-bold text-purple-700">23 February 2025</span>, At{' '}
          <span className="place font-bold text-purple-700">Lohapur (Paschim Kanal Para)</span>{' '}
          Nalhati, Birbhum
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white bg-opacity-70 p-5 sm:p-6 rounded-2xl shadow-xl mt-8 sm:mt-10 border border-purple-300 relative overflow-hidden glow-effect">
  {/* Floating Decorative Elements */}
  <div className="absolute top-2 left-2 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
  <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>

  {/* Title */}
  <h3 className="text-lg sm:text-2xl font-bold text-purple-700 tracking-wide uppercase animate-fadeIn">
    Countdown Begins!
  </h3>

  {/* Timer Display */}
  <div className="flex justify-center gap-4 sm:gap-6 text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4">
    <span className="bg-purple-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md">{timeLeft.days}d</span>
    <span className="bg-purple-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md">{timeLeft.hours}h</span>
    <span className="bg-purple-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md">{timeLeft.minutes}m</span>
    <span className="bg-purple-100 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-md">{timeLeft.seconds}s</span>
  </div>
</div>


      {/* Events */}
      <p className="font-dancing-script font-bold text-center text-2xl sm:text-3xl text-purple-700 my-4 animate-fadeIn">
        Haldi & Mehandi (22<sup>nd</sup> February)
      </p>
      <p className="font-dancing-script font-bold text-2xl text-center sm:text-3xl text-purple-700 my-4 animate-fadeIn">
        Wedding (23<sup>rd</sup> February) to follow
      </p>

      {/* Actions */}
      <div className="actions flex flex-col sm:flex-row justify-center mt-6 gap-4 animate-fadeIn">
        <a
          href="https://maps.app.goo.gl/6nW2Lew1CSWyfRuz5"
          target="_blank"
          rel="noopener noreferrer"
          className="venue bg-pink-600 rounded-2xl text-white text-center py-2 sm:py-3 px-4 sm:px-6 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
        >
          SEE THE MAP <PiMapPinLineBold size={20} />
        </a>
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue bg-pink-600 rounded-2xl text-white text-center py-2 sm:py-3 px-4 sm:px-6 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
        >
          ADD TO GOOGLE CALENDAR <FaCalendarPlus size={20} />
        </a>
        <a
  href="https://drive.google.com/file/d/1znsgoaSpiP76k_z5c4_MtrDGXux0KbP1/view?usp=sharing"
  download="Invitation | 23 Feb | Hope to see you there!"
  className="venue bg-pink-600 rounded-2xl text-white text-center flex items-center justify-center gap-2 py-2 sm:py-3 px-4 sm:px-6 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
>
  <FiDownload size={20} /> DOWNLOAD INVITATION CARD
</a>
      </div>

      {/* Footer */}
      <p className="footer text-gray-600 text-center text-sm sm:text-base mt-6 animate-fadeIn">
        Can't wait to celebrate this auspicious moment with you! <br />
        Just a ping away for any queries: <span className="font-semibold">+91 9832744839 <sub className='text-pink-700'>by Kohinur & Sahanur</sub></span>
      </p>
      <p className="text-pink-700 text-center text-3xl sm:text-4xl font-bold mt-6 animate-pulse">
        Join us in our happiness!
      </p>

      {/* Background Wedding Song */}
      <audio id="wedding-song" autoPlay>
  <source src="/song.mp3" type="audio/mpeg" />
</audio>
    </div>
  );
};

export default WeddingInvitation;
