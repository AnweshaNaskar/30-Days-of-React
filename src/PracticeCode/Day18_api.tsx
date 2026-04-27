import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface User {
  name: string;
  username: string;
  email: string;
  website: string;
}
const UserDetails = () => {
  const { id } = useParams(); // Matches the :id in the route
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data based on the ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]); // Re-run if the ID changes

  if (loading) return <p>Loading user profile...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
};

export default UserDetails;