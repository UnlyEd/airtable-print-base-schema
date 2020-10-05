import Table from '@airtable/blocks/dist/types/src/models/table';
import { useBase } from '@airtable/blocks/ui';
import map from 'lodash.map';
import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { renderToString } from 'react-dom/server';
import Turndown from 'turndown';

const Xxx = () => {
  // useBase will re-render the block whenever the base's configuration changes: this includes
  // updates to names, descriptions and field options, as well as tables/fields being added or
  // removed. This means the block will always show the latest structure.
  const base = useBase();
  const tables = base.tables;

  return (
    <div>
      <h1>Bases compare</h1>

      <div>
        <h2>Tables overview</h2>

        <p>Amount: {tables.length}</p>
      </div>

      <div>
        <h2>Tables details</h2>
        {
          map(tables, (table: Table) => {
            return (
              <div>
                <h3>{table.name}</h3>

                <p>{table.description}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

const App = () => {
  const turndown = new Turndown({
    headingStyle: 'atx',
  });

  return (
    <TextareaAutosize
      readOnly
      style={{
        overflow: 'auto',
        width: '100%',
        border: 'none',
      }}
    >
      {turndown.turndown(renderToString(<Xxx />))}
    </TextareaAutosize>
  );
};

export default App;
