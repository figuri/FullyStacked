import React from 'react';

export default function Css() {
    const cssCode = `selector {
        property: value
    }`
    return (
        <section>
            <div>
                <h2>CSS</h2>
                <p>
                CSS, which stands for Cascading Style Sheets, is a stylesheet language used for describing the look and formatting of a document written in HTML or XML. CSS enables web developers to control the layout, style, and presentation of web pages. 
                </p>
            </div>
            <div>
                <ul>
                    <li>
                        <h3>Basic Syntax</h3>
                        <p>CSS rules consist of a selector and a declaration block. The selector points to the HTML element you want to style, and the declaration block contains one or more property-value pairs separated by semicolons.</p>
                        <p>for example</p>
                        <pre>
                            <code>{cssCode}</code>
                        </pre>
                    </li>
                </ul>
            </div>
        </section>
    )
}