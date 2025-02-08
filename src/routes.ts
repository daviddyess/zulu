import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import App from './App';
import Test from './Test';
import Root from './root';

const isServer = typeof document === 'undefined';

export default [
  {
    id: 'root',
    Component: Root,
    path: '/',
    async loader(args: LoaderFunctionArgs) {
      const mod = await import('./root.js');
      if (mod?.loader) {
        return mod.loader(args);
      }
    },
    async action(args: ActionFunctionArgs) {
      const mod = await import('./root.js');
      if (mod?.action) {
        return mod.action(args);
      }
    },
    children: [
      {
        id: 'app',
        Component: App,
        index: true,
      },
      {
        id: 'test',
        Component: Test,
        path: 'test',
      },
    ],
  },
];
