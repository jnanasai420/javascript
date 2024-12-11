var a = 10; //
a = 10; // reassigning using = operator
a += 10; //a = a + 10; adding and reassinig
console.log(a);

var b = 10;
b -= 10; //b=b-10; subtractibg and re assigning
console.log(b);

var c = 10;
c *= 2; //c=c*2; multliplying and reasssigning
console.log(c);

var d = 10;
d /= 2; //d=d/2; dividing and reassigning
console.log(d);

var e = 10;
e %= 2; //e=e%2; dividing  getting remainder and
console.log(e);

var arr = [1, 2, 3, 3, 4, 5, 56, 6, 7, 8, "janana", "sai"];
arr[5] = "js";
console.log(arr);
console.log(typeof arr);

var obj = {
  id: 1,
  name: "jnana",
  age: 21,
  address: {
    village: "pkl",
    dist: "wg",
    state: "ap",
  },
};
console.log(obj);

console.log(obj.id);
console.log(obj.name);
console.log(obj.age);
console.log(obj.address);
obj.id = 10;
console.log(obj.id);
obj.name = "jnana sai";
console.log(obj.name);
obj.age = 21;
console.log(obj.age);
obj.address.village = "palakollu";
console.log(obj.address);
delete obj.age;
console.log(obj);
delete obj.address;
console.log(obj);

//logical operatrors &&,||,!  returns boolean values
var x = 10;
var y = 0;
console.log(x > y && y > x);
console.log(x > y || y > x);
console.log(!y);
console.log(!!y);
console.log(!!!y);
