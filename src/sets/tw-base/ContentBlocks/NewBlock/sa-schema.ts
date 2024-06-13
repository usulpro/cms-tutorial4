import {
  BlockPreview,
  customRichText,
} from '@focus-reactive/cms-kit-sanity/sanity';
import { defineBlockType, defineComponentType } from '../../sa-config';

export const simpleCard = defineComponentType(({ df }) => ({
  name: 'simpleCard',
  type: 'object',
  title: 'Simple Card',
  fields: [
    df({
      name: 'company',
      type: 'string',
      title: 'Company',
    }),
    df({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    df({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    df({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
  ],
}));

export const newBlock = defineBlockType(({ df }) => ({
  name: 'newBlock',
  type: 'object',
  title: 'New Block',
  fields: [
    df({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    df({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    df({
      name: 'cards',
      type: 'array',
      of: [{ type: simpleCard.name }],
      title: 'Cards',
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      customTitle: 'customTitle',
      components: 'components',
      blockOptions: 'blockOptions',
    },
    // @ts-ignore
    prepare({ components, blockOptions, customTitle }) {
      return {
        title: customTitle || 'Page block',
        customTitle,
        components,
        blockOptions,
      };
    },
  },
}));

export default [newBlock, simpleCard];