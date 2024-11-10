import type { Preview } from "@storybook/react";
import '../src/output.css'; // assuming this is where your Tailwind CSS is imported


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
