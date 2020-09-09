class Category{

    static all = []

    constructor({name, id, items}){
    this.name = name
    this.id = id
    this.items = items


    Category.all.push(this)
}



}