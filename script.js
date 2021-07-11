"use strict";

// alert("Welcome to the Decathlon Smart Bike Chooser! We will try our best to help you find the most suitable bike for your needs by asking you some simple questions. Sometimes, nothing beats the human touch, so if you are still unsure, we highly recommend you to talk to any of our friendly & passionate Sports Leaders :)")



const user_intention = document.querySelector("#user_intention");

function scrollToTop(target) {
  // user_intention.scrollIntoView(true); // Top
  target.scrollIntoView({
    behavior: "smooth",
    block: 'center',
    inline: "center"
  });
}

// function scrollToBottom() {
//   user_intention.scrollIntoView(false); // Bottom
// }


const bikes = ['Tilt 500 XS', 'Tilt 100', 'Tilt 120', 'Tilt 500', 'Urban Speed', 'Elops 100','Elops 120','Elops 120 EU','Riverside 100','Riverside 120','Rockrider ST 100','Riverside 500','Riverside 900','Triban 100','Triban 120','Triban Easy','Triban Regular','Triban RC 500','Triban RC 520','Van Rysel RCR 900 AF','Van Rysel RCR 900 CF','Rockrider ST 500', 'ST 520','Rockrider ST 530','Rockrider ST 900','Rockrider XC 100','Rockrider XC 500','Rockrider XC 900','Rockrider AM 100']

for(let i=0;i<bikes.length;i++){
  const bikeDiv = document.createElement('div')
  bikeDiv.innerHTML = bikes[i]
  bikeDiv.className = 'bike_div'
  document.querySelector('#layer7_container').append(bikeDiv)
}

