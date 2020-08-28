

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
    // UPDATE
    // sendPatchRequest(itemId){
    //     const price = document.getElementById(`update-price-${itemId}`).value
    //     const description = document.getElementById(`update-description-${itemId}`).value
    //     const name = document.getElementById(`update-name-${itemId}`).value
            // let itemsObj = {

            // }
    //     let partyObj = {
    //         title: title,
    //         items: itemsObj
    //     }

    //     let configObj = {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accepts": "application/json"
    //         },
    //         body: JSON.stringify(partyObj)
    //     }

    //     fetch(this.baseUrl + `/${partyId}`, configObj)
    //     .then(res => res.json())
    //     .then(response => {
    //         let item = Item.all.find((i) => i.id === response.data.attributes.id )
    //         item.updateItemOnDom(response.data.attributes)
            
    //     })
    //     // remove form

    //     let form = document.getElementById(`update-form-${itemId}`)
    //     form.remove()
    // }

    CREATE
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
    // let newPartyItemsObj = {
    //     mainCourse,
    //     snacks,
    //     alcoholicDrinks,
    //     music,
    //     moviesTV,
    //     games,
    //     decorations,
    //     costumes
    // }
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

    fetch('http://localhost:3000/parties', configObj)
    .then(res => res.json())
    .then(json => {
        let party = new Party(json.data.attributes)
        party.attachToDom()
        
    })
}

    // DELETE
    // deleteItem(id){
    //     // remove from db
    //         let configObj = {
    //             method: 'DELETE',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json"
    //             }
    //         }
    
    //         fetch(`http://localhost:3000/parties/${id}`, configObj)
    //         .then(res => res.json())
    //         .then(json => {
    //             alert(json.message)
    //         })
    //     }
}