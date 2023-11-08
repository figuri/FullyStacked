import React from "react";

export default function Html() {
  return (
    <section>
      <div>
        <h2>Hyper Text Markup Language</h2>
        <p>
          Html is the standard for creating web pages. It consists of elements
          which are represented by tags that are wrapped in angle brackets. An
          html document is structured is structured using various elements like
          "section", or "article", or "header" to define the content and layout
          of a webpage.
        </p>
        <p>
          Typically Html code is written with a head element classifying the
          title of the webpage, the language and sometimes including some css
          stylesheet links. then comes the body tag which contains the main
          elements making up the webpages contents.
        </p>
      </div>
      <div>
        <h2>Html Code example</h2>
        <pre>
          <code>
            &lt;div class="example"&gt; &lt;p&gt;Hello, World!&lt;/p&gt;
            &lt;ul&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt;
            &lt;li&gt;Item 3&lt;/li&gt; &lt;/ul&gt; &lt;/div&gt;
          </code>
        </pre>
        <p>the code above is a generic div tag that is the parent element of the child elements contained within it. Like most programming languages html elements have priority within the document. when writing your html code make sure to follow semantic structure so that your html code is readable. using the correct or "semantic" tag names for your html code is best practice and will help you an others understand the code better. such as making the header a "header" tag or a side peice of information "aside" or "article".</p>
        <p>HTML elements can have attributes that provide additional information about the element. Attributes are usually in name/value pairs like name="value". For example, the "a" element can have a href attribute specifying the URL to link to.</p>
        <p> you can add images, videos and all sorts of media.</p>
      </div>
      <div>
        <h2>HTML5</h2>
        <p>HTML is the backbone of web content. By using various HTML elements and attributes, web developers can create structured and interactive web pages. When a browser renders the HTML code, it displays the content and layout as intended by the developer, allowing users to interact with the information presented on the web page.</p>
      </div>
    </section>
  );
}
