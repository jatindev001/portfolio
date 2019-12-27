import React from "react";
import "./contact.css";
export const Contact = () => {
  return (
    <div className="container">
      <p id="heading">Get in touch</p>
      <form class="contact1-form validate-form">
        <div
          class="wrap-input1 validate-input"
          data-validate="Name is required"
        >
          <input class="input1" type="text" name="name" placeholder="Name" />
          <span class="shadow-input1" />
        </div>
        <div
          class="wrap-input1 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <input class="input1" type="text" name="email" placeholder="Email" />
          <span class="shadow-input1" />
        </div>
        <div
          class="wrap-input1 validate-input"
          data-validate="Subject is required"
        >
          <input
            class="input1"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <span class="shadow-input1" />
        </div>
        <div
          class="wrap-input1 validate-input"
          data-validate="Message is required"
        >
          <textarea class="input2" name="message" placeholder="Message" />
          <span class="shadow-input1" />
        </div>
        <div class="container-contact1-form-btn">
          <button class="contact1-form-btn">
            <span>
              Send Email
              {/* <i class="fa fa-long-arrow-right" aria-hidden="true" /> */}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
