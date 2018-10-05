## Table of Contents
**Questions**
* [Question 1](#question-1)
* [Question 2](#question-2)
* [Question 3](#question-3)

## Question 1
To run the application, simply clone this repo, run npm install followed by webpack --watch.  You can then open the index.html file path in your browser.  To interact with the application simply choose which data type you would like to view by clicking it, then set your desired time range filter, and finally scroll through all of the results on the far right table.  All of the applications code can be found within the frontend folder, while the stylesheets folder contains all CSS.

## Question 2
A feature in ES6 that has improved the developer experience is the syntactical sugar added to JasvaScript classes.  One feature specifically that is much easier to deal with now is Inheritance.  JasvaScripts system for implementing inheritance is called prototypal inheritance.  When you call any property on any JasvaScript object, the interpreter will first look for that property in the object itself.  If its not there, it will look at the objects prototype (directed by the internal __proto__).  It will recursively check up the prototype chain until it finds the property or it reaches Object.prototype.__proto__ (which is null).

Before the recent improvements in ES6, there were several ways to implement inheritance in JasvaScript.  One way previously used was Object.create.  Object.create creates a new object with its __proto__ set to the argument passed into Object.create.  For example, if I had a Car class and I wanted a new class Truck to inherit from Car, I would write the following:
```javascript
Truck.prototype = Object.create(Car.prototype);

Truck.prototype.constructor = Truck
```

In ES6 the class syntactic sugar allows you to write a much simpler and clearer way of implementing inheritance
```javascript
class Truck extends Car {
  constructor(color) {
    super(color, other);
    this.other = other;
  }
}
```

## Question 3
Users can create and login to their personal channels.  Users provide a username (which must be unique) and a password of at least 6 characters.  Any errors with username or password will be communicated to users through error messages.

On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed and compared to the encrypted password in order to verify the log-in.

NewTubes User Auth UI is implemented in a two step process.  Users first enter usernames.  An AJAX call is subsequently made, querying the users database for a user with the provided input.  Once the user is retrieved, users are greeted and asked for their password.  Finally, another AJAX call is made to the users table, where the hashed password is fetched given user input.
