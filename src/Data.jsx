import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "./assets/recipe1.jpg";
import recipe2 from "./assets/recipe2.jpg";
import recipe3 from "./assets/recipe3.jpg";
import recipe4 from "./assets/recipe4.jpg";
import recipe5 from "./assets/recipe5.jpg";
import recipe6 from "./assets/recipe6.jpg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
];

export const recipes = [
  {
    id: 1,
    image: recipe1,
    name: "Bread Ramen",
    price: "$30",
  },
  {
    id: 2,
    image: recipe2,
    name: "Creamy Tomato Pasta",
    price: "$70",
  },
  {
    id: 3,
    image: recipe3,
    name: "Marshmallow Noodles",
    price: "$17",
  },
  {
    id: 4,
    image: recipe4,
    name: "Pudding Rice",
    price: "$22",
  },
  {
    id: 5,
    image: recipe5,
    name: "Egg Salad",
    price: "$14",
  },
  {
    id: 6,
    image: recipe6,
    name: "Beetroot Sushi",
    price: "$90",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+902-539-122-801",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "feastofare4u.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "23 Highway Valley, Goa"
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "HOME",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "ABOUT",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "recipe",
    text: "RECIPE",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "CONTACT",
    icon: <MdContactPage />,
  },
];

export const explores = ["Beverages", "Maincourse", "Starters", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3];
