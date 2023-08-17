import { action } from "@storybook/addon-actions";
import React from "react";
import SecureBiomtericInterfaceIntegrator from "../src/SecureBiometricInterfaceIntegrator";
import { Meta, StoryObj } from "@storybook/react";

const customStyle = {
  selectBoxStyle: {
    borderColor: "#cccccc",
    borderColorActive: "#2684ff",
    borderColorHover: "#b3b3b3",
    panelBgColor: "#fff",
    panelBgColorHover: "#deebff",
    panelBgColorActive: "#2684ff",
  },
  refreshButtonStyle: {
    iconUniCode: "\u21bb",
  },
  verifyButtonStyle: {
    background: "#A9D8E0",
    color: "#140111",
  },
};

const customStyleType = {
  selectBoxStyle: {
    borderColor: "string",
    borderColorActive: "string",
    borderColorHover: "string",
    panelBgColor: "string",
    panelBgColorHover: "string",
    panelBgColorActive: "string",
  },
  refreshButtonStyle: {
    iconUniCode: "string",
  },
  verifyButtonStyle: {
    background: "string",
    color: "string",
  },
};

const sbiEnv = {
  env: "Staging",
  captureTimeout: 30,
  irisBioSubtypes: "UNKNOWN",
  fingerBioSubtypes: "UNKNOWN",
  faceCaptureCount: 1,
  faceCaptureScore: 70,
  fingerCaptureCount: 1,
  fingerCaptureScore: 70,
  irisCaptureCount: 1,
  irisCaptureScore: 70,
  portRange: "4501-4505",
  discTimeout: 15,
  dinfoTimeout: 30,
  domainUri: `${window.origin}`,
};

const sbiEnvType =
  '{\r\n  env: "Staging" | "Developer" | "Pre-Production" | "Production",\r\n  captureTimeout: "number",\r\n  irisBioSubtypes: "Left" | "Right" | "UNKNOWN",\r\n  fingerBioSubtypes:\r\n    "Left IndexFinger" | "Left MiddleFinger" | "Left RingFinger" | "Left LittleFinger" | "Left Thumb" | "Right IndexFinger" | "Right MiddleFinger" | "Right RingFinger" | "Right LittleFinger" | "Right Thumb" | "UNKNOWN",\r\n  faceCaptureCount: 1,\r\n  faceCaptureScore: "0-100",\r\n  fingerCaptureCount: "1-10",\r\n  fingerCaptureScore: "0-100",\r\n  irisCaptureCount: "1-2",\r\n  irisCaptureScore: "0-100",\r\n  portRange: "4501-4600",\r\n  discTimeout: "number",\r\n  dinfoTimeout: "number",\r\n  domainUri: "string",\r\n}';

