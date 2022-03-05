# Stripe Solution Architect Written Project
## Use Case
A family-owned campus bookstore has recently begun selling e-text books to university students, but is currently still doing so out of the brick and mortar store. With a reason and desire to open up selling of these e-books online, they are considering Stripe as a facilitating vendor. However, they are struggling to visualize what the user experience would be and have requested a demo of a similar e-commerce application with the below requirements, details about how the solution was made, as well as further improvements that could be offered.
### Requirements

 - [X] The user can select a book to purchase
 - [X] The user can checkout and purchase the item using Stripe Elements
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














# Take home project
This is a simple e-commerce application that a customer can use to purchase a book, but it's missing the payments functionality —  your goal is to integrate Stripe to get this application running!

## Candidate instructions
You'll receive these in email.

## Application overview
This demo is written in Javascript (Node.js) with the [Express framework](https://expressjs.com/). You'll need to retrieve a set of testmode API keys from the Stripe dashboard (you can create a free test account [here](https://dashboard.stripe.com/register)) to run this locally.

We're using the [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/) CSS framework. It's the most popular CSS framework in the world and is pretty easy to get started with — feel free to modify styles/layout if you like.

To simplify this project, we're also not using any database here, either. Instead `app.js` includes a simple switch statement to read the GET params for `item`.

To get started, clone the repository and run `npm install` to install dependencies:

```
git clone https://github.com/mattmitchell6/sa-takehome-project-node && cd sa-takehome-project-node
npm install
```

Rename `sample.env` to `.env` and populate with your Stripe account's test API keys

Then run the application locally:

```
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the index page.
