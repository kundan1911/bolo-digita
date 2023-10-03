import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { CDN } from "@utils/constant";

const LogoPage = () => {
  

  return (
    <React.Fragment key={"logo"}>
      <InnerMain style={"body-style-1"}>
        <h1>Web Traffic & SEO</h1>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/logo-and-branding.svg"}>
        <p>
        Drive traffic to your website from social media platforms using traffic campaigns to get your project more visibility. Implementing state of the art search engine optimization for keywords or your choice and climbing the rankings all the way to the top.

        </p>
      </DescriptionService>    </React.Fragment>
  );
};

export default LogoPage;
