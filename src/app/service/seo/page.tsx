import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { CDN } from "@utils/constant";

const SEOPage = () => {
  
  return (
    <React.Fragment key={"seo"}>
      <InnerMain style={"body-style-1"}>
        <h1>Data Prospecting</h1>
      
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/seo.svg"}>
        <p>
        Generate leads from a multitude of databases filtering to find your target market. Using our databases and web scraping tools we are able to find the most accurate leads that will apply to your sales campaigns.
        </p>
      </DescriptionService>
    </React.Fragment>
  );
};

export default SEOPage;
