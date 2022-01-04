import React, { useState } from "react";

const ContactForm = (props) => {
  //! State
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //! Function
  const submitContact = (e) => {
    e.preventDefault();
    console.log(state);
  }
  //! Render
  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">Contact Form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Your Name... eg. Dino"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Your Email... eg. dino.dev@gmail.com"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div className="group">
        <textarea
          cols="12"
          row="8"
          className="group__textarea"
          placeholder="White your message eg. Dino is the best Dev"
          defaultValue={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        ></textarea>
      </div>
      <div className="group">
        <input
          type="submit"
          name=""
          className="btn-dark"
          value="send email &rarr;"
        />
      </div>
    </form>
  );
};

export default ContactForm;
