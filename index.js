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
    let h2 = document.createElement('h2')
    h2.innerText = party.title
    
    let p = document.createElement('p')
    p.innerText = "Party Items:"
    let i = document.createElement('p')
    debugger
    i.innerText = party.items
    p.append(i)

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, p)
    partyList.append(divCard)
}