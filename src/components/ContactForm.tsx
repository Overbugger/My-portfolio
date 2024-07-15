"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { redirect } from "next/navigation";

const ContactForm = () => {
  const { toast } = useToast();

  const [isLoading, setLoading] = useState(false);

  return (
    <Card>
      <form
        id="contact-form"
       
        action={async (FormData) => {
         setLoading(true);
          const response = await SendEmail(FormData);
          if (response) {
            setLoading(false);
          }
          if (response.success) {
            toast({
              description: "Your message has been sent.",
            });
            redirect("/");
          } else {
            toast({
              description:
                "Your message wasn't sent due to an error. Please try again.",
            });
          }
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once form is submit you will be redirect to home page.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className=" resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full flex gap-1"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Submit" : "Processing..."}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
