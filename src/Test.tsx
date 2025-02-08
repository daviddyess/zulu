import { Container, Text, Title } from '@mantine/core';
import classes from './Test.module.css';

const Test = () => {
  return (
    <Container className={classes.test}>
      <Title>Test Page</Title>
      <Text>A child route.</Text>
    </Container>
  );
};

export default Test;
