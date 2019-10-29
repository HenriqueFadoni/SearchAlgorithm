import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h1 className="display-3 text-white text-center py-4 bg-secondary">
    {title}
  </h1>
)

export default Title;
