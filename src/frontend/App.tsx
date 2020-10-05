import Table from '@airtable/blocks/dist/types/src/models/table';
import { useBase } from '@airtable/blocks/ui';
import map from 'lodash.map';
import React from 'react';
import { toMarkdown } from '../utils/base';

const App = () => {

  // useBase will re-render the block whenever the base's configuration changes: this includes
  // updates to names, descriptions and field options, as well as tables/fields being added or
  // removed. This means the block will always show the latest structure.
  const base = useBase();
  const tables = base.tables;
  console.log('base', base);
  base.tables;

  return (
    <div>
      <h1>Bases compare</h1>

      {toMarkdown(base)}

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

export default App;
