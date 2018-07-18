import React from 'react';
import FragmentComp from './fragment';
// import FragmentSugar from './fragment-sugar';
import SugarImage from './sugar-image.jpg';

const RenderComp = () => (
  <div>
    <h2>下面是Fragment的渲染结果:</h2>
    <FragmentComp />
    <h2>下面是Fragment的语法糖:(有问题)</h2>
    <img alt='fragment-sugar' src={SugarImage} />
  </div>
);

export default RenderComp;