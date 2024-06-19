const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const productActions = require("./controllers/productActions");

// Route to get a list of items
router.get("/products", productActions.browse);

router.post("/products", productActions.add);


/* ************************************************************************* */

module.exports = router;
