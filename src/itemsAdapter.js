// communicate with back end
// post,patch,delete, requests

class ItemsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/items"
    }


    fetchItems(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
                let item = new Item(el.attributes)
                item.attachToDom()
            })
        })
    }

}