class Point{//class

constructor(private _x?: number, private _y?: number){ //? Optional parameters (Typescript)
//access modifiers generate fields with exact same name and initializes field with valueless argument (Typescript)
}
draw (){
console.log('X: '+this._x+ ', Y: ' +this._y)

}
get x(){
    return this._x;
}
set x(value){
    if(value<0){
throw new Error('value cannot be less than 0');
this._x=value;
    }
}
}


let point =new Point(1, 2);
let x = point.X;
point.X=10;
point.draw();