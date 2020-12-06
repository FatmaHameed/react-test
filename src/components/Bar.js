import React from 'react';
import { InputProvider } from './InputProvider';
import { getBarChartUrl } from '.././util/getChartUrl';

export const Bar = () => {
  const imageSrc = getBarChartUrl([2, 3]);
  return (
    <div>
      <InputProvider />
      <image src={imageSrc}></image>
    </div>
  );
};
