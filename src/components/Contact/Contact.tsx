import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const USER_ID = import.meta.env.VITE_USER_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        (result) => {
          setLoading(false);
          console.log(result.text);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
    }
  };

  return (
    <form
      ref={form}
      id="Contact"
      className="container mx-auto my-10 p-4"
      onSubmit={sendEmail}
    >
      <fieldset className="w-full">
        <legend>
          <h1 className="text-4xl text-iron mb-4">Contact Me</h1>
        </legend>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded-lg p-2 border bg-primary outline-hidden border-iron text-gray-300 placeholder:text-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-lg p-2 bg-primary outline-hidden border border-iron text-gray-300 placeholder:text-gray-300"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="rounded-lg p-2 bg-primary outline-hidden border border-iron text-gray-300 placeholder:text-gray-300"
          />
          <button
            type="submit"
            className="group/btn text-center cursor-pointer items-center gap-2 px-4 py-2 bg-gradient-to-r from-mountain-meadow to-secondary hover:from-mountain-meadow/80 hover:to-secondary/80 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Contact;
