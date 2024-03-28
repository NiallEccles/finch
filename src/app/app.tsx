import Editor from './components/editor';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


export function App() {
  return (
    <MantineProvider>
      <Editor/>
    </MantineProvider>
  );
}

export default App;
