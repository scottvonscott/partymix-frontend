document.addEventListener('DOMContentLoaded', () => {
    fetchParties()

})

const partyList = document.getElementById('party-list')

function fetchParties(){
    fetch('http://localhost:3000/parties')
    .then(res => res.json())
    .then(addParties)
}

function addParties(response){
    response.forEach( party => {
        addPartyToDom(party)
         })
}

function addPartyToDom(party){
    partyList.innerHTML += `
    <div id="party-${party.id}">
    <li>
    <strong class="name">${party.title}</strong>:
    </li>
        <button class="delete" data-id="${party.id}">Delete</button>
        <button class="update" data-id="${party.id}">Update</button>
        </div>`
}