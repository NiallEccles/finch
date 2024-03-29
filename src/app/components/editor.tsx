import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { Box, Card } from '@mantine/core';
import MDEditor from '@uiw/react-md-editor';

interface EditorProps {
  markdown: string | undefined,
  setMarkdown: React.Dispatch<React.SetStateAction<string | undefined>>
}

export function Editor({markdown, setMarkdown} : EditorProps) {

  type previewType =
    "live" | "edit" | "preview";

  const preview: previewType = 'live';

  return (
    <Box m="md" style={{height: '85dvh'}}>
      <SimpleGrid cols={1}>
        <div>
          <MDEditor
            value={''}
            onChange={setMarkdown}
            preview={preview}
            hideToolbar={true}
            enableScroll={true}
            height={'85dvh'}
            textareaProps={{
              placeholder: '# New Document'
            }}
          />
        </div>
      </SimpleGrid>
    </Box>
  );
}

export default Editor;
