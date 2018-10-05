## Table of Contents
**Questions**
* [Question 1](#question-1)
* [Question 2](#question-2)
* [Question 3](#question-3)

## Question 1
To run the application, simply run npm install followed by webpack --watch.  You can then open the index.html file path in your browser.  To interact with the application simply choose which data type you would like to view by clicking it, then set your desired time range filter, and finally scroll through all of the results on the far right table.

## Question 2
Users can create and login to their personal channels.  Users provide a username (which must be unique) and a password of at least 6 characters.  Any errors with username or password will be communicated to users through error messages.

On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed and compared to the encrypted password in order to verify the log-in.

NewTubes User Auth UI is implemented in a two step process.  Users first enter usernames.  An AJAX call is subsequently made, querying the users database for a user with the provided input.  Once the user is retrieved, users are greeted and asked for their password.  Finally, another AJAX call is made to the users table, where the hashed password is fetched given user input.

## Question 3
Users can create and login to their personal channels.  Users provide a username (which must be unique) and a password of at least 6 characters.  Any errors with username or password will be communicated to users through error messages.

On the back-end, an encrypted, hashed password is stored in the database (passwords are never saved to the database). On log-in, the provided password is rehashed and compared to the encrypted password in order to verify the log-in.

NewTubes User Auth UI is implemented in a two step process.  Users first enter usernames.  An AJAX call is subsequently made, querying the users database for a user with the provided input.  Once the user is retrieved, users are greeted and asked for their password.  Finally, another AJAX call is made to the users table, where the hashed password is fetched given user input.
