
// Variables


const partyForm = document.getElementById('party-form')
const partyTitle = document.getElementById('party-title')
const mainCourse = document.getElementById('item-main-course')
const snacks = document.getElementById('item-snacks')
const alcoholicDrinks = document.getElementById('item-alcoholic-drinks')
const music = document.getElementById('item-music')
const moviesTV = document.getElementById('item-movies-tv')
const games = document.getElementById('item-games')
const decorations = document.getElementById('item-decorations')
const costumes = document.getElementById('item-costumes')

const itemsAdapter = new ItemsAdapter
const partiesAdapter = new PartiesAdapter

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    
    itemsAdapter.fetchItems()
    partiesAdapter.fetchParties()
    // partyForm.addEventListener('submit', handleFormSubmit)
})




// function handleFormSubmit(e){
//     e.preventDefault()
//     // let newPartyItemsObj = {
//     //     main_courses: {category_id: 1, name: mainCourse.value},
//     //     snacks: {category_id: 2, name: snacks.value},
//     //     alcoholic_drinks: {category_id: 2, name: alcoholicDrinks.value},

//         // this is where I stopped!!!!! probably do this in OO

//         // music: music.value,
//         // movies_tv: moviesTV.value,
//         // games: games.value,
//         // decorations: decorations.value,
//         // costumes: costumes.value
//     }
//     let newPartyObj = {
//         title: partyTitle.value, 
//         items: newPartyItemsObj 
//     }
//     let configObj = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify(newPartyObj)
//     }

//     fetch('http://localhost:3000/parties', configObj)
//     .then(res => res.json())
//     .then(json => {
//         addPartyToDom(json.data)
        
//     })


// Dom Functions

