import Markdown from 'react-markdown';
import { useState } from 'react';
import { Textarea } from '@mantine/core';

export function Editor() {
  const [markdown, setMarkdown] = useState('# Test');

  return (
    <div>
      <Textarea
        value={markdown}
        onChange={(event) => setMarkdown(event.currentTarget.value)}
      />
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default Editor;
