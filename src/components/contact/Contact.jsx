import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvoezqnq");
  const formRef = useRef();
  const [message, setMessage] = useState(""); // Added state for message
  const handleFormSubmit = async (event) => {
    await handleSubmit(event);

    // Check if the form submission is successful
    if (state.succeeded) {
      // Clear the input fields
      formRef.current.reset();
      // Update the message state
      setMessage("Thanks, I'll reply ASAP");
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>joshihrishikesh4100@gmail.com</h5>
            <a href="mailto:joshihrishikesh4100@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <input
            id="user_name"
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            id="user_contact"
            type="tel" // Use "tel" type for telephone input
            placeholder="Your Contact Number (10 digits)"
            name="user_contact"
            pattern="[0-9]{10}" // Pattern for 10 digits
            required
          />
          <ValidationError
            prefix="Contact"
            field="user_contact"
            errors={state.errors}
          />
          <input
            id="user_email"
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="user_message"
            placeholder="Your message"
            rows="7"
            name="user_message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="user_message" // Update field name to match the textarea name
            errors={state.errors}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={state.submitting}
          >
            Send Message
          </button>
          {message && <span>{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
