// TODO: Build an awesome garage!

// We will use this API:
// // https://github.com/lewagon/garage-api#wagon---garage-api-

// -(GET)GET all cars from your own garage (name it as you want with a slug)
// -(POST) Create new cars and park it in your garage


// Get all cars : GET AJAX REQUEST.
// Now that the context is set, call a first volunteer to fetch and display all cars of a garage.

// Let students breakdown the problem:

// 1. Send an AJAX request to the API to fetch all cars
// 2. For each car
//    3. Insert a new row in the cars table


// Add a new car : POST AJAX REQUEST
// Time has come for creating a new car!

// 1. Add an event listener on the form
// 2. Prevent default behavior when we submit it
// 3. Recover data entered by the user
// 4. Send a POST ajax request to the API
// 5. Refresh cars list


import { addCar, fetchAndDisplayCars } from './car';
import { focusOnFirstInput, prepareNewCarForm } from './form';

const GARAGE_SLUG = "lewagon-is-awesome";

fetchAndDisplayCars(GARAGE_SLUG);
prepareNewCarForm(GARAGE_SLUG);
