
// Variables

const partyList = document.getElementById('party-list')
const partyForm = document.getElementById('party-form')
const partyTitle = document.getElementById('party-title')
const itemList = []

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchParties()
    fetchItems()
    partyForm.addEventListener('submit', handleFormSubmit)
})


//  Fetch Functions

function fetchParties(){
    fetch('http://localhost:3000/parties')
    .then(res => res.json())
    .then(addParties)
}

function fetchPartyItems(party){
    fetch('http://localhost:3000/parties/#{party}')
    .then(res => res.json())
}

function fetchItems(){
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(itemLister)
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

function itemLister(response) {
    response.data.forEach(item => {
        itemList.push(item)
    })
}


function handleFormSubmit(e){
    e.preventDefault()

    let newPartyObj = {
        title: partyTitle.value,
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

// Dom Functions

function addPartyToDom(party){
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'party')
    h2.setAttribute('id', party.id)
    h2.innerText = party.attributes.title

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2)
    partyList.append(divCard)
    h2.addEventListener("click", expandParties); 
    
}

function expandParties(e) {
    alert("You clicked it!")
}
