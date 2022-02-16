class Point{//class

constructor(private x?: number, private y?: number){ //? Optional parameters (Typescript)
//access modifiers generate fields with exact same name and initializes field with valueless argument (Typescript)
}
draw (){
console.log('X: '+this.x+ ', Y: ' +this.y)

}getX(){
    return this.x;
}
setX(value){
    if(value<0){
throw new Error('value cannot be less than 0');
    }
}
}


let point =new Point(1, 2);
let x = point.getX;
point.draw();