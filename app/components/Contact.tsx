"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { ENQUIRY_FIELD_NAME, ENQUIRY_FIELD_TYPE } from "@/constants";
import { toast } from "@/hooks/use-toast";

interface Props<T extends FieldValues> {
  schema?: ZodType<T>;
  defaultValues?: T;
  isLandingPage?: boolean;
}

const Contact = <T extends FieldValues>({
  isLandingPage,
  schema,
  defaultValues = {} as T,
}: Props<T>) => {
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: SubmitHandler<T> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `Message sent successfully!`,
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: `${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className={cn(
        `${
          isLandingPage ? "bg-[#FFFBFA]" : "bg-[#FFEDE6]"
        } text-[#fff] p-8 md:p-16`
      )}
    >
      <div className="container mx-auto">
        {isLandingPage ? (
          <></>
        ) : (
          <>
            <h1 className="text-4xl py-8 lg:text-7xl text-[#313131] text-center md:text-5xl font-light lg:mb-6 font-northwell">
              <span className="relative">
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#313131]"></span>
                Con
              </span>
              tact Us
            </h1>
          </>
        )}
        {!isLandingPage && (
          <p className="text-2xl mb-6 lg:text-3xl lg:mb-8 text-[#313131] font-montserrat">
            Feel free to contact us at any time.
            <br />
            We will get back to you as soon as we can.
          </p>
        )}
        <div
          className={cn(
            `${
              isLandingPage
                ? "flex lg:flex-row flex-col justify-between items-center"
                : "flex flex-col md:flex-row items-center"
            }`
          )}
        >
          {isLandingPage ? (
            <div className="flex flex-col">
              <div className=" md:w-[257px] md:h-[111px] w-[150px] h-[90px]">
                {/* <Image
                  src="/logo/footer-logo.svg"
                  alt="Logo"
                  width={500}
                  height={500}
                /> */}
              </div>
              <p className="lg:text-6xl font-literata md:text-4xl text-2xl md:mb-5 text-[#4B4B4B] lg:mt-10 items-center text-center">
                Readly to Transform your space?
              </p>
            </div>
          ) : (
            <>
              <div className="w-full md:w-1/2 md:pr-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full space-y-3"
                  >
                    {Object.keys(defaultValues).map((field) => (
                      <FormField
                        key={field}
                        control={form.control}
                        name={field as Path<T>}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="capitalize font-montserrat text-[#2C2C2C]">
                              {
                                ENQUIRY_FIELD_NAME[
                                  field.name as keyof typeof ENQUIRY_FIELD_NAME
                                ]
                              }
                            </FormLabel>
                            <FormControl>
                              <Input
                                required
                                type={
                                  ENQUIRY_FIELD_TYPE[
                                    field.name as keyof typeof ENQUIRY_FIELD_TYPE
                                  ]
                                }
                                {...field}
                                className="lg:w-[60%] w-full min-h-10 border 
                                text-[#2C2C2C] border-slate-300 text-base font-semibold font-montserrat placeholder:font-normal placeholder:text-slate-300
                          focus-visible:ring-0 focus-visible:shadow-none "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}

                    <Button
                      type="submit"
                      className="mt-6 min-h-8 lg:w-[60%] w-full bg-[#2C2C2C] hover:bg-[#3C3C3C] text-[14px] font-montserrat"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </Form>
              </div>
            </>
          )}
          <div className="w-full md:w-1/2 md:flex md:justify-end md:items-center mt-8 md:mt-0">
            <div className="bg-[#383838] p-4 lg:p-12 space-y-6 w-full md:w-auto shadow-lg shadow-gray-700/50 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-gray-600/50">
              <div className="flex items-center gap-4">
                <CallIcon className="h-8 w-8 md:h-8 md:w-8" />
                <a
                  href="tel:+919900104114"
                  className="hover:underline font-montserrat"
                >
                  +91 9900104114
                </a>
              </div>
              <div className="flex items-center gap-4">
                <EmailIcon className="h-8 w-8 md:h-8 md:w-8" />
                <a
                  href="mailto:info@thegreywalinteriors.com"
                  target="_blank"
                  className="break-all hover:underline font-montserrat"
                >
                  info@thegreywalinteriors.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <PlaceIcon className="h-8 w-8 md:h-8 md:w-8" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=464+Shri+Krishna+Temple+Rd+Indira+Nagar+1st+Stage+Bengaluru+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-montserrat"
                >
                  464, Shri Krishna Temple Rd, Indira Nagar 1st Stage, Bengaluru
                  -560038
                </a>
              </div>
              <div className="lg:mx-2">
                <h2 className="text-lg font-medium mb-2 font-montserrat">
                  Follow Us{" "}
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
        <p className="text-sm text-gray-400 font-montserrat">
          &copy; {new Date().getFullYear()} The Grey Wall. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
