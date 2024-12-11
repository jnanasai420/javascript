// 1.take two strings with spaces at starting of one string and
// at the ending of another string remove the spaces and
// concat the both string and
// convert the combined string into uppercase string
var a = "         jnana";
var b = "sai           ";
a = a.trimStart(); //a.trim();
b = b.trimEnd();
var c = a.concat(b).toUpperCase();
console.log(c);

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase
var d = c.slice(2, 7).toLowerCase();
console.log(d);
console.log(d.charAt(d.length - 1));

// 3.take a single char and concat string to that char and
// convert the resulted string to uppercase and
// then extract the last second char

var e = "p";
var f = e.concat(a).toUpperCase();
console.log(f);
console.log(f.charAt(f.length - 2));

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase
var g = "jnanasai";
var h = "subbalakshmi";
var i = g.slice(0, 3);
var j = h.slice(h.length - 3, h.length);
var k = i.concat(j);

k = k.charAt(0).toUpperCase() + k.slice(1);
// k = k.charAt(k.length).toUpperCase() + k.slice(1);
console.log(k);

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase,
//  extract a specific part of the string,
//  concatenate it with another string

var l = "     jnanasaiande        ";
l = l.trim();
// l = l.charAt(0, l.indexOf("e")).toUpperCase() + l.slice(1);
var x = l.charAt(0).toUpperCase();
var y = l.charAt(l.length - 1).toUpperCase();
var z = l.slice(1, l.length - 2);
l = x + z + y;
console.log(l);
var m = l.slice(2, 7);
var n = a.concat(m);
console.log(n);

// 6."hello there , how are you " find the index of are word in the sentence
var o = "hello there , how are you ";
console.log(o.indexOf("are "));
