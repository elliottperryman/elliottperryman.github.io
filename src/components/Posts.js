import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import matter from 'gray-matter';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const filenames = ['post1.md', 'post2.md']; // Array of filenames
  
    const fetchPost = async (fileName) => {
      try {
        const file = await import(`../posts/${fileName}`);
        const response = await fetch(file.default);
        const text = await response.text();
        return { fileName, data: matter(text) };
      } catch (error) {
        console.log(`Error processing ${fileName}:`, error);
        return null;
      }
    };
  
    const processAllPosts = async () => {
      const postsData = await Promise.all(filenames.map((fileName) => fetchPost(fileName)));
      const validPosts = postsData.filter((post) => post !== null);
      setPosts(validPosts);
    };
  
    processAllPosts();
  }, []);

  const location = useLocation();
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // This effect will run when the component mounts and whenever the URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    if (searchQuery) {
      setSearchTerm(searchQuery);
    } else {
      setSearchTerm(''); // Set a default value if the 'search' parameter is not present
    }
  }, [location.search]);

  // const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredPosts = sortedPosts.filter((post) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      post.data.data.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      post.data.data.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search tag or title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('title')}>Title</th>
            <th onClick={() => handleSort('tags')}>Tags</th>
            <th onClick={() => handleSort('date')}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.fileName}>
              <td>{post.data.data.title} <Link to={`/blog/${post.fileName}`}> link </Link></td>
              <td>{post.data.data.tags.join(', ')}</td>
              <td>{post.data.data.date.toDateString()} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
