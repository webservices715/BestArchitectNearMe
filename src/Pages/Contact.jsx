import React, { useEffect } from "react";

import ContactBanner from "../components/ContactBanner";
import Contactus from "../components/Contactus";
import FollowOnSocailM from "../components/FollowOnSocailM";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className="pt-24 bg-gray-50">
    <ContactBanner />
    <Contactus />
    <FollowOnSocailM />
  </div>
  );
}

export default Contact;
