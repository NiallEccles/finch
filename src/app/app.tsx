import { useState } from 'react';
import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import exampleMarkdown from '../exampleMarkdown';


export function App() {
  const [opened, { toggle }] = useDisclosure();
  const [markdown, setMarkdown] = useState<string|undefined>(exampleMarkdown);

  const handleClick = async () => {
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    console.log(file);
    setMarkdown(contents);
  }

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
          <button onClick={handleClick}>Hello There</button>
        </AppShell.Navbar>
        <AppShell.Main>
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
