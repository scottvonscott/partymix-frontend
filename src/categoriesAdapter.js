class CategoriesAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/categories"
    }

fetchCategories(){
    fetch(this.baseUrl)
    .then(res => res.json())
    .then(json => {
        json.data.forEach((el)=>{
            new Category(el.attributes)
        })
    })
}
}