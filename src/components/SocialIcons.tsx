import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { LINKS } from "@utils/constant";

const SocialIcons = () => {
  return (
    <ul className="social-icons popup">
      <li>
        <a href={LINKS.Instagram} rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href={LINKS.Twitter} rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href={LINKS.Email} rel="noreferrer">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </li>
      <li>
        <a href={LINKS.LinkedIn} rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  );
};

export { SocialIcons };
