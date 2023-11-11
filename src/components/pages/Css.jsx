import React from "react";
import boxModel from "../../../pub/images/boxmodel.png";

export default function Css() {
  const cssCode = `selector {
        property: value
    }
    
    Example usage:
    
    h1 {
        color: blue;
        font-size: 34px;
    }`;

  const propAndVal = `body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    margin: 20px;
}
`;
  return (
    <section>
      <div>
        <h2>CSS</h2>
        <p>
          CSS, which stands for Cascading Style Sheets, is a stylesheet language
          used for describing the look and formatting of a document written in
          HTML or XML. CSS enables web developers to control the layout, style,
          and presentation of web pages.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <h3>Basic Syntax</h3>
            <p>
              CSS rules consist of a selector and a declaration block. The
              selector points to the HTML element you want to style, and the
              declaration block contains one or more property-value pairs
              separated by semicolons.
            </p>
            <p>for example</p>
            <pre>
              <code>{cssCode}</code>
            </pre>
            <p>
              In this example, the CSS rule selects all h1 elements and changes
              their text color to blue and font size to 34 pixels.
            </p>
          </li>
          <li>
            <h3>Selectors</h3>
            <p>
              Selectors target HTML elements to apply styles. There are various
              types of selectors:
            </p>
            <ul>
              <li>
                Element Selector: Targets a specific HTML element (e.g., h1, p).
              </li>
              <li>
                Class Selector: Targets elements with a specific class attribute
                (e.g., .classname).
              </li>
              <li>
                ID Selector: Targets a specific element with a specific ID
                attribute (e.g., #idname).
              </li>
              <li>
                Descendant Selector: Targets an element inside another element
                (e.g., div p targets all p elements inside div elements).
              </li>
            </ul>
          </li>
          <li>
            <h3>Properties and Values</h3>
            <p>
              CSS properties define what aspect of the element you want to style
              (e.g., color, font-size, margin). Each property has one or more
              allowed values that specify the style details.
            </p>
            <pre>
              <code>{propAndVal}</code>
            </pre>
            <p>
              In this example, the background color of the body element is set
              to light gray (#f0f0f0), the font family to Arial and sans-serif
              as fallback, and a margin of 20 pixels on all sides.
            </p>
          </li>
          <li>
            <h3>CSS Box Model</h3>
            <p>
              CSS treats every HTML element as a box. The CSS box model consists
              of the content area, padding, border, and margin.
            </p>
            <ul>
              <li>Content: The actual content of the element.</li>
              <li>Padding: Clear space between the content and the border.</li>
              <li>Border: A border surrounding the padding (optional).</li>
              <li>
                Margin: Clear space outside the border, separating it from other
                elements.
              </li>
              <img src={boxModel} alt="image of the css box model" />
            </ul>
          </li>
          <li>
            <h3>Cascade and Specificity</h3>
            <p>
              CSS rules can come from various sources (user stylesheets, author
              stylesheets, user agent stylesheets) and can conflict. The cascade
              and specificity rules determine which styles are applied when
              conflicts occur.
            </p>
            <ul>
              <li>
                Cascade: Styles are applied in a specific order, and later
                styles can override earlier ones.
              </li>
              <li>
                Specificity: Determines which rule is more specific and,
                therefore, more important. ID selectors have higher specificity
                than class selectors, which, in turn, have higher specificity
                than element selectors.
              </li>
            </ul>
          </li>
          <li>
            <h3>Layout</h3>
            <p>
              CSS is essential for controlling the layout of web pages.
              Properties like float, position, display, and newer techniques
              like Flexbox and Grid layout enable developers to create
              responsive and complex page layouts.
            </p>
          </li>
          <li>
            <h3>Media Queries</h3>
            <p>
              CSS allows the definition of media queries, which apply styles
              based on characteristics of the device, such as screen width,
              height, or orientation. This is crucial for creating responsive
              designs that adapt to different devices and screen sizes.
            </p>
          </li>
          <li>
            <h3>Transitions and Animations</h3>
            <p>
              CSS enables the creation of smooth transitions and animations
              without JavaScript. Developers can define transition effects for
              various properties (e.g., color, width) and create animations
              using keyframes.
            </p>
          </li>
        </ul>
        <p>
          CSS is a powerful language that allows web developers to control the
          visual presentation of HTML elements. By defining styles for various
          selectors, properties, and values, developers can create visually
          appealing and responsive web pages that enhance user experience. CSS
          rules are applied based on selectors, cascading order, and
          specificity, allowing for fine-grained control over the appearance of
          web content.
        </p>
      </div>
    </section>
  );
}
