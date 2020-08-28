

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


    handleFormSubmit(e){
    e.preventDefault()
    // let newPartyItemsObj = {
    //     main_courses: {category_id: 1, name: mainCourse.value},
    //     snacks: {category_id: 2, name: snacks.value},
    //     alcoholic_drinks: {category_id: 2, name: alcoholicDrinks.value},

        // this is where I stopped!!!!! probably do this in OO

        // music: music.value,
        // movies_tv: moviesTV.value,
        // games: games.value,
        // decorations: decorations.value,
        // costumes: costumes.value
    }
    let newPartyObj = {
        title: partyTitle.value, 
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
        addPartyToDom(json.data)
        
    })

}