import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href={"https://facebook.com/tareq.elmasry.7"}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href={"https://linkedin.com/in/tarek-elmasri201"}
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href={"https://github.com/tarek-elmasri"}
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a href={"#contact"}>
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default SocialMedia;
