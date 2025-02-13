"use client";

import React from "react";
import Contact from "./Contact";
import { EnquiryContactFormSchema } from "@/validation";

const EnquiryContactForm = () => {
  return (
    <div>
      <Contact
        schema={EnquiryContactFormSchema}
        defaultValues={{
          name: "",
          email: "",
          phoneNumber: "",
        }}
      />
    </div>
  );
};

export default EnquiryContactForm;
