import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h1 className="display-3 text-center mt-4">
    {title}
  </h1>
)

export default Title;
