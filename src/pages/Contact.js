import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/contact.css";
import contact from "../img/par.jpg";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  const onSubmit = async () => {
    try {
      if (!name || !email || !phone || !message) {
        setText("Please enter valid fields");
        setTimeout(() => setText(""), 4000);
        return false;
      }
      setBtnDisable(true);
      await axios.post("https://sore-puce-crow-ring.cyclic.app/sendemail", {
        name,
        email,
        message,
        number: phone,
      });
      setText("Email send successfull");
      setTimeout(() => setText(""), 4000);
      setBtnDisable(true);
    } catch (err) {
      setText(err.message);
      console.log(err);
      setTimeout(() => setText(""), 4000);
      setBtnDisable(true);
    }
  };

  return (
    <div>
      <div className="contact_main">
        <div className="contact_banner">
          <div className="contact_banner_bg">
            <div className="contact_datil">
              <div className="contact_text">
                <h2>avp star at your service</h2>
                <p className="mt-3">
                  We strive to innovate and progress constantly in a sustainable
                  way. We believe it is the right time to shift our paradigm and
                  mindset to bring about a better world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_responsive">
        <div className="contact_img">
          <img src={contact} />
        </div>
        <div className="contact_text_responsive">
          <h2>avp star at your service</h2>
          <p className="mt-3">
            We strive to innovate and progress constantly in a sustainable way.
            We believe it is the right time to shift our paradigm and mindset to
            bring about a better world.
          </p>
        </div>
      </div>

      <div className="help_from">
        <Container>
          <div className="helpfrom_title">
            <h2>contact us</h2>
          </div>

          <Row className="mt-5 align-items-center contact_m">
            <Col lg={3} md={0}></Col>
            <Col lg={3} md={6} sm={6}>
              <div className="from_text">
                <h6>Have any Enquiry?</h6>
                <h6 className="mt-3">Connect to us directly at</h6>
                <h6 className="mt-3">info@avpstar.com</h6>
                <h6 className="mt-3">or</h6>
                <h6 className="mt-3">Fill the Line</h6>
                <h6 className="mt-3">and we"ll get back to you asap</h6>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="from_data">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mail"
                  className="mt-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="mt-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="mt-3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={3} md={0}></Col>
          </Row>
          {text && <h5 className="text-center text-danger m-2">{text}</h5>}
          <div className="drop_button mt-3">
            <button disabled={btnDisable} onClick={onSubmit}>
              drop mail
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
