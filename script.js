"use strict";

// alert("Welcome to the Decathlon Smart Bike Chooser! We will try our best to help you find the most suitable bike for your needs by asking you some simple questions. Sometimes, nothing beats the human touch, so if you are still unsure, we highly recommend you to talk to any of our friendly & passionate Sports Leaders :)")

const top_carousel_inner = [
  "https://contents.mediadecathlon.com/p2012687/k$5ec6b9e82de980a4e0f31e04bcfa45a3/ELOPS%20SIEGE%20BEBE%20100%20PORTE%20BAGAGES.jpg?f=1000x1000",
  "https://contents.mediadecathlon.com/p1965420/k$3a89f25f6990d4cf393e1f907b4d2abf/TRIBAN%20TRIBAN%20REGULAR%20FEMME%20EMERAUDE.jpg?f=1000x1000",
  "https://contents.mediadecathlon.com/p1563441/k$6408373248b59f8ad426d104a0577d4c/Riverside%20500%20C1%20Riverside%20500%20C2.jpg?f=1000x1000",
  "https://contents.mediadecathlon.com/p1801274/k$ba1b90a167c49dc2195c26d687ca0f82/B%20TWIN%20VELO%20PLIANT%20TILT%20500%20BLEU.jpg?f=1000x1000",
];

//trying to create the carousell with JS only
// for (let n = 0; n < top_carousel_inner.length; n++) {
//   //create highest layer carousel
//   const topCarousel_layer_0 = document.createElement("div");
//   topCarousel_layer_0.id = top_carousel_inner[n] + "_layer_0";
//   topCarousel_layer_0.className = "top_carousel slide";
//   topCarousel_layer_0.setAttribute("data-bs-slide", "carousel");
//   document.querySelector("#image_carousel").appendChild(topCarousel_layer_0);

//   //create second layer carousel
//   const topCarousel_layer_1 = document.createElement("div");
//   topCarousel_layer_1.className = "carousel-inner";
//   topCarousel_layer_1.id = top_carousel_inner[n];
//   topCarousel_layer_0.appendChild(topCarousel_layer_1);

//   //create image & append
//   const topCarousel_layer_1_img = document.createElement("img");
//   topCarousel_layer_1_img.src = top_carousel_inner[n];
//   topCarousel_layer_1_img.className = "top_carousel_img";
//   topCarousel_layer_1.appendChild(topCarousel_layer_1_img);
// }

const userNameArray = [];
const userEmailArray = [];

function appendUser() {
  userNameArray.push(document.querySelector("#username").value);
  console.log(userNameArray);
  userEmailArray.push(document.querySelector("#useremail").value);
  console.log(userEmailArray);
}

const letsroll = document.querySelector("#letsroll");
console.log("letsroll");

letsroll.addEventListener("click", appendUser);

const user_intention = document.querySelector("#user_intention");

