import Base from '@airtable/blocks/dist/types/src/models/base';
import Field from '@airtable/blocks/dist/types/src/models/field';
import Table from '@airtable/blocks/dist/types/src/models/table';
import { FieldOptions } from '@airtable/blocks/dist/types/src/types/field';
import map from 'lodash.map';
import React, { Fragment } from 'react';

export const AirtableFieldOptions = (props: { base: Base, options: FieldOptions }) => {
  const { base, options } = props;
  let linkedTable: Table;
  let inverseLinkField: Field;
  let referencedFields: Field[] = [];

  if (options?.linkedTableId) {
    linkedTable = base.getTableById(options?.linkedTableId as string);
  }
  if (options?.inverseLinkFieldId) {
    inverseLinkField = linkedTable.getFieldById(options?.inverseLinkFieldId as string);
  }

  return (
    <li>
      Options:
      <ul>
        {
          linkedTable?.name && (
            <li>Linked table: {linkedTable?.name}</li>
          )
        }
        {
          inverseLinkField && (
            <li>Inverse link field: {inverseLinkField.name}</li>
          )
        }
        {
          referencedFields.length > 0 && (
            <li>Reference fields: {map(referencedFields, (field: Field) => field.name)}</li>
          )
        }
        {
          (typeof options?.isValid !== 'undefined' ?? null) && (
            <li>{options?.isValid ? 'Valid: True' : 'Valid: False'}</li>
          )
        }
        {
          (typeof options?.isReversed !== 'undefined' ?? null) && (
            <li>{options?.isReversed ? 'Reversed: True' : 'Reversed: False'}</li>
          )
        }
        {
          options?.choices && (
            <li>
              Choices:
              <ul>
                <li>Count: {(options?.choices as Array<any>).length}</li>

                {map(options?.choices as Array<any>, (choice: any) => {
                  return (
                    <Fragment key={choice.name}>
                      <li>Name: {choice.name}</li>
                      <li>Color: {choice.color}</li>
                    </Fragment>
                  );
                })}
              </ul>
            </li>
          )
        }
        {
          options?.result && (
            <li>Result: {JSON.stringify(options.result, null, 2)}</li>
          )
        }
      </ul>
    </li>
  );
};

export default AirtableFieldOptions;
