import type { Preview } from "@storybook/nextjs-vite";


import "../src/styles/globals.css"; // Ensure Tailwind styles are applied

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
