import Base from '@airtable/blocks/dist/types/src/models/base';

export const toMarkdown = (base: Base): string => {
  let output = '';

  output += base.name;

  return output;
};
