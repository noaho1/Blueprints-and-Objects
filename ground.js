class Ground {

    // special member function of class to store and initialize properties that we add with default value
    constructor(x, y, width, height) {
        //properties

        var options = {
            isStatic: true
        }

        //mentioned what property your object will have
        // this keyword means the current object that constructor is refering to
        // We have created blueprint to refer to when we create 1000 objects that I may create in future
        // this refers to the current object- if I am creating 100th object this will bind constructor with the 100th object
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    //functions
    display() {
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}


