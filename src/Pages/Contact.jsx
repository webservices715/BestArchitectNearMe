import React from "react";
import ContactBanner from "../components/ContactBanner";
import Contactus from "../components/Contactus";
import FollowOnSocailM from "../components/FollowOnSocailM";

function Contact() {
  return (
  <div className="pt-24 bg-gray-50">
    <ContactBanner />
    <Contactus />
    <FollowOnSocailM />
  </div>
  );
}

export default Contact;
