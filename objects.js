//Object Literals are simple ways of defining objects.
const circle = {
	radius: 1, //these are all properties
	location: {
		x: 1,
		y: 1
	},
	draw: function() { 
		console.log('draw'); 
	}
};

circle.draw();

//the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called. 
//functions define logical computations
//object literals are not viable if the object has more than one method inside it. They can be used as long as it does not have any behaviors
/*
var obj = {
  foo: function() {},
  bar: function() {}
};
*/ 
//Same code, simplified
var obj = {
  foo() {},
  bar() {}
};
//Another way of grouping methods
var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"
