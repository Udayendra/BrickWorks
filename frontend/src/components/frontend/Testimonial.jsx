import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/pexels-sindre-fs-1040880.jpg";
import img2 from "../../assets/images/pexels-pixabay-220453.jpg";
import img4 from "../../assets/images/pexels-kampus-5920774.jpg";
import img3 from "../../assets/images/voyage-pro-ZS9DlF_YBSM-unsplash.jpg";
import img5 from "../../assets/images/pexels-olly-3783725.jpg";
import { apiUrl, imageUrl } from "../common/http";
import { TestimonialSkeletonCard } from "../common/SkeletonLoader";

const testimonialData = [
  {
    id: "1",
    rate: "5",
    name: "John Doe",
    description:
      "Excellent service! Highly recommended for their professionalism and quality.",
    img: img1,
    designation: "CEO, Tech Solutions",
  },
  {
    id: "2",
    rate: "4.5",
    name: "Jane Smith",
    description:
      "Great experience! The team was responsive and the service was top-notch.",
    img: img2,
    designation: "Marketing Manager, Creative Co.",
  },
  {
    id: "3",
    rate: "5",
    name: "Alice Johnson",
    description:
      "Amazing support! They went above and beyond to meet our needs.",
    img: img3,
    designation: "Founder, StartUp Hub",
  },
  {
    id: "4",
    rate: "4",
    name: "Michael Brown",
    description:
      "Very satisfied with the outcome. Will definitely work with them again.",
    img: img4,
    designation: "CTO, Innovatech",
  },
  {
    id: "5",
    rate: "4.8",
    name: "Emily White",
    description:
      "Fantastic team! Delivered exactly what was promised, on time and on budget.",
    img: img5,
    designation: "Product Manager, Future Labs",
  },
];

const Testimonial = () => {
  const [viewTestimonial, setViewTestimonial] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchTestimonial = async () => {
    const res = await fetch(apiUrl + "view-testimonial", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    if (result.status) {
      setViewTestimonial(result.data);
    } else {
      console.log("false");
    }
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);

  return (
    <div className="commonContainer">
      <div className="flex flex-col items-center justify-center commonContainer">
        <h1 className="font-semibold text-highlightColor text-xl">
          What Our Clients Say
        </h1>
        <p className="text-[2rem] md:text-[2.5rem] font-semibold text-textColor text-center">
          Trusted Voices, Proven Results
        </p>
        <p className="text-sm text-textColor text-center max-w-2xl">
          Discover how we’ve turned visions into reality through exceptional
          craftsmanship and unwavering dedication.
        </p>
      </div>
      <div className="slider-container my-5 mb-10 ">
        <Slider {...settings}>
          {
                  viewTestimonial.length === 0  
                  ? Array.from({ length: 3 }).map((_, index) => (
                    <TestimonialSkeletonCard key={index} />
                  ))
                  :
          viewTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-[18rem] min-h-[16rem] p-6 bg-white border border-gray-200 rounded-2xl shadow-custom-light m-4 hover:border-highlightColor transition-colors duration-300 "
            >
              <div className="border-b-2 pb-4 border-highlightColor/50">
                <p className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</p>
                <p className="font-normal text-textColor">
                  {testimonial.citation}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={imageUrl + "/testimonials/" + testimonial.image}
                  className="w-16 h-16 rounded-full object-cover"
                  alt="img"
                />
                <div className="px-4 text-left">
                  <h1 className="font-semibold text-xl">
                    {testimonial.testimonial}
                  </h1>
                  {/* <p className="text-sm">{testimonial.designation}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