function scrollToTop(target) {
  // user_intention.scrollIntoView(true); // Top
  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

// function scrollToBottom() {
//   user_intention.scrollIntoView(false); // Bottom
// }

const bikes = [
  {
    bike: "Tilt 500 XS",
    name: "Tilt 500 XS",
    modelID: "8527256",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8527256-112347-tilt-500-xs-14in-folding-bike-silver.html",
    divID: "bike_folding_tilt500xs",
    parentDivId: "divbike_tilt500xs",
    imageUrl:
      "https://contents.mediadecathlon.com/p1232143/k$9e6288127e3c1949f25e0ddbee0a95a9/tilt-500-xs-14in-folding-bike-silver.jpg?f=800x800",
    shortDesc:
      "Combine cycling with other means of transport (car, bus, MRT) and save space at home or at the workplace.\nConforms to LTA regulations for bringing on board buses & trains when fully folded. Super light weight: 9kg. Folded dimensions: 60x66x38 cm. One size - fits riders 145-180cm. Kickstand not included.",
    bikeType: "Folding Bike",
    wheelSize: "14in",
    material: "Aluminum",
    speeds: "1",
    brakeType: "V-brake",
    weight: "9kg",
    USP: "The lightest adult bike our range by far",
    backDiv: "folding_bikes_style1",
  },
  {
    bike: "Tilt 100",
    name: "Tilt 100",
    modelID: "8545022",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8545022-113810-tilt-100-20in-folding-bike-black.html",
    divID: "bike_folding_tilt100",
    parentDivId: "divbike_tilt100",
    imageUrl:
      "https://contents.mediadecathlon.com/p1413339/k$e6cbad948907e2d80eefe51a62e7ba49/tilt-100-20in-folding-bike-black.jpg?f=800x800",
    shortDesc:
      "Designed for medium distance commuting in the city with upright comfortable position. Features integrated rack and kickstand for utility.\nEquipped with a step-thru steel frame, 1-speed drivetrain & V-brakes. Weight: 17.1kg Sizing: Small (1.40-1.54m), Medium(1.55-1.64m)",
    bikeType: "Folding Bike",
    wheelSize: "20in",
    material: "Steel",
    speeds: "1",
    brakeType: "V-brake",
    weight: "14.1kg",
    USP: "Sturdy & dependable, our most economical folding bike",
    backDiv: "folding_bikes_style1",
  },
  {
    bike: "Tilt 120",
    name: "Tilt 120",
    modelID: "8544671",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8544671-121694-tilt-120-20in-6sp-folding-bike-red.html?c=11465#/4807-size-one_size_fits_all",
    divID: "bike_folding_tilt120",
    parentDivId: "divbike_tilt120",
    imageUrl:
      "https://contents.mediadecathlon.com/p1249805/k$472b58b9db34e7ef6da64b754333801f/tilt-120-20in-6sp-folding-bike-red.jpg?f=800x800",
    shortDesc:
      "Combine cycling with other means of transport (car, bus, MRT) and save space at home or at the workplace.\nConforms to LTA regulations for bringing on board buses & trains when fully folded. Weight 14.5kg. Folded dimensions: 78 x 66 x 38cm. One size - fits riders 145-185cm.",
    bikeType: "Folding Bike",
    wheelSize: "20in",
    material: "Steel",
    speeds: "6",
    brakeType: "V-brake",
    weight: "14.5kg",
    USP: "Perfect blend of value and features",
    backDiv: "folding_bikes_style2",
  },
  {
    bike: "Tilt 500 Blue",
    name: "Tilt 500 Blue",
    modelID: "8527258",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8527258-135084-tilt-500-20in-7sp-folding-bike-dark-blue.html?c=11465#/4780-size-no_size",
    divID: "bike_folding_tilt500_blue",
    parentDivId: "divbike_tilt500",
    imageUrl:
      "https://contents.mediadecathlon.com/p1325497/k$ab1e4b9e3e35d34dceb2a94fd5aa0186/tilt-500-20in-7sp-folding-bike-dark-blue.jpg?f=800x800",
    shortDesc:
      "Combine cycling with other means of transport (car, bus, MRT) and save space at home or at the workplace. Alloy frame reduces weight by 1.5kg vs the Tilt 120.\nConforms to LTA regulations for bringing on board buses & trains when fully folded. Light weight: 13kg. Folded dimensions: 78 x 66 x 38cm.. One size - fits riders 145-185cm.",
    bikeType: "Folding Bike",
    wheelSize: "20in",
    material: "Aluminum",
    speeds: "7",
    brakeType: "V-brake",
    weight: "13kg",
    USP: "Our lightest 20in folding bike",
    backDiv: "folding_bikes_style2",
  },
  {
    bike: "Tilt 500 Yellow",
    name: "Tilt 500 Yellow",
    modelID: "8526822",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8526822-112698-tilt-500-20in-7sp-folding-bike-yellow.html?c=11465#/4780-size-no_size",
    divID: "bike_folding_tilt500_yellow",
    parentDivId: "divbike_tilt500",
    imageUrl:
      "https://contents.mediadecathlon.com/p1413336/k$ea4c6020e99e349b7f034a53b8eebb00/tilt-500-20in-7sp-folding-bike-yellow.jpg?f=800x800",
    shortDesc:
      "Combine cycling with other means of transport (car, bus, MRT) and save space at home or at the workplace. Alloy frame reduces weight by 1.5kg vs the Tilt 120.\nConforms to LTA regulations for bringing on board buses & trains when fully folded. Light weight: 13kg. Folded dimensions: 78 x 66 x 38cm.. One size - fits riders 145-185cm.",
    bikeType: "Folding Bike",
    wheelSize: "20in",
    material: "Aluminum",
    speeds: "7",
    brakeType: "V-brake",
    weight: "13kg",
    USP: "Our lightest 20in folding bike",
    backDiv: "folding_bikes_style2",
  },
  {
    bike: "Urban Speed",
    name: "Urban Speed",
    modelID: "8572394",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8572394-286059-elops-urban-city-bike-speed-500-orange.html?c=10853#/26-size-s",
    divID: "bike_urbanspeed",
    parentDivId: "divbike_urbanspeed",
    imageUrl:
      "https://contents.mediadecathlon.com/p1666708/k$871251272ec5a7277d9592b7ca168484/elops-urban-city-bike-speed-500-orange.jpg?f=800x800",
    shortDesc:
      "Our urban cycling team has developed this fast, agile, single-speed bike. The fixie look with the utilitarian functions of a city bike!\nFast, agile, single-speed city bike. Compatible with 8487144 500 Platform Front Rack (sold separately)",
    bikeType: "City Bike",
    wheelSize: "700C",
    material: "Steel",
    speeds: "1",
    brakeType: "Caliper Brake",
    weight: "TBC",
    USP: "Our most agile city bike",
    backDiv: "trad_city_bikes_style2",
  },
  {
    bike: "Elops 100",
    name: "Elops 100",
    modelID: "8545933",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8545933-113191-elops-100-low-frame-26in-single-speed-city-bike-black.html?c=11465#/74-size-m",
    divID: "bike_elops_100",
    parentDivId: "divbike_elops100",
    imageUrl:
      "https://contents.mediadecathlon.com/p1842019/k$c70bdfe84084b6acc13ceed40f4a450d/elops-100-low-frame-26in-single-speed-city-bike-black.jpg?f=800x800",
    shortDesc:
      "Designed for medium distance commuting in the city with upright comfortable position. Features integrated rack and kickstand for utility.\nEquipped with a step-thru steel frame, 1-speed drivetrain & V-brakes. Weight: 17.1kg Sizing: Small (1.40-1.54m), Medium(1.55-1.64m)",
    bikeType: "Traditional City Bike",
    wheelSize: "26in",
    material: "Steel",
    speeds: "1",
    brakeType: "V-brake",
    weight: "17.1kg",
    USP: "Sturdy, dependable and practical, our most economical adult bike yet includes a built-in rack and kickstand",
    backDiv: "trad_city_bikes_style2",
  },
  {
    bike: "Elops 120 Green",
    name: "Elops 120 Green",
    modelID: "8391624",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8391624-85388-elops-120-low-frame-26in-6sp-city-bike-acid-green.html?c=11465#/701-size-s_m",
    divID: "bike_elops120green",
    parentDivId: "divbike_elops120_120eu",
    imageUrl:
      "https://contents.mediadecathlon.com/p1325539/k$253848c2d69b06398bdc1e1f5f8b5f5a/elops-120-low-frame-26in-6sp-city-bike-acid-green.jpg?f=800x800",
    shortDesc:
      "Designed for medium distance commuting in the city with upright comfortable position. Features integrated rack and kickstand for utility.\nEquipped with a low frame (step-thru) steel frame, 6-speed drivetrain & V-brakes. Weight: 14.6kg Sizing: S/M (1.40-1.64m)",
    bikeType: "Traditional City Bike",
    wheelSize: "28in (26in for S)",
    material: "Steel",
    speeds: "6",
    brakeType: "V-brake",
    weight: "14.6kg",
    USP: "A practical city bike with 6 gears. Available in smaller sizes",
    backDiv: "trad_city_bikes_style1",
  },
  {
    bike: "Elops 120 Linen",
    name: "Elops 120 Linen",
    modelID: "8597095",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8597095-136253-elops-120-low-frame-6sp-city-bike-linen.html?c=11465#/74-size-m",
    divID: "bike_elops120linen",
    parentDivId: "divbike_elops120_120eu",
    imageUrl:
      "https://contents.mediadecathlon.com/p1863323/k$e8ead035fc4761f4776b9fab0e102c4e/elops-120-low-frame-6sp-city-bike-linen.jpg?f=800x800",
    shortDesc:
      'Designed for medium distance commuting in the city with upright comfortable position. Features integrated rack and kickstand for utility.\nA simple town bike that is easy to handle and includes a lifetime warranty on the frame. 26" wheels (XS) 28" (S, M). Sizing: XS:140-154cm, S:55-164cm, M:165-174cm',
    bikeType: "",
    wheelSize: "",
    material: "",
    speeds: "",
    brakeType: "",
    weight: "14.6kg",
    USP: "A practical city bike with 6 gears.",
    backDiv: "trad_city_bikes_style1",
  },
  {
    bike: "Riverside 100",
    name: "Riverside 100",
    modelID: "8550625",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8550625-300047-riverside-100-matt-bike.html?c=11465#/4868-size-m_175_184cm",
    divID: "bike_riverside_100",
    parentDivId: "divbike_riverside100_120",
    imageUrl:
      "https://contents.mediadecathlon.com/p1574676/k$3be5882a1bce6c60c24269eb54c6af5f/riverside-100-matt-bike.jpg?f=800x800",
    shortDesc:
      "Hybrid bike for cycling on road & gravel paths.\nNewly designed steel frame & fork, 6 speed drivetrain & V-brakes Weight: 15.4kg Sizing: Small (1.50-1.65m), Medium (1.66-1.82m), Large (1.83-2m) Kickstand not included",
    bikeType: "Hybrid Bike",
    wheelSize: "28in",
    material: "Steel",
    speeds: "6",
    brakeType: "V-brake",
    weight: "15.4kg",
    USP: "Our most economical multi-geared bike",
    backDiv: "hybrid_gate2_features",
  },
  {
    bike: "Rockrider ST 100 Black",
    name: "Rockrider ST 100 Black",
    modelID: "8480244",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8480244-300041-rockrider-st-100-275in-26in-xs-21sp-sport-bike-black.html?c=11465#/4923-size-s_155_164cm",
    divID: "bike_st_100black",
    parentDivId: "divbike_st100",
    imageUrl:
      "https://contents.mediadecathlon.com/p1490244/k$8a9d726bbe7a6d1b05ce33f131fc7f57/rockrider-st-100-275in-26in-xs-21sp-sport-bike-black.jpg?f=800x800",
    shortDesc:
      'Get away from it all! Enjoy the great outdoors on two wheels!\n"Alloy frame, 80mm suspension fork, 27.5in wheels (26in in XS), 21 speeds Weight: 15.8kg Sizing:XS (1.45-1.54m), S (1.55-1.64m), M (1.65-1.74m), L (1.75-1.84m), XL (1.85-1.94m) Kickstand not included"',
    bikeType: "Hybrid Bike",
    wheelSize: "27.5in (26in for XS)",
    material: "Aluminum",
    speeds: "3x7",
    brakeType: "V-brake",
    weight: "15.8kg",
    USP: "Our most economical bike with suspension",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Rockrider ST 100 Yellow",
    name: "Rockrider ST 100 Yellow",
    modelID: "8572391",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8572391-296350-rockrider-st-100-275in-26in-xs-21sp-sport-bike-yellow.html?c=11465#/4924-size-l_175_184cm",
    divID: "bike_st_100yellow",
    parentDivId: "divbike_st100",
    imageUrl:
      "https://contents.mediadecathlon.com/p1576602/k$55482559e608d7ead1cca914e50a3212/rockrider-st-100-275in-26in-xs-21sp-sport-bike-yellow.jpg?f=800x800",
    shortDesc:
      'Get away from it all! Enjoy the great outdoors on two wheels!\n"Alloy frame, 80mm suspension fork, 27.5in wheels (26in in XS), 21 speeds Weight: 15.8kg Sizing:XS (1.45-1.54m), S (1.55-1.64m), M (1.65-1.74m), L (1.75-1.84m), XL (1.85-1.94m) Kickstand not included"',
    bikeType: "Hybrid Bike",
    wheelSize: "27.5in (26in for XS)",
    material: "Aluminum",
    speeds: "3x7",
    brakeType: "V-brake",
    weight: "15.8kg",
    USP: "Our most economical bike with suspension",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Rockrider ST 100 White",
    name: "Rockrider ST 100 White",
    modelID: "8545034",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8545034-274914-rockrider-st-100-275in-26in-xs-21sp-sport-bike-white.html?c=11465#/4924-size-l_175_184cm",
    divID: "bike_st_100white",
    parentDivId: "divbike_st100",
    imageUrl:
      "https://contents.mediadecathlon.com/p1617008/k$919ed9703caafb1a837d00894260abff/rockrider-st-100-275in-26in-xs-21sp-sport-bike-white.jpg?f=800x800",
    shortDesc:
      'Get away from it all! Enjoy the great outdoors on two wheels!\n"Alloy frame, 80mm suspension fork, 27.5in wheels (26in in XS), 21 speeds Weight: 15.8kg Sizing:XS (1.45-1.54m), S (1.55-1.64m), M (1.65-1.74m), L (1.75-1.84m), XL (1.85-1.94m) Kickstand not included"',
    bikeType: "Hybrid Bike",
    wheelSize: "27.5in (26in for XS)",
    material: "Aluminum",
    speeds: "3x7",
    brakeType: "V-brake",
    weight: "15.8kg",
    USP: "Our most economical bike with suspension",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Riverside 500 Grey",
    name: "Riverside 500 Grey",
    modelID: "8392092",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8392092-85391-riverside-500-disc-brake-9sp-hybrid-bike-grey-red.html?c=11465#/6178-size-s_156_165m",
    divID: "bike_riverside_500grey",
    parentDivId: "divbike_riverside500_900",
    imageUrl:
      "https://contents.mediadecathlon.com/p1484854/k$db9135b3585b4451f788f0e177df21e7/riverside-500-disc-brake-9sp-hybrid-bike-grey-red.jpg?f=800x800",
    shortDesc:
      "Hybrid bike for cycling on road & gravel paths.\nEquipped with an alloy frame, 63mm travel suspension fork, 9-speed drivetrain, disc brakes. Weight: 13.9kg Sizing: Small (1.50-1.64m), Medium (1.65-1.77m), Large (1.78-1.94m) Kickstand not included",
    bikeType: "Hybrid Bike",
    wheelSize: "28in",
    material: "Aluminum",
    speeds: "1x9",
    brakeType: "Disc Brake (Mechanical)",
    weight: "13.9kg",
    USP: "Aluminum frame, suspension and disc brakes for unbeatable value",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Riverside 500 Blue",
    name: "Riverside 500 Blue",
    modelID: "8596804",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8596804-136250-riverside-500-disc-brake-9sp-hybrid-bike-blue.html?c=11465#/4924-size-l_175_184cm",
    divID: "bike_riverside_500blue",
    parentDivId: "divbike_riverside500_900",
    imageUrl:
      "https://contents.mediadecathlon.com/p1813731/k$e28b159d2d9db20223797d6d862eb1c9/riverside-500-disc-brake-9sp-hybrid-bike-blue.jpg?f=800x800",
    shortDesc:
      "Hybrid bike for cycling on road & gravel paths.\nEquipped with an alloy frame, 63mm travel suspension fork, 9-speed drivetrain, disc brakes. Weight: 13.9kg Sizing: Small (1.50-1.64m), Medium (1.65-1.77m), Large (1.78-1.94m) Kickstand not included",
    bikeType: "Hybrid Bike",
    wheelSize: "28in",
    material: "Aluminum",
    speeds: "1x9",
    brakeType: "Disc Brake (Mechanical)",
    weight: "13.9kg",
    USP: "Aluminum frame, suspension and disc brakes for unbeatable value",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Riverside 500 Cloud Grey",
    name: "Riverside 500 Cloud Grey",
    modelID: "8656221",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8656221-197082-riverside-500-disc-brake-9sp-hybrid-bike-cloud-grey.html?c=11465#/4923-size-s_155_164cm",
    divID: "bike_riverside_500cloudgrey",
    parentDivId: "divbike_riverside500_900",
    imageUrl:
      "https://contents.mediadecathlon.com/p1813733/k$7b5eb039c6a39dab85fffc83ff693d6c/riverside-500-disc-brake-9sp-hybrid-bike-cloud-grey.jpg?f=800x800",
    shortDesc:
      "Hybrid bike for cycling on road & gravel paths.\nEquipped with an alloy frame, 63mm travel suspension fork, 9-speed drivetrain, disc brakes. Weight: 13.9kg Sizing: Small (1.50-1.64m), Medium (1.65-1.77m), Large (1.78-1.94m) Kickstand not included",
    bikeType: "Hybrid Bike",
    wheelSize: "28in",
    material: "Aluminum",
    speeds: "1x9",
    brakeType: "Disc Brake (Mechanical)",
    weight: "13.9kg",
    USP: "Aluminum frame, suspension and disc brakes for unbeatable value",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Riverside 900",
    name: "Riverside 900",
    modelID: "8480246",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8480246-112682-riverside-900-disc-brake-10sp-hybrid-bike-light-grey.html?c=11465#/26-size-s",
    divID: "bike_riverside_900",
    parentDivId: "divbike_riverside500_900",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036063/k$588b0700228c70f61c9744109c58dd64/riverside-900-disc-brake-10sp-hybrid-bike-light-grey.jpg?f=800x800",
    shortDesc:
      "Hybrid Bike for cycling on road & gravel paths\nAlloy frame, 63mm travel fork with lockout, 10-speed drivetrain, hydraulic disc brakes. Weight: 13.6kg Sizing: Small (1.50-1.65m), Medium (1.66-1.82m), Large (1.83-2m) Kickstand not included",
    bikeType: "Hybrid Bike",
    wheelSize: "28in",
    material: "Aluminum",
    speeds: "1x10",
    brakeType: "Disc Brake (Hydraulic)",
    weight: "13.6kg",
    USP: "Upgraded with hydraulic disc brakes and 10 speeds",
    backDiv: "hybrid_gate3b_rugged_flexible",
  },
  {
    bike: "Triban 100",
    name: "Triban 100",
    modelID: "8544956",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8544956-138541-triban-rc-100-7sp-road-bike-silver.html?c=11465#/23-size-l",
    divID: "bike_triban_100",
    parentDivId: "divbike_triban100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1662199/k$4d461294413f611f2b18751bd05f0fed/triban-rc-100-7sp-road-bike-silver.jpg?f=800x800",
    shortDesc:
      "Road cycling at moderate speeds on most terrain except mountain biking trails\nAlloy frame, comfortable steel fork, reliable 7-speed drivetrain. Weight: 11.3kg Sizing: XS (1.45-1.54m), S (1.55-1.64m), M (1.65-1.74m), L (1.75-1.84m), XL (1.85-1.94m) Kickstand not included",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Steel Fork",
    speeds: "1x7",
    brakeType: "Caliper Brake",
    weight: "11.3kg",
    USP: "Our starter road bike, offering an aluminum frame and drop bars at an unbeatable price",
    backDiv: "road_endurance_style1",
  },
  {
    bike: "Triban Easy",
    name: "Triban Easy",
    modelID: "na",
    divClass: "carousel-item",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_triban_easy",
    parentDivId: "divbike_triban100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1614833/k$43bbeec7bf27b81b9bf934a6ceef5bc6/triban-easy-8sp-road-bike-white.jpg?f=800x800",
    shortDesc:
      "Our women's design team has developed this ideal women's bike for easily and safely starting to cycle on the road.\nWith its double braking and easy gear changing, this bike is designed for women's morphology, allowing you to safely get on the road.",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Steel Fork",
    speeds: "2x8",
    brakeType: "Caliper Brake",
    weight: "TBC",
    USP: "Upgraded dual chainring & 8 speeds",
    backDiv: "road_endurance_style1",
  },
  {
    bike: "Triban 120",
    name: "Triban 120",
    modelID: "8542635",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8542635-124967-triban-rc-120-road-bike-8sp-grey.html",
    divID: "bike_triban_120",
    parentDivId: "divbike_triban100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1604119/k$be03faa0a9d6698c805ddf165b3fc0e9/triban-rc-120-road-bike-8sp-grey.jpg?f=800x800",
    shortDesc:
      "We have designed this bike to make it easy for riders to progress in their riding.\nA versatile road bike. The comfortable geometry, aluminium frame, 16 speeds and carbon fork will allow you to take on any kind of path.",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Carbon Fork",
    speeds: "2x8",
    brakeType: "Caliper Brake",
    weight: "10.3kg",
    USP: "Upgraded with a carbon fork",
    backDiv: "road_endurance_style1",
  },
  {
    bike: "Triban Regular",
    name: "Triban Regular",
    modelID: "8506346",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8506346-271927-triban-regular-sora-9sp-road-bike-white.html",
    divID: "bike_triban_regular",
    parentDivId: "divbike_triban100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1614826/k$54b05fed6cb352ecff1a9950aeacc5ea/triban-regular-sora-9sp-road-bike-white.jpg?f=800x800",
    shortDesc:
      "This bike has been developed by our all-female design team and tested by numerous women. It's the perfect ally on both flat and hill rides.\nEvery aspect of this bike has been entirely designed for women. It offers comfort and precision thanks to its aluminium frame, comfortable geometry and a carbon fork",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Carbon Fork",
    speeds: "2x9",
    brakeType: "Caliper Brake",
    weight: "TBC",
    USP: "Upgraded with 9 speeds",
    backDiv: "road_endurance_style1",
  },
  {
    bike: "Triban RC 500",
    name: "Triban RC 500",
    modelID: "8542636",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8542636-127753-triban-rc-500-disc-brake-9sp-sora-road-bike-turqoise-blue.html?c=10687#/23-size-l",
    divID: "bike_triban_500",
    parentDivId: "divbike_triban500_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1619170/k$2470d4d473fbec18fcf697f154d42654/triban-rc-500-disc-brake-9sp-sora-road-bike-turqoise-blue.jpg?f=800x800",
    shortDesc:
      "We've designed and tested this road bike for your regular rides. It guarantees matchless comfort for cycling further, more often.\nEquipped with an alloy frame, carbon fork, mechanical disc brakes, and 9sp Shimano Sora groupset Weight: 10.6kg Sizing: XS (1.45-1.54m), S (1.55-1.64m), M (1.65-1.74m), L (1.75-1.84m), XL (1.85-1.94m)",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Carbon Fork",
    speeds: "2x9",
    brakeType: "Disc Brake (Mechanical)",
    weight: "10.6kg",
    USP: "Our starter disc brake road bike with aluminum frame and carbon fork",
    backDiv: "road_endurance_style1",
  },
  {
    bike: "Triban RC 520",
    name: "Triban RC 520",
    modelID: "8542655",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8542655-127730-triban-rc-520-disc-road-bike-105-11sp-dark-blue.html",
    divID: "bike_triban_520",
    parentDivId: "divbike_triban500_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036064/k$00222f9c57905421ca32e380a2fcb759/triban-rc-520-disc-road-bike-105-11sp-dark-blue.jpg?f=800x800",
    shortDesc:
      "We've designed and tested this road bike for your regular rides. It provides matchless comfort for cycling further and more often.\nCycle further and more often with the most comfortable road bike we've ever designed. Discover its hydro-mechanical disc brakes, specially-designed geometry, and the Shimano 105 groupset",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Carbon Fork",
    speeds: "2x11",
    brakeType: "Disc Brake (Hydromechanical)",
    weight: "10.6kg",
    USP: "Upgraded with 11 speeds and hydromechanical disc brakes",
    backDiv: "road_endurance_style1",
  },
  {
    bike: "Van Rysel RCR 900 AF",
    name: "Van Rysel RCR 900 AF",
    modelID: "8560890",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8560890-127692-van-rysel-rcr-900-af-road-bike-105-11sp-black-grey.html",
    divID: "bike_rcr_900_af",
    parentDivId: "divbike_rcr900af",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036062/k$9555780250d36370b24a9ed8ceecc5ae/van-rysel-rcr-900-af-road-bike-105-11sp-black-grey.jpg?f=800x800",
    shortDesc:
      "intensive training, sport cycling (all gradients and all distances)\nBike designed for performance and endurance. A UCI certified frame that can be used to compete in all types of races. Back in stock: July 2021",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Aluminum/Carbon Fork",
    speeds: "2x11",
    brakeType: "Disc Brake (Mechanical)",
    weight: "TBC",
    USP: "Performance blended with the latest standards",
    backDiv: "road_racing_style1",
  },
  {
    bike: "Van Rysel RCR 900 CF",
    name: "Van Rysel RCR 900 CF",
    modelID: "na",
    divClass: "carousel-item active",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_rcr_900_cf",
    parentDivId: "divbike_rcr900cf",
    imageUrl:
      "https://contents.mediadecathlon.com/p1662021/k$8c8cbb656765f8eb1cb8fac0125a526c/van-rysel-rcr-900-cf-carbon-road-bike-105-11sp-blue.jpg?f=800x800",
    shortDesc:
      "road cycling races and frequent training sessions on flat roads or in the mountains.\nNew Van Rysel Ultra Evo Dynamic carbon frame combined with Shimano 105 R7000 11-speed drive train. Frame & fork UCI-certified for road cycling races",
    bikeType: "Road Bike",
    wheelSize: "700C",
    material: "Carbon",
    speeds: "2x11",
    brakeType: "Caliper Brake",
    weight: "TBC",
    USP: "Our carbon fibre racing machin, the lightest bike in our range",
    backDiv: "road_racing_style1",
  },
  {
    bike: "Rockrider ST 520 Grey",
    name: "Rockrider ST 520 Grey",
    modelID: "8511143",
    divClass: "carousel-item active",
    productUrl:
      "https://www.decathlon.sg/p/8511143-300046-rockrider-st-520-275-8sp-mountain-bike-grey.html",
    divID: "bike_mtb_st_500grey",
    parentDivId: "divbike_st500_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1906441/k$21822f6ee5ec481fb33f7f976c0e6128/rockrider-st-520-275-8sp-mountain-bike-grey.jpg?f=800x800",
    shortDesc:
      "For regular sporty mountain bike rides.\nAlloy frame, 80mm suspension fork, disc brakes, 27.5in wheels, 24 speeds Weight: 14.5kg Sizing: S:155-164cm, M:165-174cm, L:175-184cm Kickstand not included",
    bikeType: "Mountain Bike",
    wheelSize: "27.5in",
    material: "Aluminum",
    speeds: "3x8",
    brakeType: "Disc Brake (Mechanical)",
    weight: "14.5kg",
    USP: "Our starter mountain bike, with 24 speeds and disc brakes",
    backDiv: "mtb_st",
  },
  {
    bike: "Rockrider ST 520 Orange",
    name: "Rockrider ST 520 Orange",
    modelID: "na",
    divClass: "carousel-item",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_mtb_st_520orange",
    parentDivId: "divbike_st500_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p1576543/k$1efd0ea7775faf3c1894536f7017c95c/sq/V+LO+VTT+ST+100+U+FIT+ROUGE+27+5.jpg",
    shortDesc:
      "For regular sporty mountain bike rides.\nAlloy frame, 80mm suspension fork, disc brakes, 27.5in wheels, 24 speeds Weight: 14.5kg Sizing: S:155-164cm, M:165-174cm, L:175-184cm Kickstand not included",
    bikeType: "Mountain Bike",
    wheelSize: "27.5in",
    material: "Aluminum",
    speeds: "3x8",
    brakeType: "Disc Brake (Mechanical)",
    weight: "14.5kg",
    USP: "Our starter mountain bike, with 24 speeds and disc brakes",
    backDiv: "mtb_st",
  },
  {
    bike: "Rockrider ST 530",
    name: "Rockrider ST 530",
    modelID: "8585188",
    divClass: "carousel-item",
    productUrl:
      "https://www.decathlon.sg/p/8585188-136515-rockrider-sport-trail-st-530-chrome.html",
    divID: "bike_mtb_st_530",
    parentDivId: "divbike_st500_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800",
    shortDesc:
      "Regular sporty mountain biking.\nAlloy frame, 80mm adjustable suspension fork, hydraulic disc brakes, 27.5in wheels, 1x9 speed drivetrain Weight: 14.5kg Sizing: S:155-164cm, M:165-174cm, L:175-184cm Kickstand not included",
    bikeType: "Mountain Bike",
    wheelSize: "27.5in",
    material: "Aluminum",
    speeds: "1x9",
    brakeType: "Disc Brake (Mechanical)",
    weight: "14.5kg",
    USP: "Upgraded with a 1x9 drivetrain",
    backDiv: "mtb_st",
  },
  {
    bike: "Rockrider ST 900",
    name: "Rockrider ST 900",
    modelID: "na",
    divClass: "carousel-item",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_mtb_st_900",
    parentDivId: "divbike_st500_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800",
    shortDesc: "Rockrider ST 900",
    bikeType: "Mountain Bike",
    wheelSize: "27.5in",
    material: "Aluminum",
    speeds: "na",
    brakeType: "na",
    weight: "na",
    USP: "na",
    backDiv: "mtb_st",
  },
  {
    bike: "Rockrider XC 100",
    name: "Rockrider XC 100",
    modelID: "na",
    divClass: "carousel-item active",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_mtb_xc_100",
    parentDivId: "divbike_xc100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800",
    shortDesc: "Rockrider XC 100",
    bikeType: "Mountain Bike",
    wheelSize: "29in",
    material: "Aluminum",
    speeds: "na",
    brakeType: "na",
    weight: "na",
    USP: "na",
    backDiv: "mtb_xc",
  },
  {
    bike: "Rockrider XC 500",
    name: "Rockrider XC 500",
    modelID: "na",
    divClass: "carousel-item",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_mtb_xc_500",
    parentDivId: "divbike_xc100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800",
    shortDesc: "Rockrider XC 500",
    bikeType: "Mountain Bike",
    wheelSize: "29in",
    material: "Aluminum",
    speeds: "na",
    brakeType: "na",
    weight: "na",
    USP: "na",
    backDiv: "mtb_xc",
  },
  {
    bike: "Rockrider XC 900",
    name: "Rockrider XC 900",
    modelID: "na",
    divClass: "carousel-item",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_mtb_xc_900",
    parentDivId: "divbike_xc100_series",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800",
    shortDesc: "Rockrider XC 900",
    bikeType: "Mountain Bike",
    wheelSize: "29in",
    material: "Aluminum",
    speeds: "na",
    brakeType: "na",
    weight: "na",
    USP: "na",
    backDiv: "mtb_xc",
  },
  {
    bike: "Rockrider AM 100",
    name: "Rockrider AM 100",
    modelID: "na",
    divClass: "carousel-item active",
    productUrl: "https://www.decathlon.sg/",
    divID: "bike_mtb_am_100",
    parentDivId: "divbike_am100",
    imageUrl:
      "https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800",
    shortDesc: "Rockrider AM 100",
    bikeType: "Mountain Bike",
    wheelSize: "27.5in",
    material: "Aluminum",
    speeds: "na",
    brakeType: "na",
    weight: "na",
    USP: "na",
    backDiv: "mtb_am",
  },
];

const carousel_inner = [
  "divbike_tilt500xs",
  "divbike_tilt100",
  "divbike_tilt120",
  "divbike_tilt500",
  "divbike_urbanspeed",
  "divbike_elops100",
  "divbike_elops120_120eu",
  "divbike_riverside100_120",
  "divbike_st100",
  "divbike_riverside500_900",
  "divbike_triban100_series",
  "divbike_triban500_series",
  "divbike_rcr900af",
  "divbike_rcr900cf",
  "divbike_st500_series",
  "divbike_xc100_series",
  "divbike_am100",
];

const multipleImageArray = [
  "divbike_tilt500",
  "divbike_elops120_120eu",
  "divbike_st100",
  "divbike_riverside500_900",
  "divbike_triban100_series",
  "divbike_triban500_series",
  "divbike_st500_series",
  "divbike_xc100_series",
];

//divbike_tilt500xs divbike_tilt100 divbike_tilt120 divbike_urbanspeed divbike_elops100 divbike_riverside100_120 divbike_rcr900af divbike_rcr900cf divbike_am100

for (let j = 0; j < carousel_inner.length; j++) {
  // console.log(carousel_inner[j])
  const currentCarouselId = carousel_inner[j];

  if (multipleImageArray.includes(currentCarouselId)) {
    //create highest layer carousel
    const carousel_layer_0 = document.createElement("div");
    carousel_layer_0.id = carousel_inner[j] + "_layer_0";
    carousel_layer_0.className = "carousel slide";
    carousel_layer_0.setAttribute("data-bs-slide", "carousel");
    document.querySelector("#layer7_container").appendChild(carousel_layer_0);

    //create button prev
    const buttonPrev = document.createElement("button");
    buttonPrev.className = "carousel-control-prev";
    buttonPrev.type = "button";
    buttonPrev.setAttribute(
      "data-bs-target",
      "#" + carousel_inner[j] + "_layer_0"
    );
    buttonPrev.setAttribute("data-bs-slide", "prev");
    carousel_layer_0.appendChild(buttonPrev);
    const buttonPrevSpanIcon = document.createElement("span");
    buttonPrevSpanIcon.className = "carousel-control-prev-icon";
    buttonPrevSpanIcon.setAttribute("aria-hidden", "true");
    buttonPrev.appendChild(buttonPrevSpanIcon);
    const buttonPrevSpanText = document.createElement("span");
    buttonPrevSpanText.className = "visually-hidden";
    buttonPrevSpanText.innerHTML = "Previous";
    buttonPrev.appendChild(buttonPrevSpanText);
    //create button Next
    const buttonNext = document.createElement("button");
    buttonNext.className = "carousel-control-next";
    buttonNext.type = "button";
    buttonNext.setAttribute(
      "data-bs-target",
      "#" + carousel_inner[j] + "_layer_0"
    );
    buttonNext.setAttribute("data-bs-slide", "next");
    carousel_layer_0.appendChild(buttonNext);
    const buttonNextSpanIcon = document.createElement("span");
    buttonNextSpanIcon.className = "carousel-control-next-icon";
    buttonNextSpanIcon.setAttribute("aria-hidden", "true");
    buttonNext.appendChild(buttonNextSpanIcon);
    const buttonNextSpanText = document.createElement("span");
    buttonNextSpanText.className = "visually-hidden";
    buttonNextSpanText.innerHTML = "Next";
    buttonNext.appendChild(buttonNextSpanText);

    //create second layer carousel
    const carousel_layer_1 = document.createElement("div");
    carousel_layer_1.className = "carousel-inner";
    carousel_layer_1.id = carousel_inner[j];
    carousel_layer_0.appendChild(carousel_layer_1);
  } else {
    //create highest layer carousel
    const carousel_layer_0 = document.createElement("div");
    carousel_layer_0.id = carousel_inner[j] + "_layer_0";
    carousel_layer_0.className = "carousel slide";
    carousel_layer_0.setAttribute("data-bs-slide", "carousel");
    document.querySelector("#layer7_container").appendChild(carousel_layer_0);

    //create second layer carousel
    const carousel_layer_1 = document.createElement("div");
    carousel_layer_1.className = "carousel-inner";
    carousel_layer_1.id = carousel_inner[j];
    carousel_layer_0.appendChild(carousel_layer_1);
  }
}

for (let i = 0; i < bikes.length; i++) {
  //create div for each bike
  const bikeDiv = document.createElement("div");
  bikeDiv.className = bikes[i].divClass;
  bikeDiv.id = bikes[i].divID;
  document.querySelector("#" + bikes[i].parentDivId).append(bikeDiv);
  //create image & append
  const bikeImg = document.createElement("img");
  bikeImg.src = bikes[i].imageUrl;
  bikeImg.width = 300;
  bikeImg.className = "bike_div_img";
  bikeDiv.appendChild(bikeImg);
  //create div for specs
  const bikeSpecsDiv = document.createElement("div");
  bikeSpecsDiv.className = "bike_specs_div";
  bikeDiv.appendChild(bikeSpecsDiv);
  //create bike name & append
  const bikeH2 = document.createElement("h2");
  bikeH2.innerText = bikes[i].name;
  bikeH2.className = "bike_div_title";
  bikeSpecsDiv.appendChild(bikeH2);
  //create bike short desc & append
  // const bikePara = document.createElement('p')
  // bikePara.innerText=bikes[i].shortDesc
  // bikePara.className='bike_shortDesc'
  // bikeSpecsDiv.appendChild(bikePara)
  //create bike USP & append
  const bikeUSP = document.createElement("p");
  bikeUSP.innerText = bikes[i].USP;
  bikeUSP.className = "bike_shortDesc";
  bikeSpecsDiv.appendChild(bikeUSP);
  //create UL for specs
  const bikeSpecs = document.createElement("ul");
  bikeSpecs.innerText = "Specifications:";
  bikeSpecsDiv.appendChild(bikeSpecs);
  //create li1 bikeType
  const bikeType = document.createElement("li");
  bikeType.innerText = "Bike Type: " + bikes[i].bikeType;
  bikeType.className = "bike_specs";
  bikeSpecs.appendChild(bikeType);
  //create li2 wheelSize
  const wheelSize = document.createElement("li");
  wheelSize.innerText = "Wheel Size: " + bikes[i].wheelSize;
  wheelSize.className = "bike_specs";
  bikeSpecs.appendChild(wheelSize);
  //create li3 material
  const material = document.createElement("li");
  material.innerText = "Material: " + bikes[i].material;
  material.className = "bike_specs";
  bikeSpecs.appendChild(material);
  //create li4 speeds
  const speeds = document.createElement("li");
  speeds.innerText = "Speeds: " + bikes[i].speeds;
  speeds.className = "bike_specs";
  bikeSpecs.appendChild(speeds);
  //create li5 brakeType
  const brakeType = document.createElement("li");
  brakeType.innerText = "Brake Type: " + bikes[i].brakeType;
  brakeType.className = "bike_specs";
  bikeSpecs.appendChild(brakeType);
  //create li6 weight
  const weight = document.createElement("li");
  weight.innerText = "Weight: " + bikes[i].weight;
  weight.className = "bike_specs";
  bikeSpecs.appendChild(weight);
  //create button Div
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button_div";
  bikeDiv.appendChild(buttonDiv);
  //create CTA
  const ctalink = document.createElement("a");
  const cta = document.createElement("div");
  ctalink.appendChild(cta);
  ctalink.innerText = "BUY ONLINE";
  ctalink.href = bikes[i].productUrl;
  ctalink.target = "_blank";
  cta.className = "cta";
  ctalink.className = "cta";
  buttonDiv.appendChild(ctalink);
  //create back button
  const buttonBack = document.createElement("button");
  buttonBack.type = "button";
  buttonBack.className = "back";
  buttonBack.innerText = "GO BACK";
  buttonBack.id = bikes[i].backDiv + "_back";
  buttonBack.setAttribute("data-backDiv", bikes[i].backDiv);
  buttonDiv.appendChild(buttonBack);
  //create home button
  const buttonHome = document.createElement("button");
  buttonHome.type = "button";
  buttonHome.className = "home";
  buttonHome.innerText = "START OVER";
  buttonBack.target = document.querySelector("#title");
  buttonDiv.appendChild(buttonHome);
  //create spacer
  const bottomSpacer = document.createElement("div");
  bottomSpacer.className = "bottom_spacer";
  buttonDiv.appendChild(bottomSpacer);
}

function logBackButton(event) {
  document
    .querySelector("#" + event.target.getAttribute("data-backDiv"))
    .scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
}

document.querySelectorAll(".back").forEach((item) => {
  item.addEventListener("click", logBackButton);
});

function goHome() {
  document.querySelector("#title").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });
}

