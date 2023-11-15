import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { useParams } from 'react-router-dom';


const PostDetail = () => {
  // List of file names for your blog posts
  const { fileName } = useParams();

  const [post, setPost] = useState('');
  useEffect(() => {
    import(`../posts/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [fileName]);
  const {data, content} = matter(post);
  console.log(data)
  return (
    <div className="container">

      <Markdown>{content}</Markdown>
      <div>
      {data.tags && (
        <>
          <h2>Tags:</h2>
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>
                Tag: {tag}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
    </div>
  );
}

export default PostDetail;