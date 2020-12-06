import React, { useState, createContext } from 'react';

const inputContext = createContext();

export const InputProvider = () => {
  const [imageSrc1, setImageSrc1] = useState(0);
  const [imageSrc2, setImageSrc2] = useState(0);
  const [imageSrc3, setImageSrc3] = useState(0);
  const [imageSrc4, setImageSrc4] = useState(0);
  const [imageSrc5, setImageSrc5] = useState(0);
  const [imageSrc6, setImageSrc6] = useState(0);
  return (
    <inputContext.Provider>
      <label>HTML/CSS</label>
      <input
        type="number"
        name="src1"
        value={10}
        onChange={(event) => {
          event.preventDefault();
          setImageSrc1(event.target.value);
        }}
      />
      <label>JS1</label>
      <input
        type="number"
        name="src2"
        value={9}
        onChange={(event) => {
          event.preventDefault();

          setImageSrc2(event.target.value);
        }}
      />
      <label>JS2</label>
      <input
        type="number"
        name="src2"
        value={9}
        onChange={(event) => {
          event.preventDefault();

          setImageSrc3(event.target.value);
        }}
      />
      <label>JS3</label>
      <input
        type="number"
        name="src3"
        value={3}
        onChange={(event) => {
          event.preventDefault();

          setImageSrc3(event.target.value);
        }}
      />
      <label>Node.JS</label>
      <input
        type="number"
        name="src4"
        value={7}
        onChange={(event) => {
          event.preventDefault();

          setImageSrc4(event.target.value);
        }}
      />
      <label>Databases</label>
      <input
        type="number"
        name="src5"
        value={10}
        onChange={(event) => {
          event.preventDefault();

          setImageSrc5(event.target.value);
        }}
      />
      <label>React</label>
      <input
        type="number"
        name="src6"
        value={9}
        onChange={(event) => {
          event.preventDefault();

          setImageSrc6(event.target.value);
        }}
      />

      {/* <img src={image}></img> */}
    </inputContext.Provider>
  );
};
