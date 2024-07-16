import React from 'react';

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Rigged Stethoscope"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/e0d5ec7eb4c842599205c6f65b14bdd3/embed"
        width="800" // Set the desired width here
        height="600" // Set the desired height here
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/rigged-stethoscope-e0d5ec7eb4c842599205c6f65b14bdd3?utm_medium=embed&utm_campaign=share-popup&utm_content=e0d5ec7eb4c842599205c6f65b14bdd3"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Rigged Stethoscope
        </a>
        {' '}by{' '}
        <a
          href="https://sketchfab.com/simonpasi96?utm_medium=embed&utm_campaign=share-popup&utm_content=e0d5ec7eb4c842599205c6f65b14bdd3"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Simon Pasi
        </a>
        {' '}on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e0d5ec7eb4c842599205c6f65b14bdd3"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;
