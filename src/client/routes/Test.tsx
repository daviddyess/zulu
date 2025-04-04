import { Container, Text, Title } from "@mantine/core";
import { useLoaderData } from "react-router";
import classes from "~/client/components/Test/Test.module.css";

const Test = () => {
  const data = useLoaderData();

  return (
    <Container className={classes.test}>
      <Title>Test Page</Title>
      <Text>A child route.</Text>
      <Text>{data.hello}</Text>
    </Container>
  );
};

export default Test;
