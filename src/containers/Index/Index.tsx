import React from 'react';

import Title from '../../components/Title/Title';
import IntroParagraph from './IntroParagraph/IntroParagraph';
import Subtitle from '../../components/Subtitle/Subtitle';
import LinearSearchExplanation from './LinearSearchExplanation/LinearSearchExplanation';

const Index: React.FC = () => (
  <div>
    <Title title='Introduction' />
    <IntroParagraph />
    <Subtitle subtitle='Linear Search' />
    <LinearSearchExplanation />
  </div>
);

export default Index;