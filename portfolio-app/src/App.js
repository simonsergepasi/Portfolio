import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import Blog from './Blog';
import './App.css';
import CollapsibleMenu from './CollapsibleMenu';
import ProfileComponent from './ProfileComponent';

// Get model as a copy to allow multiple renders of the same model.
function Model({ path }) {
  const { scene } = useGLTF(path);
  const clonedScene = useMemo(() => clone(scene), [scene]);
  return <primitive object={clonedScene} />;
}

function App() {
  return (
    <div>
      <CollapsibleMenu />
      <ProfileComponent />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Blog />
      </div>
    </div>
  );
}

export default App;