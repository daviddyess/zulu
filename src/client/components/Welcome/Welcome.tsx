import { Text, Title } from "@mantine/core";
import { useRouteLoaderData } from "react-router";
import classes from "~/client/components/Welcome/Welcome.module.css";

export function Welcome() {
  const data = useRouteLoaderData("root");
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "teal", to: "grape" }}
        >
          Zulu
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Rsbuild + React Router + Mantine project includes a minimal
        setup to get started edit App.tsx file.
      </Text>
      <Text ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Hello {data.hello}
      </Text>
    </>
  );
}
