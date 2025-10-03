"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { AlertCircle } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required." }).min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().trim().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
  message: z.string().trim().min(1, { message: "Message is required." }).min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      console.log(data);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-stone-700">Name</Label>
        <Input id="name" {...register("name")} className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 shadow-sm focus:border-stone-500 focus:ring-stone-500" />
        {errors.name && (
          <div className="mt-2 flex items-center text-sm text-red-600">
            <AlertCircle className="mr-1 h-4 w-4" />
            {errors.name.message}
          </div>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-stone-700">Email</Label>
        <Input id="email" type="email" {...register("email")} className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 shadow-sm focus:border-stone-500 focus:ring-stone-500" />
        {errors.email && (
          <div className="mt-2 flex items-center text-sm text-red-600">
            <AlertCircle className="mr-1 h-4 w-4" />
            {errors.email.message}
          </div>
        )}
      </div>
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-stone-700">Message</Label>
        <Textarea id="message" {...register("message")} className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 shadow-sm focus:border-stone-500 focus:ring-stone-500" />
        {errors.message && (
          <div className="mt-2 flex items-center text-sm text-red-600">
            <AlertCircle className="mr-1 h-4 w-4" />
            {errors.message.message}
          </div>
        )}
      </div>
      <Button type="submit" className="w-full justify-center rounded-md border border-transparent bg-stone-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2">Submit</Button>
    </form>
  );
};

export default ContactForm;
