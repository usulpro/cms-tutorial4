import { getCmsKey, AdapterFn } from '@focus-reactive/cms-kit-sanity';
import { vercelStegaSplit } from '@vercel/stega';

type SaProps = {
  _type: string;
  _id: string;
  cards: Array<object>;
};

// @ts-ignore
export const sa: AdapterFn = (cmsProps: SaProps) => {
  return {
    key: getCmsKey(cmsProps),
    // @ts-ignore
    description: 'hellow world',
    ...cmsProps,
    cards: cmsProps.cards || [],
  };
};

// @ts-ignore
export const saSimpleCard: AdapterFn = (cmsProps: { badgeColor: string }) => {
  return {
    key: getCmsKey(cmsProps),
    ...cmsProps,
    badgeColor:
      cmsProps.badgeColor && vercelStegaSplit(cmsProps.badgeColor).cleaned,
  };
};
