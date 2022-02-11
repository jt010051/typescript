class Point{//class
x: number;
y: number;
constructor(x?: number, y?: number){ //? Optional parameters (Typescript)
this.x=x;
this.y=y;
}
draw (){
console.log('X: '+this.x+ ', Y: ' +this.y)

}

}


let point =new Point(1, 2);

point.draw();