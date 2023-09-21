import React from "react";
import { FaArrowRight } from "react-icons/fa";
import pasta from "../assets/pasta.png";
import chef from "../assets/chef.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            TOGETHER WE DINE, TOGETHER WE SMILE
          </div>
          <p className="text-sm opacity-70">
            A TASTE OF HEAVEN AND BELOVED RESTAURANT IN TOWN AWAITING YOUR PRESENCE.
          </p>
          <div className="btn">
            <a href="" className="text-white text-[0.85rem]">
              EXPLORE MORE
            </a>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <div className="md:row-start-1">
          <img src={pasta} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            MEET OUR CHEF!
          </div>
          <p className="text-sm opacity-70">
          Chef Rick Astley is a culinary maestro known for his innovative approach to food. Born and raised in London, he studied at Le Cordon Bleu in Paris and gained experience in top kitchens worldwide. His signature style blends global influences, combining traditional and avant-garde techniques. He's famous for creations like the "Never-Ending Ravioli." Beyond his restaurant, Chef Astley has made a global impact through TV appearances, cookbooks, and gourmet ingredients. He's also committed to sustainability and mentoring future chefs, making him a respected figure in the culinary world.
          </p>
        </div>
        <div className="">
          <img src={chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
