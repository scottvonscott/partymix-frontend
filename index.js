
// Variables

const partyList = document.getElementById('party-list')
const partyForm = document.getElementById('party-form')
const partyTitle = document.getElementById('party-title')
const itemList = []
const planList = []

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchParties()
    fetchItems()
    fetchPartyPlans()
    partyForm.addEventListener('submit', handleFormSubmit)
})


//  Fetch Functions

function fetchParties(){
    fetch('http://localhost:3000/parties')
    .then(res => res.json())
    .then(addParties)
}

function fetchPartyPlans(){
    fetch('http://localhost:3000/party_plans')
    .then(res => res.json())
    .then(partyPlanLister)
}

function fetchItems(){
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(itemLister)
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

function partyPlanLister(response) {
    response.forEach(plan => {
        planList.push(plan)
    })
}

function planIndex(p){
    let partyItemIds = planList.map(plan => {
         if (plan.party_id === p){
             return plan.item_id
         }})
         
        partyItemIds = partyItemIds.filter( Number)

        let partyItemsKV = []
        partyItemIds.forEach(id => {
             let idMatch = itemList.find(item => parseInt(item.id) === id)
                partyItemsKV.push(idMatch.attributes.name)
         })
return partyItemsKV
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
    h2.setAttribute('id', `Party ${party.id}`)
    h2.innerText = party.attributes.title

    let partyItems = planIndex(parseInt(party.id));
    partyItems.forEach(i => {
        let newItem = document.createElement('p')
        newItem.setAttribute('class', 'party-item')
        newItem.innerText = i
        newItem.hidden = true
        h2.appendChild(newItem)
    })
    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2)
    partyList.append(divCard)
    h2.addEventListener("click", expandParties); 

    function expandParties(){
       let hiders = h2.childNodes
       hiders.forEach(i => {
           i.hidden = !i.hidden
       })
    }
    
}
