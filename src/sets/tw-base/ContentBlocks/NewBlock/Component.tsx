import React from 'react';

import { withCMS } from '@focus-reactive/cms-kit-sanity';
import { ContentBlockGeneric } from '@focus-reactive/cms-kit-sanity/sanity';
import { GenericRichText } from '@focus-reactive/cms-kit-sanity/common';

import { sa } from './sa-adapters';
import { SmartImage } from '../../ContentComponents/SmartImage';
import { Section, SectionProps } from '../../ContentComponents/Section';

const defaultCards: SimpleCardProps[] = [
  {
    company: 'Alphabet Inc.',
    title: 'Official website',
    description:
      'Flowbite helps you connect with friends, family and communities of people who share your interests.',
    link: '#',
  },
  {
    company: 'Microsoft Corp.',
    title: 'Management system',
    description:
      'Flowbite helps you connect with friends, family and communities of people who share your interests.',
    link: '#',
  },
  {
    company: 'Adobe Inc.',
    title: 'Logo design',
    description:
      'Flowbite helps you connect with friends, family and communities of people who share your interests.',
    link: '#',
  },
];

const defaultProps: PortfolioBlockProps = {
  _type: 'tw.newBlock',
  title: 'Our work',
  description:
    'Crafted with skill and care to help our clients grow their business!',
  cards: defaultCards,
};

const RichTextComponents = {
  block: {
    h2: ({ children }: { children: React.ReactElement }) => (
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {children}
      </h2>
    ),
    normal: ({ children }: { children: React.ReactElement }) => (
      <p className="mt-2 text-lg leading-8 text-gray-600">{children}</p>
    ),
  },
};

const ArrowIcon: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 ml-2 -mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

type SimpleCardProps = {
  company: string;
  title: string;
  description: string;
  link: string;
};

const SimpleCard: React.FC<SimpleCardProps> = ({
  company,
  title,
  description,
  link,
}) => {
  return (
    <div className="space-y-4">
      <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
        {company}
      </span>
      <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href={link}
        title=""
        className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        role="button"
      >
        View case study
        <ArrowIcon />
      </a>
    </div>
  );
};

type PortfolioBlockProps = ContentBlockGeneric & {
  title: string;
  description: string;
  cards: SimpleCardProps[];
};

const NewBlock: React.FC<PortfolioBlockProps> = () => {
  const { title, description, cards } = defaultProps;
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default withCMS({ sa })(NewBlock);
