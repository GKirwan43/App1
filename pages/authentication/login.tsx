import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Card,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  
  export default function Login() {
    return (
      <Container size={420} my={40}>
        <Title
          align="center"
        >
          Welcome back!
        </Title>
  
        <Card withBorder shadow="sm" padding="lg" radius="md" p={30} mt={30}>
          <TextInput label="Username" placeholder="Your username" size="lg" required />
          <PasswordInput label="Password" placeholder="Your password" size="lg" required mt="md" />
          <Group position="apart" mt="lg">
            <Checkbox size="md" label="Remember me" />
            <Anchor component="button" size="md">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth size="md" mt="xl">
            Sign in
          </Button>
        </Card>

        <Text color="dimmed" size="lg" align="center" mt={25}>
          Do not have an account yet?{' '}
          <Anchor size="lg" component="button">
            Create account
          </Anchor>
        </Text>
      </Container>
    );
  }