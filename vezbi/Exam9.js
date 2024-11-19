class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food) {
        if (this.stomach.length < 10) {
            this.stomach.push(food); 
            
        }
    }

    digest() {
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`; 
        }
}
class Baby extends Human{
    constructor(name,age,game){
        super(name,age);
        this.game=game;
    }
    play(){
        return `Baby ${this.name}, ${this.age} is playing with ${this.game}`;
    }
        
}