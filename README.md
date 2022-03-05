# Stripe Solutions Architect Written Project
## Use Case
A family-owned campus bookstore has recently begun selling e-text books to university students, but is currently still doing so out of the brick and mortar store. With a reason and desire to open up selling of these e-books online, they are considering Stripe as a facilitating vendor. However, they are struggling to visualize what the user experience would be and have requested a demo of a similar e-commerce application with the below requirements, details about how the solution was made (and how beginners may replicate it), as well as further improvements that could be offered.

### Requirements
 - [X] The user can select a book to purchase
 - [X] The user can checkout and purchase the item using [Stripe Elements](https://stripe.com/payments/elements)
 - [X] The user recevies a display confirmation fo purchase with the total of the charge and unique id (in the form of a Stripe Payment Intent ID)

## How to Run the Solution [(Click for Demo Video)](https://youtu.be/CRV2Q2w8A90)
> **Note:** This solution was made with the [JavaScript (Node.js) boilerplate application](https://github.com/mattmitchell6/sa-takehome-project-node) as its starting point

To get started, clone the repository using the code below (or click "Download ZIP" under the Clone button above), navigate to the appropriate directory, and install the dependencies.
```
git clone https://github.com/poshprogrammer/stripe && cd-stripe
npm install
```
Then, run the application locally using the code below and access the solution's index at http://localhost:3000
```
npm start
```
If you are wanting to test the checkout functionality, use credit card number `4242 4242 4242 4242` (with any expiration date in the future and CCV) for a successful charge or `4000 0000 0000 0002` for a declined charge.
## How Does It Work?
After using the index to select a specific product, the user clicks a button to purchase on a page where an instance of Stripe has already been initialized using the owner's public key information. When the button is clicked, an Ajax request is made to the server containing the item id of what the user is purchasing.

On the server-side, the item's title and amount and looked up and used in the process of creating a new Checkout Session along with the owner's secret key. The Checkout Session Object also contains what payment methods are accepted, the mode of payment (e.g. one-time versus subscription), and the appropriate URLs for success or failure. This is passed back to the client to progress, if successful, to Stripe's default Check Out page.

 After the user enter's in their payment information, they are then taken to either the success URL or the cancel URL from the Checkout Session. On the success page, they will see the important information from their session including their unique Stripe Payment Intent ID and the amount charged.

![Stripe Checkout Flow Diagram](https://i.stack.imgur.com/hQrhp.png)
### Stripe APIs Used

 - [Authentication](https://stripe.com/docs/api/authentication)
 - [Checkout Session](https://stripe.com/docs/api/checkout/sessions)
	 - [Create a Session](https://stripe.com/docs/api/checkout/sessions/create)
	 - [Retrieve a Session](https://stripe.com/docs/api/checkout/sessions/retrieve)
	 - [Generate Price Objects Inline](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-line_items-price_data)
 - [Price](https://stripe.com/docs/api/prices)
	 - [The Price Object](https://stripe.com/docs/api/prices/object)

### Resources
  - The ["Stripe Checkout"](https://www.youtube.com/watch?v=UjcSWxPNo18) YouTube Video (and creator [CJ Avilla](https://www.linkedin.com/in/cjavilla/) though LinkedIn Messaging)
 - The ["Prebuilt Checkout page"](https://stripe.com/docs/checkout/quickstart) Walkthrough
 - The ["Test you integration"](https://stripe.com/docs/testing) Docs Page (for test credit cards)
 - [Bootstrap 5 ORder confirmation invoice/bill template](https://bbbootstrap.com/snippets/bootstrap-order-confirmation-invoice-bill-template-49857128)

## What Was My Approach as a Stripe Beginner?
Given my current solution, ServiceNow, primarily uses JavaScript as its main programming language, I started my solution using the Node.js boilerplate provided in in the instructions. After acquiring a Stripe account (which included the necessary test keys and Doc access), I installed the Stripe CLI with Homebrew and Node.js itself. This combined with the instructions provided in the README got me to the point where the boilerplate accurately ran locally.

From there, I started browsing through the Stripe Docs, familiarizing myself with the APIs and general set up. It was while browing that I came across the ["Prebuilt Checkout page"](https://stripe.com/docs/checkout/quickstart) Walkthrough, which allowed me to successfully get the first version of my Checkout Session up and running.

Given I had exhausted the lab-type content on the Docs website, I turned to YouTube where I sifted through a variety of videos before settling on the ["Stripe Checkout"](https://www.youtube.com/watch?v=UjcSWxPNo18) video from the official Stripe Developers channel. Around 45 minutes in length, it gave a deeply comprehensive overview that I could follow at my own speed. This video got me to a point where I had acheived the remaining customer requirements.

All that remained was figuring out how to dynamically choose the right Price Object to charge and better style the success page.
### Challenges I Encountered

 - **Finding Lab-Type Resources for Enablement:** While Stripe has an *extremely* comprehensive Docs website, I found Stripe lacking in comparison to other vendors with regards to self-paced lab content. For my learning style, this is something I gravitate towards, so found learning the ropes more difficult without it. Luckily, the YouTube content was  a great substitute!
 - **Re-familiarizing Myself With Full-Stack Development:** It has been a long time since my development work has occured outside of the ServiceNow platform, so I had to spend some extra time re-learning certain concepts. Like Celine Deon famously sang, though, 🎶 It's all comin' back to me now!  🎶 For example, this showed up in the forms of having to re-figure out how to pass query parameters to client and server.


## What Are Some Future State Options?

 - Removal of hard-coded test entities (e.g. keys, Price Objects)
 - Add shopping cart functionality (i.g. allow for more than one Price Ojbect per Checkout Session)
 - **Stripe Payments**
	 - [Set up a bank account to receive payouts on a schedule](https://stripe.com/docs/payouts)
	 - [Automatically send customers payment or refund receipts](https://stripe.com/docs/receipts)
 - **Stripe Terminal**
	 - [Use Stripe to facilitate the in-person payments at their brick and mortar store as well](https://stripe.com/docs/terminal/designing-integration)
 - **Stripe Radar**
	 - [Use Stripe to protect their business in real-time from fraud](https://stripe.com/docs/radar/integration)
