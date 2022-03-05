# Stripe Solution Architect Written Project
## Use Case
A family-owned campus bookstore has recently begun selling e-text books to university students, but is currently still doing so out of the brick and mortar store. With a reason and desire to open up selling of these e-books online, they are considering Stripe as a facilitating vendor. However, they are struggling to visualize what the user experience would be and have requested a demo of a similar e-commerce application with the below requirements, details about how the solution was made (and how beginners may replicate it), as well as further improvements that could be offered.

### Requirements
 - [X] The user can select a book to purchase
 - [X] The user can checkout and purchase the item using [Stripe Elements](https://stripe.com/payments/elements)
 - [X] The user recevies a display confirmation fo purchase with the total of the charge and unique id (in the form of a Stripe Payment Intent ID)

## How to Run the Solution
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
## How Does It Work?


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
### My Approach
## What Was My Approach as a Stripe Beginner?
### Challenges I Encountered
## What Are Future State Options?
