"use strict";

// alert("Welcome to the Decathlon Smart Bike Chooser! We will try our best to help you find the most suitable bike for your needs by asking you some simple questions. Sometimes, nothing beats the human touch, so if you are still unsure, we highly recommend you to talk to any of our friendly & passionate Sports Leaders :)")



const user_intention = document.querySelector("#user_intention");

function scrollToTop() {
  // user_intention.scrollIntoView(true); // Top
  user_intention_container.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}

function scrollToBottom() {
  user_intention.scrollIntoView(false); // Bottom
}


