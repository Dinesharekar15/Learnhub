import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coursecard from "@/App/Coursecard";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enables auto slide
    autoplaySpeed: 2000, // Sets slide change interval to 2 seconds (2000ms)
  };

  
  const courses=[
    {
      imgurl:"/4k.jpg",
      title:" coding for begginers",
      description:"learn coding",
      price:40
    },
    {
      imgurl:"/4k.jpg",
      title:" coding for begginers",
      description:"learn coding",
      price:40
    },
    {
      imgurl:"/4k.jpg",
      title:" coding for begginers",
      description:"learn coding",
      price:40
    }
  ]

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full max-w-5xl mx-auto">
      
      <Slider {...settings} className="w-full mb-6">
        {courses.map((i, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={i.imgurl} alt="imageUrl" className="rounded-2xl h-auto" />
          </div>
        ))}
      </Slider>
      <div className="max-w-7xl  w-full mb-8">
      <h2 className="text-2xl font-bold text-center mb-6">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <Coursecard
            key={index}
            imagurl={course.imgurl}
            name={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
      <div className="my-20 w-full">
        <h1 className="text-black font-bold text-5xl">Why LearnHub ?</h1>
        <img src="/whyLearnhub.jpeg" alt="" className="mt-10" />
      </div>
      <div className="mt-14 mb-11 w-full ">
        

        
        <h2 className="text-4xl font-semibold text-center mb-10">About LearnHub</h2>
        <div className="bg-gradient-to-r from-[#E8DDFF] to-[#E1B991] rounded-2xl px-4 font-sans text-start py-4">
          <p className="mb-4">Welcome to Learnhub</p>
          <p className="mb-4">This is an Initiative by <strong>Dinesh Arekar</strong> to personally mentor folks in the field of Programming.</p>
          <p className="mb-4">
            <strong>LearnHub</strong>
          </p>
          <p >
          Join him in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically.
          </p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Home;
