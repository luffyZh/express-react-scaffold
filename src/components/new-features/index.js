import React from 'react';
import RenderComp from './render/index';
import FragmentComp from './fragment/index';
import NewLifeCircle from './new-lifecircle/index';
import ErrorBoundaryComp from './error-boundary/index';
import PortalsComp from './portals/index';
import PointerEvents from './pointer-events/index';

const compObj = {
  '/app/newFeatures/render': <RenderComp />,
  '/app/newFeatures/fragment': <FragmentComp />,
  '/app/newFeatures/newLifeCircle': <NewLifeCircle />,
  '/app/newFeatures/errorBoundary': <ErrorBoundaryComp />,
  '/app/newFeatures/portals': <PortalsComp />,
  '/app/newFeatures/pointerEvents': <PointerEvents />
};

const NewFeatures = props => compObj[props.match.url];

export default NewFeatures;