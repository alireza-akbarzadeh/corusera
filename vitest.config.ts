/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: [
      'src/**/*.{test,spec}.{ts,tsx}',
      '__test__/**/*.{test,spec}.{ts,tsx}',
      '__tests__/**/*.{test,spec}.{ts,tsx}', // optional: support both singular/plural
    ],
  },
});
