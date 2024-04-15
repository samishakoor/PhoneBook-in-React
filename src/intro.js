import React from "react";

const Intro = () => {
  return (
    <div id="intro">
      <h1 class="subtitle"> PhoneBook</h1>
      <div class="description">
        <p>Rules for using PhoneBook: </p>
        <ul>
          <li>Contact will be added from the contact form</li>
          <li>The contacts will be displayed in alphabetical order</li>
          <li>The contact will be deleted by pressing the delete icon</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
