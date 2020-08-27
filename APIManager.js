class user {
    constructor(firstName, lastName) {
        this.first = firstName
        this.last = lastName
    }
}
class mainUser extends user {
    constructor(firstName, lastName, city, state, imgUrl) {
        super(firstName, lastName)
        this.city = city
        this.state = state
        this.imgUrl = imgUrl
    }
}

class APIManager {
    constructor() {
        this.data = {}
        this.savedUsers = []
    }

    createUsers(respone) {
        const results = respone.results
        const firstUser = results[0]
        this.data.mainUser = new mainUser(
             firstUser.name.first,
             firstUser.name.last,
             firstUser.location.city, 
             firstUser.location.state, 
             firstUser.picture.large)
        results.shift()
        this.data.usersArray = results.map(u => {
            return new user(u.name.first, u.name.last)
        });


    }

    userAPIRequests() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (respone) => {
                this.createUsers(respone)
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    quoteAPIRequests() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest?format=text',
            success: (response) => {
                this.data.quote = response
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    pokemonAPIRequests() {
        let randNum = Math.random() * 893
        randNum = Math.round(randNum);
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randNum}`,
            success: (response) => {
                this.data.pokemon = { name: response.name, img: response.sprites.front_default }
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    aboutMeAPIRequests() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text',
            success: (response) => {
                this.data.aboutMe = response
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }

    allAPIRequests() {
        this.userAPIRequests()
        this.quoteAPIRequests()
        this.pokemonAPIRequests()
        this.aboutMeAPIRequests()
    }
}



