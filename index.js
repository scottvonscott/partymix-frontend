
// Variables

const partyList = document.getElementById('party-list')
const partyForm = document.getElementById('party-form')
const partyTitle = document.getElementById('party-title')


//  Fetch Functions

function fetchParties(){
    fetch('http://localhost:3000/parties')
    .then(res => res.json())
    .then(addParties)
}

function fetchItems(){
    fetch('http://localhost:3000/parties')
    .then(res => res.json())
}

function fetchCategories(){
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
}

function addParties(response){
    response.data.forEach( party => {
        addPartyToDom(party)
         })
}

function handleFormSubmit(e){
    e.preventDefault()
    debugger
    
} 

// Dom Functions

function addPartyToDom(party){
    let h2 = document.createElement('h2')
    h2.innerText = party.attributes.title
    
    let p = document.createElement('p')
    p.innerText = "Party Items:"
    let i = document.createElement('p')
    i.innerText = party
    p.append(i)

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, p)
    partyList.append(divCard)
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchParties()
    partyForm.addEventListener('submit', handleFormSubmit)
    // itemList.addEventListener('click', handleListClick)
})