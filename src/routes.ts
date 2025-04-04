import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import App from "~/client/routes/App";
import Test from "~/client/routes/Test";
import Root from "~/client/routes/root";

export default [
  {
    id: "root",
    Component: Root,
    path: "/",
    async loader(args: LoaderFunctionArgs) {
      const mod = await import("./server/routes/root.js");
      if (mod?.loader) {
        return mod.loader(args);
      }
    },
    async action(args: ActionFunctionArgs) {
      const mod = await import("./server/routes/root.js");
      if (mod?.action) {
        return mod.action(args);
      }
    },
    children: [
      {
        id: "app",
        Component: App,
        index: true,
      },
      {
        id: "test",
        Component: Test,
        path: "test",
        async loader(args: LoaderFunctionArgs) {
          const mod = await import("./server/routes/Test.js");
          if (mod?.loader) {
            return mod.loader(args);
          }
        },
      },
    ],
  },
];
