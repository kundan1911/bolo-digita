import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const DesignPage = () => {
 
  return (
    <React.Fragment key={"website-design"}>
      <InnerMain style={"body-style-1"}>
        <h1>Community Engagement</h1>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/web-design.svg"}>
        
        <p>
        Engage your audience with a diverse set of marketing campaigns to target growth and engagement. With the goal of keeping your members more active and immersed in the content of your project, community engagement increases conversion rate and leverages your community as a marketing asset.
        </p>
      </DescriptionService>
     
    </React.Fragment>
  );
};

export default DesignPage;
