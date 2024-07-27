import React, { useEffect } from "react";

import ContactBanner from "../components/ContactBanner";
import Contactus from "../components/Contactus";
import FollowOnSocailM from "../components/FollowOnSocailM";
import Subscribe from "../components/Subscribe";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className="pt-24">
    <ContactBanner />
    <Contactus />
    <Subscribe />
  </div>
  );
}

export default Contact;
