var name="sai";
undefined
var age=32;
undefined
var weight=127.4;
undefined
alert(name);
undefined
alert(name,age,weight);
undefined
console.log(name);
VM1392:1 sai
undefined
console.log(name+age+weight);
VM1504:1 sai32127.4
undefined
alert(name+" "+age+" "+weight);
undefined
var a=99;
undefined
var b=2.8;
undefined
var c=5+4+(2*3);
undefined
alert(c)
undefined
var d='a'*4;
undefined
console.log(d);
VM2036:1 NaN
undefined
console.log('2'*3);
VM2094:1 6
undefined
console.log(Math.floor(Math.randon()*10+1));
VM2295:1 Uncaught TypeError: Math.randon is not a function
    at <anonymous>:1:29
(anonymous) @ VM2295:1
console.log(Math.floor(Math.random()*10+1));
VM2342:1 2
undefined
console.log(Math.floor(Math.PI));
VM2477:1 3
undefined
console.log(Math.ceil(4.3));
VM2579:1 5
undefined
var bob=null;
undefined
console.log(bob);
VM2686:1 null
undefined
var i=2;
undefined
var j=2;
undefined
if(i==j)
    console.log("similar");
VM2864:2 similar
undefined
if(i!=j)
    console.log("different");
undefined
else
VM2970:1 Uncaught SyntaxError: Unexpected token 'else'
if(i!=j)
    console.log("different");else{console.log("same");}
VM3083:2 same
undefined
if("web development"){
    console.log("yes");else{console.log("no");}
VM3299:2 Uncaught SyntaxError: Unexpected token 'else'
if("web development")
    console.log("yes");else{console.log("no");}
VM3306:2 yes
undefined
if(0)
    console.log("yes");else
        console.log("no");
VM3421:3 no
var s="Bob Client";
undefined
var fName=s.substring(0,s.indexOf(" "));
undefined
console.log(fName);
VM3659:1 Bob
undefined
var len=s.length;
undefined
console.log(len);
VM3746:1 10