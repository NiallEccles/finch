import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import useSelectDirectory from './hooks/useSelectDirectory';
import selectDirectory from './utils/selectDirectory';
import { useEffect, useState } from 'react';


export function App() {
  // const { isLoading, resetState } = useSelectDirectory();
  const [directory, setDirectory] = useState();

  const handleClick = () => {
    selectDirectory().then(dir => setDirectory(dir));
  };

  useEffect(() => {
    console.log(directory);
  }, [directory]);

  return (
    <MantineProvider>
      <Editor />
      <button onClick={handleClick}>
        Select Directory
      </button>
    </MantineProvider>
  );
}

export default App;
