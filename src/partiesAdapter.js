

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
    e.preventDefault();
        let items = document.querySelectorAll('.new-party-item');
        let categories = document.querySelectorAll('.categories-dropdown');

        let dict = {};

        for (let i = 0; i < items.length; i++) {
            let item = items[i].value;
            let category = categories[i].value;
            dict[category] = item;
        }


    const title = document.getElementById('party-title').value;

  
    let newPartyObj = {
        title, 
        items: dict 
    }
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newPartyObj)
    }
    
    fetch(partiesAdapter.baseUrl, configObj)
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