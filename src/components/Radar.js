import React, { useState, useContext } from 'react';
import { getRadarChartUrl } from '../util/getChartUrl';
import MODULES from '../modules';
import { InputProvider } from './InputProvider';

export const InputContext = () => {
  const [imageSrc, setImageSrc] = useState([]);

  const image = getRadarChartUrl([imageSrc]);
  return (
    <div>
      {MODULES.map((module) => (
        <InputProvider module={module} setImageSrc={setImageSrc} />
      ))}
      <img src={image}></img>
    </div>
  );
};
