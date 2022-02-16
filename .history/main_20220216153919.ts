class Point{//class

constructor(private _x?: number, private _y?: number){ //? Optional parameters (Typescript)
//access modifiers generate fields with exact same name and initializes field with valueless argument (Typescript)
}
draw (){
console.log('X: '+this._x+ ', Y: ' +this._y)

}


}


let point =new Point(1, 2);

point.draw();  