

class PartiesAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/parties"
    }

    fetchParties(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
                let party = new Party(el.attributes)
                party.attachToDom()
            })
        })
    }

    // CREATE
    createParty(e){
    e.preventDefault()

    

    const title = document.getElementById('party-title').value
    const mainCourse = document.getElementById('item-main-course').value
    const snacks = document.getElementById('item-snacks').value
    const alcoholicDrinks = document.getElementById('item-alcoholic-drinks').value
    const music = document.getElementById('item-music').value
    const moviesTV = document.getElementById('item-movies-tv').value
    const games = document.getElementById('item-games').value
    const decorations = document.getElementById('item-decorations').value
    const costumes = document.getElementById('item-costumes').value


    let newPartyItemsObj = [
        {name: mainCourse, category_id: 1},
        {name:snacks, category_id: 2},
        {name: alcoholicDrinks, category_id: 4},
        {name: music, category_id: 5},
        {name: moviesTV, category_id: 6},
        {name: games, category_id: 7},
        {name: decorations, category_id: 8},
        {name: costumes, category_id: 9}
    ]
  
    let newPartyObj = {
        title, 
        items: newPartyItemsObj 
    }
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newPartyObj)
    }

    fetch(this.baseUrl, configObj)
    .then(res => res.json())
    .then(json => {
        let party = new Party(json.data.attributes)
        party.attachToDom()
        
    })
    // partyForm.reset()
}
 
    deleteParty(id){
            let configObj = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
            fetch(this.baseUrl + `/${id}`, configObj)
            .then(res => res.json())
            .then(json => {
                alert(json.message)
            })
        }
}