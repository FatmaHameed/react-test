import React, { useState } from 'react';
import { getRadarChartUrl } from '../util/getChartUrl';
import MODULES from '../modules';
import { InputProvider } from './InputProvider';

export const Radar = () => {
  const [imageSrc, setImageSrc] = useState([]);

  const image = getRadarChartUrl([imageSrc]);
  return (
    <div>
      {MODULES.map((module) => (
        <InputProvider module={module} key={module} setImageSrc={setImageSrc} />
      ))}
      <img src={image} alt="radar chart"></img>
    </div>
  );
};
