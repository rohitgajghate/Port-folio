import { Button, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
import { useAlert } from "react-alert";
import { contactUs } from "../../actions/user";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const {
    loading,
    message: alertMessage,
    error,
  } = useSelector((state) => state.update);

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2e8vprp",
        "template_o8u09la",
        form.current,
        "PL3Fn0_PmXHHHBKQv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, alertMessage, dispatch]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form
          className="contactContainerForm"
          // onSubmit={contactFormHandler}
          ref={form}
          onSubmit={sendEmail}
        >
          <Typography variant="h4">Contact Us</Typography>

          <input
            placeholder="Name"
            required
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            required
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            name="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button
            variant="contained"
            type="submit"
            value="Send"
            disabled={loading}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
