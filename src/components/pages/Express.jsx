import React from "react";

export default function Express() {
  const npmExpress = `npm install express`;
  const routeCode = `const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
      res.send('Hello, World!');
  });
  `;
  const mwCode = `const express = require('express');
  const app = express();
  
  // Middleware function
  app.use((req, res, next) => {
      console.log('Middleware function');
      next();
  });
  
  app.get('/', (req, res) => {
      res.send('Hello, World!');
  });
  `;
  const ejsExample = `const express = require('express');
  const app = express();
  
  // Set EJS as the view engine
  app.set('view engine', 'ejs');
  
  // Render a dynamic view
  app.get('/', (req, res) => {
      res.render('index', { title: 'Express.js' });
  });
  `;
  const staticFile = `const express = require('express');
  const app = express();
  
  // Serve static files from the 'public' directory
  app.use(express.static('public'));
  `;
  const errCode = `const express = require('express');
  const app = express();
  
  // Error-handling middleware
  app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
  });
  `;
  return (
    <>
      <section>
        <h1>Express.js</h1>
        <div>
          <p>
            Simply put, Express.js is a framework for node that provides a thin
            layer of fundamental web application features without obscuring the
            underlying Node.js functionality. It is designed to make it easier
            to build web applications and APIs by providing a simple and
            unopinionated structure. below we will take a look at some different
            ways express can be used and what it is most popularly used for.
          </p>
          <p>
            Before we dive in it is important to understand how this framework
            comes into the process of building a web application. First a user
            makes a request(url in broswer) think of it like a street and on one
            side someone is yelling to their friend, the friend being yelled at
            is the server. There is middleware that parses the information and
            then the server receives the request; the data is retreived and the
            information is sent back to the client. This server side code is
            where express and node come together to run our javascript
            "environment" basically just rules for our datas structure that we
            define to be interpereted by the browser.
          </p>
        </div>
        <div>
          <h3>install express with npm.</h3>
          <pre>
            <code>{npmExpress}</code>
          </pre>
        </div>
        <div>
          <h2>Key features of Express</h2>
          <ul>
            <li>
              <h3>Routing</h3>
              <p>
                Express simplifies the definition of routes for handling
                different HTTP methods and URL patterns. Routes are defined
                using methods like get, post, put, and delete; or CRUD (Create,
                Read, Update, Delete).
              </p>
              <pre>
                <code>{routeCode}</code>
              </pre>
            </li>
            <li>
              <h3>Middleware</h3>
              <p>
                Middleware functions are functions that have access to the
                request and response objects. They can modify these objects, end
                the request-response cycle, or call the next middleware function
                in the stack.
              </p>
              <pre>
                <code>{mwCode}</code>
              </pre>
            </li>
            <li>
              <h3>Templating engines</h3>
              <p>
                Express supports various templating engines, such as EJS, Pug,
                and Handlebars, allowing developers to dynamically render HTML
                on the server.
              </p>
              <p> below is an example using EJS</p>
              <pre>
                <code>{ejsExample}</code>
              </pre>
            </li>
            <li>
              <h3>Static Files</h3>
              <p>
                Express makes it easy to serve static files, such as images,
                stylesheets, and scripts. for example:
              </p>
              <pre>
                <code>{staticFile}</code>
              </pre>
            </li>
            <li>
              <h3> Error Handling</h3>
              <p>
                Express provides a straightforward way to handle errors through
                middleware functions. Error-handling middleware functions take
                four arguments, allowing developers to catch and process errors
                in a centralized manner. see below ex:
              </p>
              <pre>
                <code>{errCode}</code>
              </pre>
            </li>
            <li>
              <h3>RESTful APIs</h3>
              <p>
                Express is commonly used for restfull apis as it simplifies
                creating crud endpoints and makes structuring code bases easier.
              </p>
            </li>
          </ul>
          <div>
            <h2>Express Middleware</h2>
            <p>
              Middleware functions in Express can perform a wide range of tasks,
              such as logging, authentication, and data parsing. Middleware is
              executed in the order it's defined, and each middleware function
              has access to the request, response, and the next middleware
              function in the stack.
            </p>
          </div>
          <div>
            <h2>Routing in Express</h2>
            <p>
              Express allows the creation of modular and organized routing
              structures. Routes can be mounted in a hierarchy, making it easier
              to manage complex applications.
            </p>
          </div>
          <div>
            <h2>Express Generator</h2>
            <p>
              The Express Generator is a command-line tool that helps scaffold a
              basic Express.js application structure. It generates a directory
              with a predefined project structure, including routes, views, and
              configuration files.
            </p>
          </div>
          <div>
            <h2>Community</h2>
            <p>
              Express has a large and active community. Its popularity has led
              to the development of numerous middleware modules and extensions,
              further extending its functionality.
            </p>
          </div>
          <div>
            <h2>Security and best practices</h2>
            <p>
              Express applications should follow security best practices, such
              as validating and sanitizing user input, implementing secure
              session management, and using HTTPS to encrypt data in transit.
            </p>
          </div>
          <div>
            <h2>Websockets with Express</h2>
            <p>
              While Express primarily focuses on HTTP, it can be extended to
              support WebSockets using libraries like ws or socket.io for
              real-time bidirectional communication. Express.js is a
              powerful and flexible web application framework for Node.js. Its
              simplicity, along with its rich feature set, makes it a popular
              choice for building web applications, APIs, and even
              microservices. Developers can leverage Express to create scalable
              and maintainable server-side applications with ease.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
