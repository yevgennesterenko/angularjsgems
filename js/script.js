var person = {firstName:"John", age:50}

var x = person;
var y = Object(person);
var z = new Object(person);

y.age = 10;
z.nnn = "new";
alert(x.nnn);
alert(x.age);
