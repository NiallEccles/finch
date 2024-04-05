import React, {useState} from 'react';
import { Flex, SimpleGrid } from '@mantine/core';
import { Box, SegmentedControl } from '@mantine/core';
import MDEditor from '@uiw/react-md-editor';

interface EditorProps {
  markdown: string | undefined,
  setMarkdown: React.Dispatch<React.SetStateAction<string | undefined>>
}

type PreviewType =
  "live" | "edit" | "preview";

export function Editor({markdown, setMarkdown} : EditorProps) {
  const viewOptions: PreviewType[] = ['live', 'edit', 'preview'];
  const [viewType, setViewType] = useState<PreviewType>('live');

  return (
    <Box mx="md" mb="md" style={{ height: '80dvh' }}>
      <Flex
        justify="flex-end"
        mb="md"
      >
        <SegmentedControl
          color="gray"
          data={viewOptions}
          value={viewType}
          onChange={(value)=>setViewType(value as PreviewType)}
          className="capitalize"
        />
      </Flex>
      <SimpleGrid cols={1}>
        <div>
          <MDEditor
            value={markdown}
            onChange={setMarkdown}
            preview={viewType}
            hideToolbar={true}
            enableScroll={true}
            height={'80dvh'}
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
