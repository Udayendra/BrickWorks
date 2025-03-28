import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bgImage1 h-[500px] md:h-[700px] w-full flex items-center justify-center">
        <div className="h-full w-full flex items-center justify-center bg-black/30">
          <div className="text-white commonContainer p-4 md:p-8 text-center md:text-left">
            <span className="text-lg md:text-2xl font-semibold text-highlightColor">
              Connect with Amazing Constructions
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-2">
              Let's Build Together
            </h1>
            <p className="text-sm md:text-lg font-semibold mt-4">
              We’re here to turn your construction dreams into reality. Our expertise in innovative, sustainable, and quality-focused projects ensures every structure not only stands the test of time but enhances life. 
              Reach out, and let’s discuss how we can make your vision a reality.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-accentColor/20 py-10 flex flex-col items-center">
        <div className="commonContainer text-center">
          <h1 className="font-semibold text-highlightColor text-xl">Our Commitment to Quality</h1>
          <p className="text-2xl md:text-3xl font-semibold text-textColor mt-4">
            Customized Construction Solutions
          </p>
          <p className="text-sm md:text-base text-textColor max-w-2xl mx-auto mt-2">
            We offer expert residential, commercial, and industrial construction services designed with quality and precision to meet diverse project needs.
          </p>
        </div>

        {/* Contact Details and Form */}
        <div className="py-10 px-20 flex flex-col lg:flex-row items-center justify-center border  border-gray-300 bg-white mt-10 rounded-xl">
          {/* Contact Details */}
          <div className="flex flex-col gap-5 rounded-xl bg-white text-center lg:text-left max-w-lg">
            <div>
              <h1 className="font-bold text-lg md:text-xl">Give Us a Call</h1>
              <p>(111-111-111)</p>
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl">Email Us</h1>
              <p>info@amazingconstructions.org</p>
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl">Our Location</h1>
              <p>
                123, Maple Business Park<br />
                Hinjewadi Phase 1, Pune, Maharashtra<br />
                411057, India
              </p>
            </div>
          </div>

          {/* Form Divider */}
          <div className="hidden lg:block w-[3px] h-60 bg-gray-200 rounded-full mx-16"></div>
          <div className="block lg:hidden w-80 h-[3px] bg-gray-200 rounded-full my-10"></div>

          {/* Contact Form */}
          <div className=" max-w-lg">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full lg:w-auto bg-highlightColor text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-highlightColor/70 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
