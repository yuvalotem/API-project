const api = new APIManager()
$('#load').on('click', function(){
    api.allAPIRequests()
})

$('#display').on('click', function(){
    const display = new Renderer(api.data)
    display.renderAll();
})

$('#save').on('click', function(){
    const display = new Renderer(api.data)
    api.savedUsers.push(JSON.parse(JSON.stringify(api.data)))
    localStorage.users = JSON.stringify(api.savedUsers)
    display.renderSaved(api.savedUsers);
})

$('#load-saved').on('click', function(){
   const name = $('#saved-users').val().split(" ")
   const saved = JSON.parse(localStorage.users || "[]")
   const chosenUser = saved.find(u => u.mainUser.first === name[0] && u.mainUser.last === name[1])
   api.data = chosenUser
})

