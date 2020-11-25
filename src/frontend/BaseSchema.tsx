import Base from '@airtable/blocks/dist/types/src/models/base';
import Field from '@airtable/blocks/dist/types/src/models/field';
import Table from '@airtable/blocks/dist/types/src/models/table';
import View from '@airtable/blocks/dist/types/src/models/view';
import map from 'lodash.map';
import React from 'react';
import AirtableFieldOptions from './FieldOptions';
import Separator from './Separator';

type Props = {
  base: Base,
}

const BaseSchema: React.FunctionComponent<Props> = (props) => {
  const { base } = props;
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

export default BaseSchema;
