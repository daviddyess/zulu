import "@mantine/core/styles.css";
import { Links } from "@/zulu/Links";
import { Meta } from "@/zulu/Meta";
import { Scripts } from "@/zulu/Scripts";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import { Outlet } from "react-router";

const theme = createTheme({
  //
});

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
