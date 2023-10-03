import React from "react";

import { InnerMain } from "@components/InnerMain";
import { DescriptionService } from "@components/Service/DescriptionService";
import { ProcessService } from "@components/Service/ProcessService";
import { CDN } from "@utils/constant";

const SMMPage = () => {
  

  return (
    <React.Fragment key={"smm"}>
      <InnerMain style={"body-style-1"}>
        <h1>CRM</h1>
      </InnerMain>
      <DescriptionService image={CDN + "/images/services/smm.svg"}>
        <p>
        With Salesforce the number 1 CRM tool we are able to set up a custom pipeline as well as integrate with data prospecting tools. Managing customer relationships will ensure that no leads fall through the cracks and that you are always prepared for any sales situation.

        </p>
      </DescriptionService>
    </React.Fragment>
  );
};

export default SMMPage;
