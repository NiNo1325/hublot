import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Résolution native des alias `@/*` du tsconfig, sans plugin.
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
