import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { CDN } from "@utils/constant";

const DevelopmentPage = () => {
 

  return (
    <React.Fragment key={"website-development"}>
      <InnerMain style={"body-style-1"}>
        <h1>Social Media Management</h1>
       
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/web-design.svg"}>
      
        <p>
        Get all your different social media platforms managed for you, we will make sure that all posts are posted at the most active times as well as advise you what content is working best according to the metrics
        </p>
      </DescriptionService>
    </React.Fragment>
  );
};

export default DevelopmentPage;
