"use client";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { sendEmail } from "@/app/server/sendEmail";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteLink: "",
    subject: "",
    message: "",
  });




  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);

    // Check all fields are filled
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
    }else{
      const response = await sendEmail(formData.email, formData.subject, formData.message);

      if(response?.status === 200){
        alert("Message Sent Successfully");
      }

    }
  }

  return (
    <div className="w-full">
      <form
        className="md:px-10 gap-10 flex flex-col"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="flex gap-10">
          <div className="w-full">
            <input
              className="border-b-2 border-black placeholder:text-black focus:outline-none w-full"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              name="fullname"
              id=""
              placeholder="Full Name"
              required
              aria-required="true"
            />
           
            <p></p>
          </div>
          <div className="w-full">
            <input
              className="border-b-2 border-black placeholder:text-black focus:outline-none w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              required
              aria-required="true"
            />
          </div>
        </div>
        <div>
          <input
            className="border-b-2 border-black placeholder:text-black focus:outline-none w-full"
            value={formData.websiteLink}
            onChange={(e) =>
              setFormData({ ...formData, websiteLink: e.target.value })
            }
            type="text"
            name="website"
            placeholder="Website Link"
          />
        </div>
        <div>
          <input
            className="border-b-2 border-black placeholder:text-black focus:outline-none w-full"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            type="text"
            name="subject"
            placeholder="Subject"
            aria-required="true"
            required
          />
        </div>
        <div>
          <textarea
            className="border-b-2 border-black placeholder:text-black focus:outline-none w-full"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            name="about"
            placeholder="How Can We Help You?"
            aria-required="true"
            required
          />
        </div>
        <Button className="cursor-pointer rounded-none w-1/2 font-bold text-lg">
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
