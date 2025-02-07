"use client";

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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  options: {
    [key: string]: { value: string; label: string }[];
  };
}

const ContactForm = <T extends FieldValues>({
  schema,
  defaultValues,
  options,
}: Props<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact-form-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/thank-you");
      } else {
        toast({
          title: "Error",
          description: `${result.error}`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="lg:w-[340px] md:w-[320px] w-[320px] shadow-lg">
      <CardHeader>
        <h1 className="lg:text-xl md:text-xl text-xl font-semibold flex justify-center font-montserrat">
          Get Free Consultation!
        </h1>
      </CardHeader>
      <CardContent>
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
                    {/* <FormLabel className="capitalize font-montserrat">
                      {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                    </FormLabel> */}
                    <FormControl>
                      {["projectType", "budget"].includes(field.name) ? (
                        <>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue 
                                placeholder={
                                  field.name === "projectType" 
                                    ? "Select Project Type" 
                                    : "Select Budget"
                                } 
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {options[field.name].map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                  className="font-montserrat"
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </>
                      ) : (
                        <Input
                          required
                          type={
                            FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                          }
                          placeholder={
                            FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                          }
                          {...field}
                          className="w-full min-h-10 border border-slate-300 text-base font-semibold font-montserrat placeholder:font-normal placeholder:text-slate-300
                          focus-visible:ring-0 focus-visible:shadow-none "
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              className="mt-6 min-h-8 w-full bg-[#2C2C2C] hover:bg-[#3C3C3C] text-[14px] font-montserrat"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
