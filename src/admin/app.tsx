import type { StrapiApp } from "@strapi/strapi/admin";
import React, { lazy, Suspense } from "react";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
    console.log({ app });

    const cm = app.getPlugin("content-manager");

    if (cm && cm.injectComponent) {
      const GenerateInvoice = lazy(() => import("./components/GenerateInvoice"));
     

      cm.injectComponent("editView", "right-links", {
        name: "ai-button",
        Component: () => (
          <Suspense fallback={null}>
            <GenerateInvoice />
          </Suspense>
        ),
      });
    } else {
      console.warn(
        "Content Manager plugin not found or injectComponent not available"
      );
    }
  },
};
