

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

}