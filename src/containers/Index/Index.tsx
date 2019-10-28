import React from 'react';

import Title from '../../components/Title/Title';
import IntroParagraph from './IntroParagraph/IntroParagraph';
import Subtitle from '../../components/Subtitle/Subtitle';
import LinearSearchExplanation from './LinearSearchExplanation/LinearSearchExplanation';
import BinarySearchExplanation from './BinarySearchExplanation/BinarySearchExplanation';
import SelfOrganizedExplanation from './SelfOrganizedExplanation/SelfOrganizedExplanation';

const Index: React.FC = () => (
  <div>
    <Title title='Introduction' />
    <IntroParagraph />
    <Subtitle subtitle='Linear Search' />
    <LinearSearchExplanation />
    <Subtitle subtitle='Self-Organized Data' />
    <SelfOrganizedExplanation />
    <Subtitle subtitle='Binary Search' />
    <BinarySearchExplanation />
  </div>
);

export default Index;