document.querySelectorAll(".home").forEach((item) => {
  item.addEventListener("click", goHome);
});

//create as manyslide indicators as there are child elements within each multiple-bike layer_1

const multipleLayer0Array = [
  "divbike_tilt500_layer_0",
  "divbike_elops120_120eu_layer_0",
  "divbike_st100_layer_0",
  "divbike_riverside500_900_layer_0",
  "divbike_triban100_series_layer_0",
  "divbike_triban500_series_layer_0",
  "divbike_st500_series_layer_0",
  "divbike_xc100_series_layer_0",
];

for (let k = 0; k < multipleImageArray.length; k++) {
  //create slide indicator Div
  const carouselIndicators = document.createElement("div");
  carouselIndicators.className = "carousel-indicators";
  document
    .querySelector("#" + multipleLayer0Array[k])
    .appendChild(carouselIndicators);
  //create slide indicator 1
  const indicatorSlide1 = document.createElement("button");
  indicatorSlide1.type = "button";
  indicatorSlide1.setAttribute("data-bs-target", "#carouselExampleIndicators");
  indicatorSlide1.setAttribute("data-bs-slide-to", "0");
  indicatorSlide1.className = "active";
  indicatorSlide1.setAttribute("aria-current", "true");
  indicatorSlide1.setAttribute("aria-label", "Slide 1");
  carouselIndicators.appendChild(indicatorSlide1);
  //loop to find how many child elements within each layer_1 (class = 'carousel-inner, id same as multipleImageArray)
  const layer1 = document.querySelector("#" + multipleImageArray[k]);
  const layer1BikeCount = layer1.childElementCount;
  //create a loop to create subsequent slide indicators
  for (let l = 0; l < layer1BikeCount - 1; l++) {
    const indicatorSlides = document.createElement("button");
    indicatorSlides.type = "button";
    indicatorSlides.setAttribute(
      "data-bs-target",
      "#carouselExampleIndicators"
    );
    indicatorSlides.setAttribute("data-bs-slide-to", l + 1);
    indicatorSlides.setAttribute("aria-label", "Slide " + (l + 2));
    carouselIndicators.appendChild(indicatorSlides);
  }
}
