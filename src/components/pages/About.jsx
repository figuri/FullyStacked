import React from 'react';

export default function About() {
    const emailAddress = 'samtisme@gmail.com'
  return (
    <section>
      <h1>About this Webpage, what is it anyway?</h1>
      <div>
        <p>
          This is a webpage displaying information on full stack web development
          principles and technologies. It was built in the hope that those new
          to the field, and those looking to refresh their knowledge have a
          place to look where all of the information is in one place and easily
          referred back on without long hours of research and practice.
        </p>
      </div>
      <div>
        <h2>About the author</h2>
        <h3>Sam Thomas</h3>
        <p>I am a Full stack web developer from east bay northern California. I have many passions such as basketball and chess; However at the forefront of these lies my love of all things technology. if youd like to reach out to me check the links below for career related websites. feel free to shoot me an email with any questions.</p>
        <ul>
            <li>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/samuel-thomas-b82614183/'>LinkedIn</a>
            </li>
            <li>
                <a href='https://musical-monstera-0ef752.netlify.app/'>Github</a>
            </li>
        </ul>
      </div>
    </section>
  );
}
