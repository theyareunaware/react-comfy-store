import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-6xl lg:text-6xl font-bold tracking-tight">We are changing the way people shop</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel magnam minus pariatur quos! Sequi ratione porro
          modi minima praesentium. Repellat atque incidunt ut dolore cum voluptatem cumque beatae cupiditate veniam.
        </p>
        <div className="mt-10">
          <div>
            <Link className="btn btn-primary uppercase" to={"/products"}>
              Our Products
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt="furniture carousel photo" className="rounded-box h-full w-80 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
