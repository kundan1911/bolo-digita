import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const MobilePage = () => {
  

  return (
    <React.Fragment key={"mobile"}>
      <InnerMain style={"body-style-1"}>
        <h1>Organic Promotion</h1>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/app-development.svg"}>
        <p>
        Lucrative marketing strategy where you are able to create and ecosystem of different targeted accounts to allow your content to go further and get more reach. Using these accounts we can drive the traffic back to your page exponentially scaling your content and reach.
        </p>
      </DescriptionService>
    </React.Fragment>
  );
};

export default MobilePage;
