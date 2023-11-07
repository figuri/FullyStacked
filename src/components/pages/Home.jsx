export default function Home() {
    return (
        <section>
            <h2>Fully Stacked</h2>
            <div>
                <p>This Webpage is a guide to full stack web development.
                    below is a short introduction to websites and how they work.
                </p>
            </div>
            <article>
                <h3>What is a website?</h3>
                <p>A website is a collection of web pages; these are documents containing text, images and all other sorts of media. These websites are accessible through the internet. they are hosted on servers which can be accessed via web browsers like chrome or safari to name a couple.</p>
                <div>
                    <h4>How do they work?</h4>
                    <ul>
                        <li>
                            <h5>Domain Name</h5>
                            <p>Every webasite has a unique address. Think of it like houses, except instead of an adress with a street number and name we have human readable versions of IP adresses like www.example.com</p>
                        </li>
                        <li>
                            <h5>Web Hosting</h5>
                            <p>Websites are hosted on servers powered by computers that run 24/7. Companies that run these servers provide individuals and organizations space on them to host their websites.</p>
                        </li>
                        <li>
                            <h5>Web Browser</h5>
                            <p>Users access websites through web browsers like Chrome, or Firefox. When you enter a website's domain name into the browser, it sends a request to the website's server.</p>
                            <p>the response you get is the website you requested, granted there are no errors !</p>
                        </li>
                        <li>
                            <h5>HTTP/HTTPS protocol</h5>
                            <p>Hypertext Transfer Protocol (HTTP) and its secure version, HTTPS, are protocols used for transmitting data between the web browser and the web server. HTTPS uses encryption to ensure secure data transmission, which is especially important for sensitive information like login credentials and payment details.</p>
                        </li>
                        <li>
                            <h5>Web Server</h5>
                            <p>When the server receives a request from the user's browser, it processes the request and sends back the requested web page's data to the browser. The server uses software like Apache, Nginx, or Microsoft Internet Information Services (IIS) to handle these requests.</p>
                        </li>
                        <li>
                            <h5>HTML,CSS, and JavaScript</h5>
                            <p>Websites are built using various programming languages and technologies. HTML (HyperText Markup Language) is used for structuring the content of web pages. CSS (Cascading Style Sheets) is used for styling the layout and design of the pages. JavaScript is a scripting language that adds interactivity to websites, allowing for dynamic content and user engagement.</p>
                        </li>
                        <li>
                            <h5>Databases and Dynamic Content</h5>
                            <p>Many websites use databases (e.g., MySQL, PostgreSQL) to store and manage data dynamically. Content Management Systems (CMS) like WordPress, Joomla, and Drupal use databases to enable users to create, edit, and manage digital content easily.</p>
                        </li>
                        <li>
                            <h5>Responsive Design</h5>
                            <p>With the proliferation of various devices like smartphones, tablets, and desktops, websites are designed to be responsive. Responsive design ensures that websites adapt and display properly on different screen sizes and devices.</p>
                        </li>
                        <li>
                            <h5>Frameworks and CMS</h5>
                            <p>Web developers use frameworks (like Django, Ruby on Rails, and Angular) and CMS platforms (like WordPress, Drupal, and Joomla) to streamline the website development process. These tools provide pre-built modules, themes, and templates, making it easier to create feature-rich and visually appealing websites.</p>
                        </li>
                        <li>
                            <h5>Summary</h5>
                            <p>Websites are digital entities accessible via the internet, comprised of web pages containing text, images, and multimedia elements. They are hosted on servers, accessed through web browsers, and are built using various technologies like HTML, CSS, JavaScript, and databases. Responsive design ensures optimal viewing experiences across different devices, and domain names, along with DNS, facilitate human-friendly access to websites on the internet.</p>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    )
};
