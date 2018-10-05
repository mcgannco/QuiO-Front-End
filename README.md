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
A typical build / deployment for a production React app starts with the build.  Local code / dependencies that you or your developers have written needs to be bundled together, typically done with a bundler such as webpack.  Webpack bundles your entire app / feature into a single file such as a bundle.js.  Typically, you want this file to be a small as possible to save on memory / speed when being processed server side or client side, so it is advised to remove any and all loggers, debuggers etc.  Minification strips out all data that isn't required to be executed, but improves a development environment.  A common tool to do this is called Uglify, which can be added to the configuration file.  Code also needs to be transpiled to be viewable across all browsers (including browers that do not support ES6), so typically babel will be used for that.  Next, all source code, dependencies, generated assets or compiled code will be assembled together.  Once your build is ready, it is time to deploy. The deployment process first installs all applications vital to the application you are deploying.  Databases / other resources are configured in the application server.  The server is configured for all http request, and the newly generated html content is placed on the http server.  Finally, the server needs to re-start so it reads the new configuration.
