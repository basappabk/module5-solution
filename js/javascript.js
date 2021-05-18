/* function test(){
    console.log(this)
    this.myname="basappa"
}

test();
console.log(window.myname)


//Function constructors

function Circle(radius){
    this.radius = radius;

//}

Circle.prototype.areaofcircile = function() {return Math.PI * Math.pow(this.radius,2)};

var myCircle = new Circle(10)

console.log(myCircle.areaofcircile())


//lieterals and objects and this

var literals = {
    rad: 10,
    areaofcircle: function(){
        var self=this;
        var increaseread = function(){
            this.rad=20;
        };
        increaseread();
        console.log(this.rad)
        console.log(this);
        return Math.PI * Math.pow(this.rad,2);
    }
};
console.log(literals.areaofcircle())


function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
  }
  
  var max = new Dog("Max", "Buddy");
  max.bark(); */


// Arrays

/* var arrays = new Array();

arrays[0]="Basappa"
arrays[1]="Bharamappa"
arrays[2]="Kodada"
arrays[3]=38
arrays[4]={"Profession":"Teaching"}
arrays[5]= function (number){
    console.log(number);
}

console.log(arrays)
arrays[5]("Hello")
for(var i=0;i<arrays.length;i++){
    console.log(arrays[i])
}

for (var name in arrays){
    console.log(arrays[name])
} */

/* function Hello(){

    this.textContent = "Submitted"
    var name = document.getElementById("fname").value;
    var message = "<h1>Hello " + name + "</h1>";
    console.log(message);
     document
    .getElementById("content")
    .textContent = message;

    document
    .getElementById("content")
    .innerHTML = message;

    if (name === "student"){
        var title = 
        document
        .querySelector("h1")
        .textContent;
        title += " & I am loving the Demonstration";

        document.querySelector("h1").textContent=title;
    }
}

document.querySelector("button").addEventListener("click",Hello);

 */


document.addEventListener("DOMContentLoaded",
    function (event){

        function Hello(){

            this.textContent = "Submitted"
            var name = document.getElementById("fname").value;
            var message = "<h1>Hello " + name + "</h1>";
            console.log(message);
        /*     document
            .getElementById("content")
            .textContent = message; */
        
            document
            .getElementById("content")
            .innerHTML = message;
        
            if (name === "student"){
                var title = 
                document
                .querySelector("h1")
                .textContent;
                title += " & I am loving the Demonstration";
        
                document.querySelector("h1").textContent=title;
            }
        }
        
        document.querySelector("button").addEventListener("click",Hello);
        document.querySelector("body")
        .addEventListener("mousemove",
            function (event){
                console.log(event.clientX)
                console.log(event.clientY)
            }
        );

    }
);