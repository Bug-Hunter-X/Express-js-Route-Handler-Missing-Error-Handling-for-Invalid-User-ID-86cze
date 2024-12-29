# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  Specifically, the `/users/:id` route fails to handle cases where the `id` parameter is not a valid integer.

## Bug

The provided code attempts to directly parse the `id` parameter as an integer using `parseInt()`.  If the `id` is not a number (e.g., a string or undefined), `parseInt()` will return `NaN`, leading to the `users.find()` method failing to find the correct user, resulting in undefined behavior (potential crash or unexpected results).

## Solution

The solution involves adding error handling to validate the user ID before attempting to access user data.  The improved code includes input validation to check if the ID is a valid integer and handles the case where a user with the given ID is not found.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `node bug.js`.   Then try accessing a URL such as `/users/abc` or `/users/12345` (if no user with that ID exists).
4. Observe the error (or lack thereof). Run `node bugSolution.js` to observe the correct behaviour.