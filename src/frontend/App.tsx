import { useBase } from '@airtable/blocks/ui';
import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { renderToString } from 'react-dom/server';
import Turndown from 'turndown';
import BaseSchema from './BaseSchema';

const App = () => {
  // useBase will re-render the block whenever the base's configuration changes: this includes
  // updates to names, descriptions and field options, as well as tables/fields being added or
  // removed. This means the block will always show the latest structure.
  const base = useBase();

  // Convert HTML into Markdown - See https://github.com/domchristie/turndown
  const turndown = new Turndown({
    headingStyle: 'atx',
  });

  return (
    <TextareaAutosize
      readOnly
      style={{
        border: 'none',

        // Avoid manual resize, take all available width at all times
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
      }}
      value={turndown.turndown(renderToString(<BaseSchema base={base} />))}
    />
  );
};

export default App;
