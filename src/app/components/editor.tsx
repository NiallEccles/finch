import { useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import { Box, Card } from '@mantine/core';
import MDEditor from '@uiw/react-md-editor';
import exampleMarkdown from '../../exampleMarkdown';


export function Editor() {
  const [markdown, setMarkdown] = useState<string|undefined>(exampleMarkdown);

  type previewType =
    "live" | "edit" | "preview";

  const preview: previewType = 'live';

  return (
    <Box m="md" style={{height: '95dvh'}}>
      <SimpleGrid cols={1}>
        <div>
          <MDEditor
            value={markdown}
            onChange={setMarkdown}
            preview={preview}
            hideToolbar={true}
            enableScroll={true}
            height={'95dvh'}
          />
        </div>
      </SimpleGrid>
    </Box>
  );
}

export default Editor;
