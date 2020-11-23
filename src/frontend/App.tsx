import Field from '@airtable/blocks/dist/types/src/models/field';
import Table from '@airtable/blocks/dist/types/src/models/table';
import View from '@airtable/blocks/dist/types/src/models/view';
import { useBase } from '@airtable/blocks/ui';
import map from 'lodash.map';
import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { renderToString } from 'react-dom/server';
import Turndown from 'turndown';
import AirtableFieldOptions from './FieldOptions';
import Separator from './Separator';

const BaseStructure = () => {
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

        <ul>
          <li>Count: {tables.length}</li>
        </ul>
      </div>

      <Separator />

      <div>
        <h2>Tables details</h2>
        {
          map(tables, (table: Table) => {
            return (
              <div key={table.name}>
                <h3>Table: <b>{table.name}</b></h3>
                <ul>
                  <li>{table.description}</li>
                  <li>Fields count: {table.fields.length}</li>
                  <li>Views count: {table.views.length}</li>
                </ul>

                {
                  table.views.length && (
                    <div>
                      <h4>Views details</h4>
                    </div>
                  )
                }
                {
                  map(table.views, (view: View) => {
                    return (
                      <ul key={view.name}>
                        <li>View: <b>{view.name}</b></li>
                        <li>Type: {view.type}</li>
                      </ul>
                    );
                  })
                }

                <div>
                  <h4>Fields details</h4>
                </div>
                {
                  map(table.fields, (field: Field) => {
                    return (
                      <ul key={field.name}>
                        <li>Field: <b>{field.name}{field.isPrimaryField ? ' (Primary)' : ''}{field.isComputed ? ' (Computed)' : ''}</b></li>
                        <li>
                          <ul>
                            <li>Type: {field.type}</li>
                            {
                              field.description && (
                                <li>Description: {field.description}</li>
                              )
                            }
                            {
                              field.options && (
                                <AirtableFieldOptions base={base} options={field.options} />
                              )
                            }
                            {/*<p>Available aggregators: {JSON.stringify(field.availableAggregators, null, 2)}</p>*/}
                          </ul>
                        </li>
                      </ul>
                    );
                  })
                }

                {/* Put some space between each table */}
                <Separator />
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
        border: 'none',

        // Avoid manual resize, take all available width at all times
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
      }}
      value={turndown.turndown(renderToString(<BaseStructure />))}
    />
  );
};

export default App;
