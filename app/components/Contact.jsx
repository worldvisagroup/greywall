"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-[#FFEDE6] text-[#fff] p-8 md:p-16">
      <div className="container mx-auto">
        <h1 className="text-4xl mb-8 lg:text-6xl text-[#313131] text-center md:text-5xl font-light lg:mb-6 font-playfair">
          <span className="relative">
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#313131]"></span>
            Con
          </span>
          tact Us
        </h1>
        <p className="text-2xl mb-6 lg:text-3xl lg:mb-8 text-[#313131] font-montserrat">
          Feel free to contact us at any time.
          <br />
          We will get back to you as soon as we can.
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-base text-[#313131] font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  className="w-full lg:w-[70%] xl:w-[50%] 2xl:w-[55%] bg-[#252525dc] placeholder:text-white/60 text-white font-montserrat"
                  placeholder="Enter your Full name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base text-[#313131] font-medium mb-2"
                >
                  Email Id
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  className="w-full lg:w-[70%] xl:w-[50%] 2xl:w-[55%] bg-[#252525dc] placeholder:text-white/60 text-white font-montserrat"
                  placeholder="Enter your Email Address"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-base text-[#313131] font-medium mb-2"
                >
                  Phone number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  className="w-full lg:w-[70%] xl:w-[50%] 2xl:w-[55%] bg-[#252525dc] placeholder:text-white/60 text-white font-montserrat"
                  placeholder="Enter your Phone Number"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="py-4 lg:py-[22px]">
                <Button
                  type="submit"
                  className="w-full lg:w-[70%] xl:w-[50%] 2xl:w-[55%] py-4 bg-[#313131] text-[#ffff] hover:bg-[#BFBFBF] transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>

              {submitStatus === "success" && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
          <div className="w-full md:w-1/2 md:flex md:justify-end md:items-center mt-8 md:mt-0">
            <div className="bg-[#252525] p-4 lg:p-12 space-y-6 w-full md:w-auto shadow-lg shadow-gray-700/50 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-gray-600/50">
              <div className="flex items-center gap-4">
                <CallIcon className="h-8 w-8 md:h-8 md:w-8" />
                <a href="tel:+919900104114" className="hover:underline">+91 9900104114</a>
              </div>
              <div className="flex items-center gap-4">
                <EmailIcon className="h-8 w-8 md:h-8 md:w-8" />
                <a href="mailto:info@thegreywalinteriors.com" target="_blank" className="break-all hover:underline">
                  info@thegreywalinteriors.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <PlaceIcon className="h-8 w-8 md:h-8 md:w-8" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=464+Shri+Krishna+Temple+Rd+Indira+Nagar+1st+Stage+Bengaluru+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  464, Shri Krishna Temple Rd, Indira Nagar 1st Stage, Bengaluru
                  -560038
                </a>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-2">
                  CONNECT US ON SOCIAL MEDIA
                </h2>
                <div className="flex gap-[28px] py-[12px]">
                  <a
                    href="https://www.instagram.com/the_greywall_interiors/"
                    className="transition-transform hover:scale-110 hover:text-[#1877F2]"
                    target="_blank"
                  >
                    <Image
                      src="/icons/fb.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="h-[30px] w-[30px]"
                    />
                  </a>
                  <a
                    className="transition-transform hover:scale-110 hover:text-[#E1306C]"
                    href="https://www.facebook.com/thegreywallinteriors/"
                    target="_blank"
                  >
                    <Image
                      src="/icons/insta.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="h-[30px] w-[30px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} The Grey Wall. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
