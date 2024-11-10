"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>; // Type from Zod schema

export default function ContactForm() {
  // Set up the form with useForm and zodResolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // Specify the correct type for the form submit handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <div className="flex justify-center items-center mt-20 w-full max-w-lg h-auto min-h-[30rem] sm:w-[30rem] sm:h-[30rem]">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username" // Changed from 'firstname' to 'username'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-medium text-slate-900">
                  Username
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter Your Username"
                    {...field}
                    className="text-base font-thin text-slate-300"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-medium text-slate-900">
                  Email
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="text-base font-thin text-slate-300"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-medium text-slate-900">
                  Message
                </FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    {...field}
                    className="text-base font-thin text-slate-300"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex items-center justify-center py-3 my-2 w-[245px] h-[48px] text-[#B88E2F] bg-[#FFFFFF] border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#FFFFFF] mx-4 md:mx-6 text-sm font-medium text-wrap sm:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            SEND
          </Button>
        </form>
      </div>
    </Form>
  );
}
