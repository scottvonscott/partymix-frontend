class Category{

    static all = []

    constructor({name, id, category}){
    this.name = name
    this.id = id
    this.category = category.name
    this.category_id = category.id


    Category.all.push(this)
}



}