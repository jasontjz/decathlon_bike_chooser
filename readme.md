This is the readme for the Decathlon Bike Chooser app that I have created for GA:SEIF 6 Project 1.

The purpose of this app is to help Decathlon's customers in the store, or on their PC or phone, choose the right bicycle for their needs to help increase the retail & customer service staff's productivity by freeing them to focus on other operational tasks.

Furthermore, we can track the entry from the app to our website or shopping app via tracking links, which will also give us more business insights into which are the popular products among our customers.

					------------------------------------------


Structure

The app consists of several 'gateways' that ask questions to the viewer and invites them to click or tap on the answer that best suits their needs.

After a series or several layers of questions, the users needs are narrowed down to a choice of one bike out of Decathlon's total range of 30 adult's bikes. Some bikes have multiple color options, so the user is presented with a scrolling carousel to view the different colors, which will be talked about later below.

You can view the planning mind map here:

https://miro.com/app/board/o9J_l8U7IpM=/


					------------------------------------------


Responsiveness

As this app is meant to be viewed on the big screens in store, personal laptop or phone, I defined 3 sizes via 2 breakpoints.

More than 1366px wide = big screen
Less than 1366px and wider than 768px = laptop
Less than 768px = phone
					------------------------------------------


HTML

The gateways were mostly constructed with HTML & CSS styling.


					------------------------------------------


Navigation

Native javascript "scrollToTop" was used as the main animation between pages, or areas, to give the impression of 'zooming' between areas to the user and add some dynamism to the app. 

					------------------------------------------

Bootstrap Carousel

Bootstrap 5.0 carousel was used for the photo carousel at the top of the app, as well as the bike layer for instances when the user was presented with a bike that had multiple color options. It lets the user tap the arrow buttons to scroll through the multiple options. There is also a 'slide indicator' that informs the user visually that he is viewing bike color #2 out of 4 bikes, for example.

					------------------------------------------

Capturing User Data

The user is invited (though not required) to leave their name & email in 2 text fields at the start of the app.
Their data is then captured in a javascript array object.
Future versions may see this data being sent 'live' to a database such as Firebase or an SQL database.

					------------------------------------------
Bike Layer

The final layer of bikes was generated using a javascript for loop.

First, a Google sheet table was created containing attributes of the bikes such as product information, URL to the bike image, URL to the bike product page, as well as some data to be used for navigation within the page, such as the parent Divs, id name, etc.

Next, this table was saved as a CSV file, then converted to a JSON object using a free online converter: https://www.convertcsv.com/csv-to-json.htm and pasted into the code as an array of objects.


Next, a for loop was written to construct the row of bikes as divs with images, text, buttons, classes & ids. 

The biggest challenge for me was using Bootstrap code to target the bike HTML structure that had been created using JS. 

The next biggest challenge was writing a function for the 'back' buttons in the bike layer to target a custom attribute that I had set in their parent elements.
