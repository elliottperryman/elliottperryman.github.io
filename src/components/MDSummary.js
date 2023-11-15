import React, { useState, useEffect } from 'react';
import matter from 'gray-matter';

function MDSummary({ fileName}) {
  
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
    <div> <li> Title: {data.title} </li> </div>
  );
}

export default MDSummary;

