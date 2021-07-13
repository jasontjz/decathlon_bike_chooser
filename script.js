"use strict";

// alert("Welcome to the Decathlon Smart Bike Chooser! We will try our best to help you find the most suitable bike for your needs by asking you some simple questions. Sometimes, nothing beats the human touch, so if you are still unsure, we highly recommend you to talk to any of our friendly & passionate Sports Leaders :)")



const user_intention = document.querySelector("#user_intention");

function scrollToTop(target) {
  // user_intention.scrollIntoView(true); // Top
  target.scrollIntoView({
    behavior: "smooth",
    block: 'start',
    inline: "center"
  });
}

// function scrollToBottom() {
//   user_intention.scrollIntoView(false); // Bottom
// }


const bikes = [
 {
   name: 'Tilt 500 XS',
   objectId:'',
   divId: 'bike_folding_tilt500xs',
   parentDivId: 'divbike_tilt500xs',
   xmlUrl:'',
   
},
{
  name: 'Tilt 100',
  objectId:'',
  divId: 'bike_folding_tilt100',
  parentDivId: 'divbike_tilt100',
  xmlUrl:'',
},
{
  name: 'Tilt 120',
   objectId:'',
   divId: 'bike_folding_tilt120',
   parentDivId: 'divbike_tilt120',
   xmlUrl:'',
},
{
  name: 'Tilt 500 Blue',
   objectId:'',
   divId: 'bike_folding_tilt500blue',
   parentDivId: 'divbike_tilt500',
   xmlUrl:'',
},
{
  name: 'Tilt 500 Yellow',
   objectId:'',
   divId: 'bike_folding_tilt500yellow',
   parentDivId: 'divbike_tilt500',
   xmlUrl:'',
},
{
  name: 'Urban Speed',
   objectId:'',
   divId: 'bike_urbanspeed',
   parentDivId: 'divbike_urbanspeed',
   xmlUrl:'',
},
{
  name: 'Elops 100',
   objectId:'',
   divId: 'bike_elops_100',
   parentDivId: 'divbike_elops100',
   xmlUrl:'',
},
{
  name: 'Elops 120 Green',
   objectId:'',
   divId: 'bike_elops120green',
   parentDivId: 'divbike_elops120_120eu',
   xmlUrl:'',
},
{
  name: 'Elops 120 Linen',
   objectId:'',
   divId: 'bike_elops120linen',
   parentDivId: 'divbike_elops120_120eu',
   xmlUrl:'',
},
{
  name: 'Elops 120 EU',
   objectId:'',
   divId: 'bike_elops120eu',
   parentDivId: 'divbike_elops120_120eu',
   xmlUrl:'',
},
{
  name: 'Riverside 100',
   objectId:'',
   divId: 'bike_riverside_100',
   parentDivId: 'divbike_riverside100_120',
   xmlUrl:'',
},
{
  name: 'Riverside 120',
   objectId:'',
   divId: 'bike_riverside_120',
   parentDivId: 'divbike_riverside100_120',
   xmlUrl:'',
},
{
  name: 'ST 100',
   objectId:'',
   divId: 'bike_st_100',
   parentDivId: 'divbike_st100',
   xmlUrl:'',
},
{
  name: 'Riverside 500 Grey',
   objectId:'',
   divId: 'bike_riverside_500grey',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
},
{
  name: 'Riverside 500 Blue',
   objectId:'',
   divId: 'bike_riverside_500blue',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
},
{
  name: 'Riverside 500 Cloud Grey',
   objectId:'',
   divId: 'bike_riverside_500cloudgrey',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
},
{
  name: 'Riverside 900',
   objectId:'',
   divId: 'bike_riverside_900',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
},
{
  name: 'Triban 100',
   objectId:'',
   divId: 'bike_triban_100',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
},
{
  name: 'Triban 120',
   objectId:'',
   divId: 'bike_triban_120',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
},
{
  name: 'Triban Easy',
   objectId:'',
   divId: 'bike_triban_easy',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
},
{
  name: 'Triban Regular',
   objectId:'',
   divId: 'bike_triban_regular',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
},
{
  name: 'Triban RC 500',
   objectId:'',
   divId: 'bike_triban_500',
   parentDivId: 'divbike_triban500_series',
   xmlUrl:'',
},
{
  name: 'Triban RC 520',
   objectId:'',
   divId: 'bike_triban_520',
   parentDivId: 'divbike_triban500_series',
   xmlUrl:'',
},
{
  name: 'Van Rysel RCR 900 AF',
   objectId:'',
   divId: 'bike_rcr_900_af',
   parentDivId: 'divbike_rcr900af',
   xmlUrl:'',
},
{
  name: 'Van Rysel RCR 900 CF',
   objectId:'',
   divId: 'bike_rcr_900_cf',
   parentDivId: 'divbike_rcr900cf',
   xmlUrl:'',
},
{
  name: 'Rockrider ST 520 Grey',
   objectId:'',
   divId: 'bike_mtb_st_500grey',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
},
{
  name: 'Rockrider ST 520 Orange',
   objectId:'',
   divId: 'bike_mtb_st_520orange',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
},
{
  name: 'Rockrider ST 530',
   objectId:'',
   divId: 'bike_mtb_st_530',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
},
{
  name: 'Rockrider ST 540',
   objectId:'',
   divId: 'bike_mtb_st_540',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
},
{
  name: 'Rockrider ST 900',
   objectId:'',
   divId: 'bike_mtb_st_900',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
},
{
  name: 'Rockrider XC 100',
   objectId:'',
   divId: 'bike_mtb_xc_100',
   parentDivId: 'divbike_xc100_series',
   xmlUrl:'',
},
{
  name: 'Rockrider XC 500',
   objectId:'',
   divId: 'bike_mtb_xc_500',
   parentDivId: 'divbike_xc100_series',
   xmlUrl:'',
},
{
  name: 'Rockrider XC 900',
   objectId:'',
   divId: 'bike_mtb_xc_900',
   parentDivId: 'divbike_xc100_series',
   xmlUrl:'',
},
{
  name: 'Rockrider AM 100',
   objectId:'',
   divId: 'bike_mtb_am_100',
   parentDivId: 'divbike_am100',
   xmlUrl:'',
},
]

   //'Tilt 100', 'Tilt 120', 'Tilt 500', 'Urban Speed', 'Elops 100','Elops 120','Elops 120 EU','Riverside 100','Riverside 120','Rockrider ST 100','Riverside 500','Riverside 900','Triban 100','Triban 120','Triban Easy','Triban Regular','Triban RC 500','Triban RC 520','Van Rysel RCR 900 AF','Van Rysel RCR 900 CF','Rockrider ST 500', 'ST 520','Rockrider ST 530','Rockrider ST 900','Rockrider XC 100','Rockrider XC 500','Rockrider XC 900','Rockrider AM 100']


for(let i=0;i<bikes.length;i++){
  const bikeDiv = document.createElement('div')
  bikeDiv.innerHTML=bikes[i].name
  bikeDiv.className='bike_div'
  bikeDiv.id=bikes[i].divId
  document.querySelector('#'+bikes[i].parentDivId).append(bikeDiv)
}

