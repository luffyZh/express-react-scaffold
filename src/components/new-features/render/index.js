import React from 'react';
import RenderArray from './render-array';
import RenderString from './render-string';

const RenderComp = () => (
  <div>
    <h2>下面是render array的返回结果:</h2>
    <RenderArray />
    <h2>下面是render string的返回结果:</h2>
    <RenderString />
  </div>
);

export default RenderComp;