import React from 'react';
import RenderComp from './render/index';
import FragmentComp from './fragment/index';
import NewLifeCircle from './new-lifecircle/index';

const compObj = {
  '/app/newFeatures/render': <RenderComp />,
  '/app/newFeatures/fragment': <FragmentComp />,
  '/app/newFeatures/newLifeCircle': <NewLifeCircle />
};

const NewFeatures = props => compObj[props.match.url];

export default NewFeatures;