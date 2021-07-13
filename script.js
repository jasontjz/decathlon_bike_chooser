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
   imageUrl: 'https://contents.mediadecathlon.com/p1232143/k$9e6288127e3c1949f25e0ddbee0a95a9/tilt-500-xs-14in-folding-bike-silver.jpg?f=800x800',
   
},
{
  name: 'Tilt 100',
  objectId:'',
  divId: 'bike_folding_tilt100',
  parentDivId: 'divbike_tilt100',
  xmlUrl:'',
  imageUrl: 'https://contents.mediadecathlon.com/p1413339/k$e6cbad948907e2d80eefe51a62e7ba49/tilt-100-20in-folding-bike-black.jpg?f=800x800',
},
{
  name: 'Tilt 120',
   objectId:'',
   divId: 'bike_folding_tilt120',
   parentDivId: 'divbike_tilt120',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1249805/k$472b58b9db34e7ef6da64b754333801f/tilt-120-20in-6sp-folding-bike-red.jpg?f=800x800',
},
{
  name: 'Tilt 500 Blue',
   objectId:'',
   divId: 'bike_folding_tilt500blue',
   parentDivId: 'divbike_tilt500',
   xmlUrl:'https://contents.mediadecathlon.com/p1325497/k$ab1e4b9e3e35d34dceb2a94fd5aa0186/tilt-500-20in-7sp-folding-bike-dark-blue.jpg?f=800x800',
},
{
  name: 'Tilt 500 Yellow',
   objectId:'',
   divId: 'bike_folding_tilt500yellow',
   parentDivId: 'divbike_tilt500',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1413336/k$ea4c6020e99e349b7f034a53b8eebb00/tilt-500-20in-7sp-folding-bike-yellow.jpg?f=800x800',
},
{
  name: 'Urban Speed',
   objectId:'',
   divId: 'bike_urbanspeed',
   parentDivId: 'divbike_urbanspeed',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1666708/k$871251272ec5a7277d9592b7ca168484/elops-urban-city-bike-speed-500-orange.jpg?f=800x800',
},
{
  name: 'Elops 100',
   objectId:'',
   divId: 'bike_elops_100',
   parentDivId: 'divbike_elops100',
   xmlUrl:'',
   imageUrl:'https://contents.mediadecathlon.com/p1842019/k$c70bdfe84084b6acc13ceed40f4a450d/elops-100-low-frame-26in-single-speed-city-bike-black.jpg?f=800x800',
},
{
  name: 'Elops 120 Green',
   objectId:'',
   divId: 'bike_elops120green',
   parentDivId: 'divbike_elops120_120eu',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1325539/k$253848c2d69b06398bdc1e1f5f8b5f5a/elops-120-low-frame-26in-6sp-city-bike-acid-green.jpg?f=800x800',
},
{
  name: 'Elops 120 Linen',
   objectId:'',
   divId: 'bike_elops120linen',
   parentDivId: 'divbike_elops120_120eu',
   xmlUrl:'',
   imageUrl:'https://contents.mediadecathlon.com/p1863323/k$e8ead035fc4761f4776b9fab0e102c4e/elops-120-low-frame-6sp-city-bike-linen.jpg?f=800x800',
},
{
  name: 'Elops 120 EU',
   objectId:'',
   divId: 'bike_elops120eu',
   parentDivId: 'divbike_elops120_120eu',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1810501/k$a4464627a1d94983b784aa4fd6f1bc7d/elops-120-low-frame-city-bike-blue.jpg?f=800x800',
},
{
  name: 'Riverside 100',
   objectId:'',
   divId: 'bike_riverside_100',
   parentDivId: 'divbike_riverside100_120',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1574676/k$3be5882a1bce6c60c24269eb54c6af5f/riverside-100-matt-bike.jpg?f=800x800',
},
{
  name: 'ST 100 Black',
   objectId:'',
   divId: 'bike_st_100black',
   parentDivId: 'divbike_st100',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1490244/k$8a9d726bbe7a6d1b05ce33f131fc7f57/rockrider-st-100-275in-26in-xs-21sp-sport-bike-black.jpg?f=800x800',
},
{
  name: 'ST 100 Yellow',
   objectId:'',
   divId: 'bike_st_100yellow',
   parentDivId: 'divbike_st100',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1576602/k$55482559e608d7ead1cca914e50a3212/rockrider-st-100-275in-26in-xs-21sp-sport-bike-yellow.jpg?f=800x800',
},
{
  name: 'ST 100 White',
   objectId:'',
   divId: 'bike_st_100white',
   parentDivId: 'divbike_st100',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1617008/k$919ed9703caafb1a837d00894260abff/rockrider-st-100-275in-26in-xs-21sp-sport-bike-white.jpg?f=800x800',
},
{
  name: 'Riverside 500 Grey',
   objectId:'',
   divId: 'bike_riverside_500grey',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1484854/k$db9135b3585b4451f788f0e177df21e7/riverside-500-disc-brake-9sp-hybrid-bike-grey-red.jpg?f=800x800',
},
{
  name: 'Riverside 500 Blue',
   objectId:'',
   divId: 'bike_riverside_500blue',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1813731/k$e28b159d2d9db20223797d6d862eb1c9/riverside-500-disc-brake-9sp-hybrid-bike-blue.jpg?f=800x800',
},
{
  name: 'Riverside 500 Cloud Grey',
   objectId:'',
   divId: 'bike_riverside_500cloudgrey',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1813733/k$7b5eb039c6a39dab85fffc83ff693d6c/riverside-500-disc-brake-9sp-hybrid-bike-cloud-grey.jpg?f=800x800',
},
{
  name: 'Riverside 900',
   objectId:'',
   divId: 'bike_riverside_900',
   parentDivId: 'divbike_riverside500_900',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p2036063/k$588b0700228c70f61c9744109c58dd64/riverside-900-disc-brake-10sp-hybrid-bike-light-grey.jpg?f=800x800',
},
{
  name: 'Triban 100',
   objectId:'',
   divId: 'bike_triban_100',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1662199/k$4d461294413f611f2b18751bd05f0fed/triban-rc-100-7sp-road-bike-silver.jpg?f=800x800',
},
{
  name: 'Triban Easy',
   objectId:'',
   divId: 'bike_triban_easy',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1614833/k$43bbeec7bf27b81b9bf934a6ceef5bc6/triban-easy-8sp-road-bike-white.jpg?f=800x800',
},
{
  name: 'Triban 120',
   objectId:'',
   divId: 'bike_triban_120',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1604119/k$be03faa0a9d6698c805ddf165b3fc0e9/triban-rc-120-road-bike-8sp-grey.jpg?f=800x800',
},
{
  name: 'Triban Regular',
   objectId:'',
   divId: 'bike_triban_regular',
   parentDivId: 'divbike_triban100_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1614826/k$54b05fed6cb352ecff1a9950aeacc5ea/triban-regular-sora-9sp-road-bike-white.jpg?f=800x800',
},
{
  name: 'Triban RC 500',
   objectId:'',
   divId: 'bike_triban_500',
   parentDivId: 'divbike_triban500_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1619170/k$2470d4d473fbec18fcf697f154d42654/triban-rc-500-disc-brake-9sp-sora-road-bike-turqoise-blue.jpg?f=800x800',
},
{
  name: 'Triban RC 520',
   objectId:'',
   divId: 'bike_triban_520',
   parentDivId: 'divbike_triban500_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p2036064/k$00222f9c57905421ca32e380a2fcb759/triban-rc-520-disc-road-bike-105-11sp-dark-blue.jpg?f=800x800',
},
{
  name: 'Van Rysel RCR 900 AF',
   objectId:'',
   divId: 'bike_rcr_900_af',
   parentDivId: 'divbike_rcr900af',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p2036062/k$9555780250d36370b24a9ed8ceecc5ae/van-rysel-rcr-900-af-road-bike-105-11sp-black-grey.jpg?f=800x800',
},
{
  name: 'Van Rysel RCR 900 CF',
   objectId:'',
   divId: 'bike_rcr_900_cf',
   parentDivId: 'divbike_rcr900cf',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1662021/k$8c8cbb656765f8eb1cb8fac0125a526c/van-rysel-rcr-900-cf-carbon-road-bike-105-11sp-blue.jpg?f=800x800',
},
{
  name: 'Rockrider ST 520 Grey',
   objectId:'',
   divId: 'bike_mtb_st_500grey',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1906441/k$21822f6ee5ec481fb33f7f976c0e6128/rockrider-st-520-275-8sp-mountain-bike-grey.jpg?f=800x800',
},
{
  name: 'Rockrider ST 520 Orange',
   objectId:'',
   divId: 'bike_mtb_st_520orange',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
   imageUrl: 'https://contents.mediadecathlon.com/p1576543/k$1efd0ea7775faf3c1894536f7017c95c/sq/V+LO+VTT+ST+100+U+FIT+ROUGE+27+5.jpg',
},
{
  name: 'Rockrider ST 530',
   objectId:'',
   divId: 'bike_mtb_st_530',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
   imageUrl:'https://contents.mediadecathlon.com/p2036065/k$f5dc08fd5dee8b2e8d16fd5fc6efcce7/rockrider-sport-trail-st-530-chrome.jpg?f=800x800',
},
{
  name: 'Rockrider ST 900',
   objectId:'',
   divId: 'bike_mtb_st_900',
   parentDivId: 'divbike_st500_series',
   xmlUrl:'',
   imageUrl: '',
},
{
  name: 'Rockrider XC 100',
   objectId:'',
   divId: 'bike_mtb_xc_100',
   parentDivId: 'divbike_xc100_series',
   xmlUrl:'',
   imageUrl: '',
},
{
  name: 'Rockrider XC 500',
   objectId:'',
   divId: 'bike_mtb_xc_500',
   parentDivId: 'divbike_xc100_series',
   xmlUrl:'',
   imageUrl: '',
},
{
  name: 'Rockrider XC 900',
   objectId:'',
   divId: 'bike_mtb_xc_900',
   parentDivId: 'divbike_xc100_series',
   xmlUrl:'',
   imageUrl: '',
},
{
  name: 'Rockrider AM 100',
   objectId:'',
   divId: 'bike_mtb_am_100',
   parentDivId: 'divbike_am100',
   xmlUrl:'',
   imageUrl: '',
},
]

   //'Tilt 100', 'Tilt 120', 'Tilt 500', 'Urban Speed', 'Elops 100','Elops 120','Elops 120 EU','Riverside 100','Riverside 120','Rockrider ST 100','Riverside 500','Riverside 900','Triban 100','Triban 120','Triban Easy','Triban Regular','Triban RC 500','Triban RC 520','Van Rysel RCR 900 AF','Van Rysel RCR 900 CF','Rockrider ST 500', 'ST 520','Rockrider ST 530','Rockrider ST 900','Rockrider XC 100','Rockrider XC 500','Rockrider XC 900','Rockrider AM 100']


for(let i=0;i<bikes.length;i++){
  const bikeDiv = document.createElement('div')
  bikeDiv.innerHTML=bikes[i].name
  bikeDiv.className='bike_div'
  bikeDiv.id=bikes[i].divId
  document.querySelector('#'+bikes[i].parentDivId).append(bikeDiv)
  const bikeImg=document.createElement('img')
  bikeImg.src=bikes[i].imageUrl
  bikeImg.width=300
  bikeDiv.appendChild(bikeImg)

 
}

