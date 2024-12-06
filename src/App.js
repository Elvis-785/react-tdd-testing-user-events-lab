import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    music: false,
    travel: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCheckboxChange = (e) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <section>
        <h2>Newsletter Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </label>
          <br />
          <label>
            Coding:
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label>
            Music:
            <input
              type="checkbox"
              name="music"
              checked={interests.music}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <label>
            Travel:
            <input
              type="checkbox"
              name="travel"
              checked={interests.travel}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <p>
            Thank you for signing up, {name}! Your interests:
            {Object.keys(interests)
              .filter((interest) => interests[interest])
              .join(", ")}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
