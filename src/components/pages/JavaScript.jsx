import React from "react";

export default function Javascript() {
  const jsCode = `// Single-line comment

  /* Multi-line
     comment */
  
  // Variables
  let variableName = value;
  
  // Functions
  function functionName(parameters) {
      // Code block
  }
  
  // Conditional statements
  if (condition) {
      // Code to be executed if the condition is true
  } else {
      // Code to be executed if the condition is false
  }
  
  // Loops
  for (let i = 0; i < 5; i++) {
      // Code to be executed in each iteration
  }
  
  // Events (e.g., button click)
  document.getElementById("myButton").addEventListener("click", function() {
      // Code to be executed when the button is clicked
  });
  `;
  const dataCode = `let number = 42;
  let text = "Hello, World!";
  let isTrue = true;
  let myArray = [1, 2, 3, 4, 5];
  let myObject = { key: "value" };
  `;
  const functionCode = `function add(a, b) {
    return a + b;
}

let result = add(3, 5); // result is 8
`;
  const domCode = `document.getElementById("myElement").textContent = "New Text Content";
`;
  const eventCode = `document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
`;
  const asyncCode = `function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched successfully!");
      }, 2000);
  });
}

fetchData().then(data => {
  console.log(data); // Output: "Data fetched successfully!"
});
`;
  return (
    <section>
      <div>
        <h1>JavaScript</h1>
        <p>
          JavaScript is a high-level, interpreted programming language that
          allows developers to create interactive and dynamic content within web
          browsers. Unlike HTML and CSS, which primarily deal with structure and
          style, JavaScript provides the ability to add functionality, handle
          events, manipulate the DOM (Document Object Model), and communicate
          with servers, making web pages more dynamic and user-friendly. fun
          fact; this paragraph was written in javascript!
        </p>
        <h2>Basic Syntax</h2>
        <p>
          Javascript code can be written seperate from an html document in
          another file using the .js extension but can also be embedded directly
          within html below are some examples.
        </p>
        <div>
          <pre>
            <code>{jsCode}</code>
          </pre>
        </div>
        <div>
          <h2>Concepts.</h2>
          <ul>
            <li>
              <h3>Data types and Variables</h3>
              <p>
                JavaScript supports various data types, including numbers,
                strings, booleans, arrays, objects, and functions. Variables are
                used to store and manipulate data.
              </p>
              <pre>
                <code>{dataCode}</code>
              </pre>
              <p>
                JavaScript has several data types that can be broadly
                categorized into two main groups: primitive data types and
                object data types.
              </p>
              <h2>Primitive Data Types</h2>
              <ul>
                <li>String: Represents textual data, e.g., "Hello, World!".</li>
                <li>
                  number: Represents numeric values, both integers and
                  floating-point numbers, e.g., 42 or 3.14.
                </li>
                <li>boolean: Represents either true or false.</li>
                <li>
                  null: Represents the intentional absence of any object value,
                  denoted by null.
                </li>
                <li>
                  undefined: Denotes a variable that has been declared but not
                  assigned a value, or a function that does not return a value,
                  represented by undefined.
                </li>
                <li>
                  symbol: Introduced in ECMAScript 6, symbols are unique and
                  immutable primitive values, often used as keys for object
                  properties.
                </li>
              </ul>
              <h2>Object Data Types</h2>
              <ul>
                <li>
                  Object: A compound data type that can store key-value pairs.
                  Objects can represent complex entities and are the building
                  blocks for most JavaScript programs.
                </li>
                <li>
                  Object: A compound data type that can store key-value pairs.
                  Objects can represent complex entities and are the building
                  blocks for most JavaScript programs.
                </li>
                <li>
                  Object: A compound data type that can store key-value pairs.
                  Objects can represent complex entities and are the building
                  blocks for most JavaScript programs.
                </li>
              </ul>
              <h2>Methods</h2>
              <p>Objects are a a pair of keys and values. I am sam so if i were an object one such pair might be my name; the key being name and the value being sam. A method is when the value or "property" is a function. sam plays chess so one such "method" might be "playchess" and the value could be a boolean of true since I love chess!</p>
            </li>
          </ul>
          <p>In summary Javascript is a very powerful and complex programming language and no one source would ever be enough to encapsulate all of its wonders.  It runs in web browsers, allowing for client-side interactivity, and it can also be used on server-side platforms. With its rich features, JavaScript is a key technology for modern web development, making websites more engaging, responsive, and user-friendly. Its all up to the writers imagination. </p>
        </div>
      </div>
    </section>
  );
}
