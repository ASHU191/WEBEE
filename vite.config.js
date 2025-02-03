import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This points to the 'src' folder
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Ensure this includes .jsx and .js
  },
});
