import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  environments: {
    web: {
      output: {
        target: "web",
      },
      source: {
        entry: {
          index: "./src/client/index",
        },
      },
    },
    ssr: {
      output: {
        target: "node",
        distPath: {
          root: "dist/server",
        },
      },
      source: {
        entry: {
          index: "./src/server/index",
        },
      },
    },
  },
  tools: {
    htmlPlugin: false,
    lightningcssLoader: false,
  },
  output: {
    manifest: true,
  },
});
