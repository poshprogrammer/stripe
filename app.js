const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').config();
const stripe = require('stripe')('sk_test_51Id6BuJlisOnJxVCXo4TofVNpfY4jgZjdHrGIOxLG6ULRXQvVqnHbooMszjdbUi4ryQtXOe2MLD2vpTjbypOfgN800DDBd5xXO'); //

var app = express();

// view engine setup (Handlebars)
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({}));

// NEW ADDED ENDPOINT FOR SERVER THAT CREATES A CHECKOUT SESSION (https://stripe.com/docs/checkout/quickstart)
// Step 1: Create a Checkout Session
app.post('/create-checkout-session', async (req, res) => {
    console.log("BEGIN CREATE-CHECKOUT-SESSION");
    const id = req.body.item;
    console.log("ID = " + id);

    let title, amount, error;

    switch (id) {
      case "1":
        title = "The Art of Doing Science and Engineering"
        amount = 2300
        break;
      case "2":
        title = "The Making of Prince of Persia: Journals 1985-1993"
        amount = 2500
        break;
      case "3":
        title = "Working in Public: The Making and Maintenance of Open Source"
        amount = 2800
        break;
      default:
        // Included in layout view, feel free to assign error
        error = "No item selected"
        break;
    }

    console.log("TITLE = " + title);
    console.log("AMOUNT = " + amount);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

      // Step 2: Define Products
      line_items: [
        {
          // Data used to create new Price object inline
          price_data: {
            currency: 'usd',
            product_data: {
              name: title,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],

      // Step 3: Choose the Mode (payment, subscription, setup)
      mode: "payment",

      // Step 4: Supply Success and Cancel URLs
      success_url: 'http://localhost:3000/success?id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/checkout?item=' + id,
    });

    // Step 5: Create Redirect to Checkout
    // res.redirect(303, session.url);

    // UPDATED Step 5: (https://www.youtube.com/watch?v=UjcSWxPNo18)
    // Render back to the client something that can be used to redirect
    res.json({
      id: session.id,
    });
});


/**
 * Home route
 */
app.get('/', function(req, res) {
  res.render('index');
});

/**
 * Checkout route
 */
app.get('/checkout', function(req, res) {
  // Just hardcoding amounts here to avoid using a database
  const item = req.query.item;
  let title, amount, error;

  switch (item) {
    case '1':
      title = "The Art of Doing Science and Engineering"
      amount = 2300
      break;
    case '2':
      title = "The Making of Prince of Persia: Journals 1985-1993"
      amount = 2500
      break;
    case '3':
      title = "Working in Public: The Making and Maintenance of Open Source"
      amount = 2800
      break;
    default:
      // Included in layout view, feel free to assign error
      error = "No item selected"
      break;
  }

  res.render('checkout', {
    title: title,
    amount: amount,
    error: error,
    item: item
  });
});

app.get('/checkout-session', async (req,res) => {
  // Add in expand arguement so that session includes line items
  const session = await stripe.checkout.sessions.retrieve(req.query.id, {
    expand: ['line_items']
  });
  res.json(session);
});

/**
 * Success route
 */
app.get('/success', function(req, res) {
  res.render('success');
});

/**
 * Start server
 */
app.listen(3000, () => {
  console.log('Getting served on port 3000');
});
