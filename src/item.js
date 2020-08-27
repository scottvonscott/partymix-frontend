// item class 

class Item{

    static all = []

    constructor(name, id)
    this.name = name
    this.id = id

    Item.all.push(this)
}