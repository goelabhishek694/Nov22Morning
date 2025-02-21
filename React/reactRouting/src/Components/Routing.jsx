import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  Navigate,
} from "react-router-dom";

function Routing() {
  return (
    <div>
      <h1>Routing Example</h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
            border: "2px solid black",
            justifyContent: "centre",
            alignItems: "center",
          }}
        >
          <li>
            {/* <Link to="/">Home</Link> */}
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="company" element={<Company />} />
            <Route path="founder" element={<Founder />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<Users isAdmin={true} />} />
          <Route path="/home" element={<Navigate to={"/"} />} />

          {/* matches with everything */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </nav>
    </div>
  );
}

function Home() {
  return <h1>I am Home Page</h1>;
}

function About() {
  return (
    <>
      <h1>I am About Page</h1>
      <Outlet />
    </>
  );
}

function Contact() {
  return <h1>I am Contact Us Page</h1>;
}

function PageNotFound() {
  return <h1>Oops ! 404 , page not Found</h1>;
}

function Company() {
  return (
    <>
      <h2>Company good, never fire employees</h2>;
    </>
  );
}

function Founder() {
  return (
    <>
      <h2>Founder good, always gives appraisals</h2>
    </>
  );
}

function Users({ isAdmin }) {
  let params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      const results = await resp.json();
      setUser(results);
    }
    fetchUser();
  }, []);

  return (
    <>
      {user == null ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h4>User Name: {user.username}</h4>
          <h3> Address: {user.address.street + " " + user.address.city}</h3>
          <h4> Phone: {user.phone}</h4>
        </>
      )}
    </>
  );
}

export default Routing;
