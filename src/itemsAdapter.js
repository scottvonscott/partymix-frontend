// communicate with back end
// post,patch,delete, requests

class ItemsAdapter{
    constructor(){
        this.baseUrl = "http://localhose:3000/items"
    }


    function fetchItems(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            debugger
        })
    }
}



// function fetchItems(){
//     fetch(this.baseUrl)
//     .then(res => res.json())
//     .then(itemLister)