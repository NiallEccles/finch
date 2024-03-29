import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger } from '@mantine/core';
import { useState } from 'react';


export function App() {
  const [opened, toggle] = useState(false);
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <div>Finch</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main><Editor/></AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
