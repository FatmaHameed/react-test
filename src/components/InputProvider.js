import React, { useState } from 'react';

export const InputProvider = ({ module, setImageSrc }) => {
  return (
    <>
      <label>{module}</label>
      <input
        type="number"
        value={Math.floor(Math.random() * 10)}
        onChange={(event) => {
          event.preventDefault();
          setImageSrc(event.target.value);
        }}
      />
    </>
  );
};
