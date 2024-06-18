import { TemplateArea, TemplateCategory } from '@focus-reactive/cms-kit-sanity';
import type { SanityTemplate } from '@focus-reactive/cms-kit-sanity/sanity';

import { newBlock } from './sa-schema';
import newBlockDefaultJSON from './templates/sa-mock-default.json';
import { namespace } from '../../namespace.config';

const newBlockDefault: SanityTemplate = {
  name: 'newBlock',
  type: newBlock.name,
  namespace: namespace.name,
  title: 'Portfolio',
  description: 'Company portfolio with cards',
  category: TemplateCategory.pageBlock,
  area: TemplateArea.marketing,
  template: newBlockDefaultJSON,
  height: 600 + 4, // 4 is iframe border
};

export default [newBlockDefault];
