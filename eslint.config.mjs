import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat to convert old-style ESLint configs to the new Flat Config system
const compat = new FlatCompat({
  baseDirectory: __dirname, // Current directory for resolving configs
});

const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals"), // Next.js recommended + core web vitals
  {
    ignores: ["node_modules", ".next", "out"], // Ignore common Next.js build folders
  },
];

export default eslintConfig;
