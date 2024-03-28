import Markdown from 'react-markdown';
import { useState } from 'react';
import { Textarea } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';

export function Editor() {
  const [markdown, setMarkdown] = useState('# Test');

  return (
    <SimpleGrid cols={2}>
      <Textarea
          value={markdown}
          onChange={(event) => setMarkdown(event.currentTarget.value)}
        />
      <Markdown>{markdown}</Markdown>
    </SimpleGrid>
  );
}

export default Editor;
