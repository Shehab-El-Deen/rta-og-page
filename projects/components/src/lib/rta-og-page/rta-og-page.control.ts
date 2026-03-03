import { ControlType } from "@sassoftware/vi-api/config";

export const control = {
  category: "Fields",
  controlDescription: {
    defaultText: "rtaOgPage"
  },
  directiveName: "sol-rta-og-page",
  displayName: {
    defaultText: "rtaOgPage"
  },
  name: "rtaOgPage",
  controlAttributes: {
    attributes: {},
    metadata: {
      renderAs: ControlType.WebComponent,
      states: {
        readOnly: true,
        required: true
      }
    }
  }
};
