import '@mantine/core/styles.css';
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from '@mantine/core';
import { Outlet } from 'react-router';
import { Links } from './Grazie/Links';
import { Meta } from './Grazie/Meta';
import { Scripts } from './Grazie/Scripts';

const theme = createTheme({
  //
});

export const loader = async () => {
  return {
    hello: 'world',
  };
};

export default function Root() {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <ColorSchemeScript defaultColorScheme="auto" />
        <Links />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <Outlet />
        </MantineProvider>
        <Scripts />
      </body>
    </html>
  );
}
