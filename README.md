<h1>JavaScript Virtual Pet 🐾</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> Real pets are great, but they do have drawbacks. They smell. Your mum might be allergic to them. Maybe you just aren't allowed one in your flat. JavaScript pets are great. Because they're made of JavaScript, they can do literally anything, and they don't have any of the drawbacks of regular pets.
## Features

-   You can give them a name
-   They can get older
-   As they get older, they get hungrier and less fit
-   You can walk your pet to increase it's fitness.
-   You can feed your pet to decrease it's hunger.
-   You can talk to your pet to see if it needs feeding or walking
-   If your pet gets too hungry or unfit, it will DIE
-   If your pet gets to 30 days old it will DIE

 ## Experimental Tamagotchi UI [here](https://pixeljuggle.github.io/virtual-pet/)
## Install

```sh
npm install
```

## Get a Pet
> We will use Node REPL ( Node Shell ) in this example.
From the project directory :
### Enter node shell.
```sh
node
```
### Import the Pet constructor.
```sh
const Pet = require("./src/pet")
```
### Create your pet. 
*in this example im storing the pet in a variable called **Doge** and naming the pet **Dean***
```sh
const Doge = new Pet('Dean')
```
## Congratulations ! You now have a real life JavaScript pet. 

### Check your pet is ok and see if it needs anything. 

```sh
Doge.checkUp()
```
### You can satisfy your pets needs with the following. 

```sh
Doge.feed()
```
or 
```sh
Doge.walk()
```
### The power of JavaScript allows you to increase the age of yout pet. 

```sh
Doge.growUp()
```

> ⚠️ **Be very careful here! Pet can haz too many feed and walk and such age!**

-   Pet cannot live past the age of 30 !
-   If pet fitness drops to 0, pet bites the dust !
-   If pet hunger reaches 10, pet is done for !

### You can check the individual stats of your Pet.

```sh
Doge.age
```
```sh
Doge.fitness
```
```sh
Doge.hunger
```
```sh
Doge.isAlive
```
***

## Run tests

```sh
npm test
```

## Author

👤 **Alex White / Manchester Codes**

* Github: [@pixeljuggle](https://github.com/pixeljuggle)
* Github: [@MCRcodes](https://github.com/MCRcodes)

## Show your support

Give a ⭐️ if this project made you smile!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_