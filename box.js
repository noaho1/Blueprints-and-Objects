class Box {
    constructor(x, y, width, height) {
        //properties

        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
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
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}

