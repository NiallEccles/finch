import { useEffect, useState } from 'react';
import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Burger, Group, Skeleton, Button, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import exampleMarkdown from '../exampleMarkdown';

type Files = {key: string, value: FileSystemFileHandle | FileSystemDirectoryHandle};


export function App() {
  const [opened, { toggle }] = useDisclosure();
  const [markdown, setMarkdown] = useState<string|undefined>(exampleMarkdown);
  const [handle, setHandle] = useState<FileSystemFileHandle>();
  const [files, setFiles] = useState<Files[]>([]);

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

  const handleDirectoryPicker = () => {
    const showDirectoryPicker = async () => {
      const handle = await window.showDirectoryPicker();
      const filesInDirectory: Files[] = [];
      for await (const [key, value] of handle.entries()) {
        console.log({ key, value });
        filesInDirectory.push({key, value});
      }
      setFiles(filesInDirectory);
      return handle;
    }

    showDirectoryPicker();
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
          <Button mb={4} variant="default" onClick={handleDirectoryPicker}>Select Directory</Button>
          <Button mb={4} variant="default" onClick={handleSave}>Create File</Button>
          <Button variant="default" onClick={handleClick}>Open File</Button>
          {/*{Array(15)*/}
          {/*  .fill(0)*/}
          {/*  .map((_, index) => (*/}
          {/*    <Skeleton key={index} h={28} mt="sm" animate={false} />*/}
          {/*  ))}*/}

          {
            files.map((item: Files, index: number) => (
              <NavLink
                href="#required-for-focus"
                key={item.value.name}
                // active={index === active}
                label={item.value.name}
                description={item.value.name}
                // rightSection={item.}
                // leftSection={<item.icon size="1rem" stroke={1.5} />}
                // onClick={() => setActive(index)}
              />
            ))
          }
        </AppShell.Navbar>
        <AppShell.Main>
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
