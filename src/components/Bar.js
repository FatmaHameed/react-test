import React, { useState } from 'react';
import { InputProvider } from './InputProvider';
import { getBarChartUrl } from '.././util/getChartUrl';
import MODULES from '../modules';

export const Bar = () => {
  const [imageSrc, setImageSrc] = useState([]);

  const image = getBarChartUrl([imageSrc]);
  return (
    <div>
      {MODULES.map((module) => (
        <InputProvider module={module} key={module} setImageSrc={setImageSrc} />
      ))}
      <img src={image} alt="bar chart"></img>
    </div>
  );
};
