import React, { useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import './Blog.css'

function Model({ path }) {
  const { scene } = useGLTF(path);
  const clonedScene = useMemo(() => clone(scene), [scene]);
  return <primitive object={clonedScene} />;
}

const BlogEntry = ({ title, date, content, tags }) => (
  <div className="blog-entry">
    <div className="text-content">
      <h2>{title}</h2>
      <p><em>{date}</em></p>
      <div>{content}</div>
      <p><strong>Tags:</strong> {tags.join(', ')}</p>
    </div>
    <div className="canvas-container"
      style={{ height: '100%', width: '300px' }}
    >
      <Canvas camera={{ position: [0, 0, 2] }}        >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <Model path="/model.glb" />
      </Canvas>
    </div>
  </div>
);

const Blog = () => {
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    fetch('/blogEntries.json')
      .then(response => response.json())
      .then(data => setBlogEntries(data));
  }, []);

  return (
    <div className="blog">
      {blogEntries.map((entry, index) => (
        <BlogEntry
          key={index}
          title={entry.title}
          date={entry.date}
          content={entry.content}
          tags={entry.tags}
        />
      ))}
    </div>
  );
};

export default Blog;
