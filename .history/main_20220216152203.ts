class Point{//class

constructor(private x?: number, private y?: number){ //? Optional parameters (Typescript)
//access modifiers generate fields with exact same name and initializes field with valueless argument (Typescript)
}
draw (){
console.log('X: '+this.x+ ', Y: ' +this.y)

}

}


let point =new Point(1, 2);

point.draw();