import { useEffect, useState } from 'react';
import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, Group, Skeleton, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import exampleMarkdown from '../exampleMarkdown';


export function App() {
  const [opened, { toggle }] = useDisclosure();
  const [markdown, setMarkdown] = useState<string|undefined>(exampleMarkdown);
  const [handle, setHandle] = useState<FileSystemFileHandle>();

  const handleClick = async () => {
    const [fileHandle] = await window.showOpenFilePicker();
    setHandle(fileHandle);
    const file = await fileHandle.getFile();
    const contents = await file.text();
    console.log(file);
    setMarkdown(contents);
  }

  const handleSave = async () => {
    const options: SaveFilePickerOptions = {
      types: [
        {
          description: 'Markdown',
          accept: {
            'text/plain': ['.md'],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    return handle;
  }

  useEffect(() => {
    const writeToFile = async () => {
      if(handle && markdown) {
        const writableStream = await handle.createWritable();
        await writableStream.write(markdown);
        await writableStream.close();
      }
    }
    writeToFile();
  }, [markdown]);

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
          <Button mb={4} variant="default" onClick={handleSave}>Create File</Button>
          <Button variant="default" onClick={handleClick}>Open File</Button>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
