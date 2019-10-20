import React from 'react';

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => (
  <h2 className="display-5 text-left mx-5 my-5">
    {subtitle}
  </h2>
)

export default Subtitle;
