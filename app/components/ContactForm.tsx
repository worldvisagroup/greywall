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
  FormLabel,
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

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  options: {
    [key: string]: { value: string; label: string }[];
  };
}

const ContactForm = <T extends FieldValues>({
  schema,
  defaultValues,
  //   onSubmit,
  options,
}: Props<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    console.log(data)
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
        toast({
          title: "Success",
          description:
            "Thank you for your submission. We will contact you shortly.",
        });
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
    <Card className="lg:w-[380px] md:w-[380px] min-w-full rounded-[8px] shadow-md">
      <CardHeader>
        <h1 className="text-3xl font-semibold flex justify-center">
          Contact us
        </h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full space-y-6"
          >
            {Object.keys(defaultValues).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                    </FormLabel>
                    <FormControl>
                      {["projectType", "budget"].includes(field.name) ? (
                        <>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {options[field.name].map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
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
                          {...field}
                          className="w-full min-h-10 border border-slate-300 text-base font-bold placeholder:font-normal placeholder:text-slate-300
                          focus-visible:ring-0 focus-visible:shadow-none "
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit" className=" mt-3 min-h-8 w-full  text-base ">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
