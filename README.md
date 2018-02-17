# _Doctor Lookup_

#### _An application that will search for specific doctors in the Portland area._

#### By _**Anduin Mooney**_

## Description

_This application will allow the user to input a name of a doctor or a medical issue the user is having, and the application will return doctors that specialize in that kind of treatment. The application will return things such as the name, address, phone number and website of the doctor._

### _Possible Future Additions_

_If I were to continue working on this application, I would like to add more search parameters and add the ability to search in the user's area instead of automatically searching through Portland only. I would also like to style the page and return more information about the doctor, such as their license and specialization_

## Installation
* _Clone repository from github_
* _Open repository file with a program such as Atom_
* Go to https://developer.betterdoctor.com
* _Make an account_
* _Create API key_
* _Create .env file within the uppermost root directory of this application_
* _Insert "exports.apiKey = "{INSERT YOUR OWN API KEY HERE}";" into .env file_
* _Launch index.html_


### Specifications
| Behavior | Input | Output |
| :-------------     | :------------- | :-------------
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.| Flu | https://api.betterdoctor.com/2016-03-01/doctors?query=Flu&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=fba52e5079cd9be22ed3b7dbbcf58c13 |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.| Anduin | https://api.betterdoctor.com/2016-03-01/doctors?name=Anduin&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey.apiKey}|
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. | Melanie Plaut | Melanie, Plaut, 3550 N Interstate Ave, 5033316142, https://healthy.kaiserpermanente.org/ |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. | ERROR | app.js:32 GET https://api.betterdoctor.com/2016-03-01/doctors?name=undefined&query=undefined&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=undefined&user_key=fba52e5079cd9be22ed3b7dbbcf58c13 400 (Bad Request) |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)| if (body.data.length === 0) | No doctors have been found  |


## Known Bugs

_There are no known bugs, but please contact me if you end up finding one!_

## Support and contact details

_Contact me at anduinmooney@gmail.com_

## Technologies Used

_JavaScript, Atom, NPM, Jasmine, Karma, Gulp, Bower, Browserify, Watchify, ES6, BetterDoctor API_

### License

Copyright (c) 2018 **Anduin Mooney**