const SBIMeta = {
  title: "JavaScript/Secure Biometric Interface",
  tags: ["autodocs"],
  component: SecureBiomtericInterfaceIntegrator,
  argTypes: {
    //   container: {
    //     control: "object",
    //     type: { required: true, name: "HTMLElement" },
    //     description:
    //       "Container inside of which the whole component will be created",
    //   },
    langCode: {
      control: "select",
      options: [
        "en",
        "hi",
        "ta",
        "kn",
        "ar",
        "eng",
        "hin",
        "tam",
        "kan",
        "ara",
      ],
      type: { name: "string" },
      description: "Language code",
      table: {
        defaultValue: { summary: "en" },
        type: {
          summary: "en | hi | ta | kn | ar | eng | hin | tam | kan | ara",
        },
      },
    },
    disable: {
      control: "boolean",
      description: "To disable `scan & verify` button.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    buttonLabel: {
      control: "text",
      description: `Capture button label`,
      table: {
        defaultValue: { summary: "scan_and_verify" },
        type: {
          summary: "scan | scan_and_verify | capture | capture_and_verify",
        },
      },
    },
    transactionId: {
      control: "text",
      description: "Transaction Id for the capture",
      table: {
        type: { summary: "string" },
      },
    },
    customStyle: {
      control: "object",
      description: "Json object for customize the css of the component.",
      table: {
        defaultValue: {
          detail: JSON.stringify(customStyle, null, "  "),
          summary: "customStyle",
        },
        type: {
          detail: JSON.stringify(customStyleType, null, "  "),
          summary: "CustomStyleType",
        },
      },
    },
    sbiEnv: {
      control: "object",
      description: "For customization of SBI environment.",
      table: {
        defaultValue: {
          detail: JSON.stringify(sbiEnv, null, "  "),
          summary: "sbiEnv",
        },
        type: {
          detail: sbiEnvType,
          summary: "SbiEnvType",
        },
      },
    },
    onCapture: {
      control: "events",
      // type: { required: true },
      description:
        "The function to be called with Biometric response (successful/failed capture response)",
    },
    onErrored: {
      control: "events",
      description:
        "Optional callback function on capture failure with the error code string (likely due to timeout)",
    },
    id: {
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
export default SBIMeta;
type Story = StoryObj<typeof SBIMeta>;

export const Primary: Story = {
  args: {
    id: "sbi_story",
    buttonLabel: "scan_and_verify",
    disable: false,
    langCode: "en",
    sbiEnv,
    onCapture: (e: any) => action("onCapture")(e),
    onErrored: (e: any) => action("onErrored")(e),
  },
};

Primary.parameters = {
  docs: {
    source: {
      code: `
      <div id="secure-biometric-interface-integrator"></div>

      // in javascript
      SecureBiometricInterface.init({
        container: document.getElementById("secure-biometric-interface-integrator"),
        buttonLabel: "scan_and_verify",
        sbiEnv: {
          env: "Staging",
          captureTimeout: 30,
          irisBioSubtypes: "UNKNOWN",
          fingerBioSubtypes: "UNKNOWN",
          faceCaptureCount: 1,
          faceCaptureScore: 70,
          fingerCaptureCount: 1,
          fingerCaptureScore: 70,
          irisCaptureCount: 1,
          irisCaptureScore: 70,
          portRange: "4501-4502",
          discTimeout: 6,
          dinfoTimeout: 30,
          domainUri: \`${window.origin}\`,
        },
        langCode: "en",
        disable: false,
        transactionId: "123456789",
        onCapture: (e) => {
          console.log("*******************gettiing the biometric response");
          console.log(e);
        },
        onErrored: (e) => {
          console.log("**********getting error from secure bio device");
          console.log(e);
        },
      });
      `,
    },
  },
};

export const WithCustomStyle: Story = {
  args: {
    id: "sbi_story_with_custom_style",
    buttonLabel: "scan_and_verify",
    disable: false,
    langCode: "en",
    sbiEnv,
    customStyle,
    onCapture: (e: any) => action("onCapture")(e),
    onErrored: (e: any) => action("onErrored")(e),
  },
};

WithCustomStyle.parameters = {
  docs: {
    source: {
      code: `
      <div id="secure-biometric-interface-integrator"></div>

      // in javascript
      SecureBiometricInterface.init({
        container: document.getElementById("secure-biometric-interface-integrator"),
        buttonLabel: "scan_and_verify",
        sbiEnv: {
          env: "Staging",
          captureTimeout: 30,
          irisBioSubtypes: "UNKNOWN",
          fingerBioSubtypes: "UNKNOWN",
          faceCaptureCount: 1,
          faceCaptureScore: 70,
          fingerCaptureCount: 1,
          fingerCaptureScore: 70,
          irisCaptureCount: 1,
          irisCaptureScore: 70,
          portRange: "4501-4502",
          discTimeout: 6,
          dinfoTimeout: 30,
          domainUri: \`${window.origin}\`,
        },
        customStyle: {
          selectBoxStyle: {
            borderColor: "#cccccc",
            borderColorActive: "#2684ff",
            borderColorHover: "#b3b3b3",
            panelBgColor: "#fff",
            panelBgColorHover: "#deebff",
            panelBgColorActive: "#2684ff",
          },
          refreshButtonStyle: {
            iconUniCode: "\u21bb",
          },
          verifyButtonStyle: {
            background: "#A9D8E0",
            color: "#140111"
          }
        }
        langCode: "en",
        disable: false,
        transactionId: "123456789",
        onCapture: (e) => {
          console.log("*******************gettiing the biometric response");
          console.log(e);
        },
        onErrored: (e) => {
          console.log("**********getting error from secure bio device");
          console.log(e);
        },
      });
      `,
    },
  },
};
