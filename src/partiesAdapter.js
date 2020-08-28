

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
            let itemsObj = {

            }
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

    // CREATE
    // handleFormSubmit(e){
    // e.preventDefault()
    // // let newPartyItemsObj = {
    // //     main_courses: {category_id: 1, name: mainCourse.value},
    // //     snacks: {category_id: 2, name: snacks.value},
    // //     alcoholic_drinks: {category_id: 2, name: alcoholicDrinks.value},

    //     // this is where I stopped!!!!! probably do this in OO

    //     // music: music.value,
    //     // movies_tv: moviesTV.value,
    //     // games: games.value,
    //     // decorations: decorations.value,
    //     // costumes: costumes.value
    // }
    // let newPartyObj = {
    //     title: partyTitle.value, 
    //     items: newPartyItemsObj 
    // }
    // let configObj = {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //     },
    //     body: JSON.stringify(newPartyObj)
    // }

    // fetch('http://localhost:3000/parties', configObj)
    // .then(res => res.json())
    // .then(json => {
    //     addPartyToDom(json.data)
        
    // })

    // DELETE
    deleteItem(id){
        // remove from db
            let configObj = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
    
            fetch(`http://localhost:3000/parties/${id}`, configObj)
            .then(res => res.json())
            .then(json => {
                alert(json.message)
            })
        }

}