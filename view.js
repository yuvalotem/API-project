class Renderer {
    constructor(data) {
        this.user = data.mainUser
        this.friends = data.usersArray
        this.quote = data.quote
        this.pokemon = data.pokemon
        this.meat = data.aboutMe
    }

    renderUser(){
        $('.user-container').empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({user: this.user})
        $('.user-container').append(newHTML)
    }

    renderFriends(){
        $('.friends-container').empty()
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({friend: this.friends})
        $('.friends-container').append(newHTML)
    }

    renderQuote(){
        $('.quote-container').empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(this.quote)
        $('.quote-container').append(newHTML) 
    }

    renderPokemon(){
        $('.pokemon-container').empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({pokemon: this.pokemon})
        $('.pokemon-container').append(newHTML) 
    }

    renderMeat(){
        $('.meat-container').empty()
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({aboutMe: this.meat})
        $('.meat-container').append(newHTML)
    }

    renderAll(){
        this.renderUser()
        this.renderFriends()
        this.renderQuote()
        this.renderPokemon()
        this.renderMeat()
    }

    renderSaved(saved){
        const namearr = saved.map(u => u.mainUser.first + ' ' + u.mainUser.last)
        $('.saved-container').empty()
        const source = $('#saved-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(namearr)
        $('.saved-container').append(newHTML)
    }
}
