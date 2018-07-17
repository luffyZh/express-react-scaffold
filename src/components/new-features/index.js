import React from 'react';
import RenderComp from './render';
import FragmentComp from './fragment';

const compObj = {
  '/app/newFeatures/render': <RenderComp />,
  '/app/newFeatures/fragment': <FragmentComp />
};

const NewFeatures = (props) => compObj[props.match.url];

export default NewFeatures;