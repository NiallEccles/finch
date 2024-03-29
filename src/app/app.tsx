import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';


export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>
          <Editor/>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
