import React, { useEffect, useState } from 'react';

const BlogEntry = ({ title, date, content, tags }) => (
  <div className="blog-entry">
    <h2>{title}</h2>
    <p><em>{date}</em></p>
    <div>{content}</div>
    <p><strong>Tags:</strong> {tags.join(', ')}</p>
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
