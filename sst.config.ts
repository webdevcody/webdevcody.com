import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "webdevcody",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: "webdevcody.com",
          domainAlias: "www.webdevcody.com",
        },
        environment: {
          NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
            "6Lf-y1kkAAAAAGxHdHL1gnjQJIjJRR5bGAaIWIOM",
        } as any,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
