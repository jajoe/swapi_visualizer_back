# What is this project ?

The project named __SWAPI visualizer__ should enable to visualize the data from SWAPI (a public API). This repository includes the backend of this little project. This backend is an API with the following routes :
* /all/{text} will return every items from SWAPI whose name includes the variable text 
* /{category}/{text} will return every items from the given category from SWAPI whose name includs the variable text. The category are the following : 'films', 'planets', 'people', 'species', 'starships' and 'vehicles'.

# How to run it locally

You need to have yarn installed. If it's not the case, the can find the procedure to install it [here](https://classic.yarnpkg.com/fr/docs/install/#debian-stable).

Then, run the following command to install the project : 
```bash
yarn
```

Then, just run the following command to run the server :
```bash
node index.js
```

# Technical improvments

* ES6 : the code in the file helpers/axiosUtils is a good argument to show that using ES6 will make things more readable.
* The code using Axios could be isolate in another folder. Currently it's in the helpers.

# Features good to have

* Cache. it's very important because the number of requests to SWAPI is limited.
