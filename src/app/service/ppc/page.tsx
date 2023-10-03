import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { CDN } from "@utils/constant";

const PPCPage = () => {
  

  return (
    <React.Fragment key={"ppc"}>
      <InnerMain style={"body-style-1"}>
        <h1>Content</h1>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/pay-per-click.svg"}>
        <p>
        Create content for social media such as short form, long form clips, pictures, and more. Used for keeping social media engaged as well as advertisements for any other campaigns.

        </p>
      </DescriptionService>
    </React.Fragment>
  );
};

export default PPCPage;
