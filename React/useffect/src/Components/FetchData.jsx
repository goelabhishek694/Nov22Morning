import React, { useEffect, useState } from "react";

function FetchData() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
      const result = await resp.json();
      setUsers(result);
    }
    getUsers();
  }, []);
  return (
    <div>
      {users ? (
        <>
          <p>Data Loaded</p>
          <ul>
            {users.map((obj, idx) => (
              <li key={idx}>{obj.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchData;
