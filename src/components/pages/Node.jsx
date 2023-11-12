import React from "react";

export default function Node() {
  const nodeCode = `// Example: Hello World in Node.js using Express framework

    // Import the Express framework
    const express = require('express');
    
    // Create an Express application
    const app = express();
    
    // Define a route that responds with "Hello, World!"
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
    
    // Start the server on port 3000
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
    `;
  return (
    <>
      <article>
        <h2>Node.js</h2>
        <p>
          Node.js is an open-source, cross-platform JavaScript runtime
          environment designed to execute JavaScript code outside of a web
          browser. It allows developers to build scalable and high-performance
          network applications, making it particularly well-suited for
          server-side development. Node.js is built on the V8 JavaScript
          runtime, which is the same runtime engine that powers Google Chrome.
        </p>
      </article>
      <div>
        <h2>Key features</h2>
        <ul>
          <li>
            <h3>Non blocking I/O</h3>
            <p>
              One of the defining features of Node.js is its event-driven,
              non-blocking I/O model. This allows multiple operations to be
              performed concurrently without waiting for each other to complete,
              making it highly efficient for handling a large number of
              simultaneous connections.
            </p>
          </li>
          <li>
            <h3>Single-threaded Event Loop:</h3>
            <p>
              Node.js operates on a single-threaded event loop. This means that
              all I/O operations are non-blocking, and the server can handle
              many concurrent connections without the need for multi-threading.
              The event loop efficiently manages these asynchronous operations.
            </p>
          </li>
          <li>
            <h3>npm (Node Package Manager):</h3>
            <p>
              npm is the package manager for Node.js, providing a vast ecosystem
              of open-source libraries and tools. Developers can easily install,
              share, and manage dependencies for their Node.js projects using
              npm.
            </p>
          </li>
          <li>
            <h3>Scalability</h3>
            <p>
              Node.js is designed to be scalable. Its event-driven architecture
              makes it suitable for building real-time applications, such as
              chat applications, online gaming platforms, and collaborative
              tools.
            </p>
          </li>
          <li>
            <h3>Cross-platform</h3>
            <p>
              Node.js is compatible with various operating systems, including
              Windows, macOS, and Linux, making it a versatile choice for
              developers working in diverse environments.
            </p>
          </li>
        </ul>
        <h2>Common Use Cases</h2>
        <ul>
          <li>
            <h3>Server side development</h3>
            <p>
              Node.js is widely used for building server-side applications, such
              as web servers, RESTful APIs, and microservices. Its non-blocking
              I/O model makes it efficient for handling a large number of
              concurrent requests.
            </p>
          </li>
          <li>
            <h3>Real time applications</h3>
            <p>
              Node.js is well-suited for real-time applications like chat
              applications, online gaming, and collaboration tools, where
              low-latency communication is crucial.
            </p>
          </li>
          <li>
            <h3>Backend for Web Applications</h3>
            <p>
              Many web frameworks, such as Express.js, leverage Node.js for
              building the backend of web applications. This allows developers
              to use JavaScript for both the frontend and backend, creating a
              more cohesive development experience.
            </p>
          </li>
          <li>
            <h3>Command line tools</h3>
            <p>
              Node.js is often used for developing command-line tools and
              utilities. Its ability to execute JavaScript outside of the
              browser makes it a versatile choice for various scripting tasks.
            </p>
          </li>
          <li>
            <h3>Internet of things (IoT):</h3>
            <p>
              Node.js is used in the development of IoT applications due to its
              lightweight nature and efficiency in handling asynchronous
              operations.
            </p>
          </li>
        </ul>
        <h2>Node.js Architecture</h2>
        <ul>
          <li>
            <h3>V8 engine</h3>
            <p>
              No not that kind of engine. Node.js utilizes the V8 JavaScript
              engine, which compiles JavaScript code to machine code for faster
              execution.
            </p>
          </li>
          <li>
            <h3>Libuv</h3>
            <p>
              Libuv is a library that provides the event loop and asynchronous
              I/O capabilities for Node.js. It abstracts the underlying
              operating system's I/O operations.
            </p>
          </li>
          <li>
            <h3>Core Modules</h3>
            <p>
              Node.js includes a set of core modules that provide essential
              functionalities, such as handling file system operations,
              networking, and managing streams.
            </p>
          </li>
        </ul>
        <div>
          <h2>Heres an example of a simple node.js application</h2>
          <pre>
            <code>{nodeCode}</code>
          </pre>
        </div>
        <h2>Community and Ecosystem</h2>
        <p>
          Node.js has a vibrant and active community. The npm registry hosts
          millions of packages, providing developers with a wealth of reusable
          code and tools.
        </p>
        <h2>Versioning and Long Term Support (LTS):</h2>
        <p>Node.js follows a release schedule, and LTS versions are designated for long-term stability and support. Developers can choose between the current and LTS versions based on their project requirements.</p>
      </div>
      <p>Node.js is a powerful and versatile runtime environment for JavaScript, primarily used for building scalable and high-performance server-side applications. Its non-blocking I/O model, event-driven architecture, and extensive ecosystem of npm packages contribute to its popularity in the web development community.</p>
    </>
  );
}
