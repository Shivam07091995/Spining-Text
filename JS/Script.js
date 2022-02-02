const angletoradian = (angle)=>{
    return angle * (Math.PI / 180); //to convert angle from degree to radius
};

const radius = 100;
const diameter = radius*2;

const circle = document.querySelector('#text');
circle.style.width = `${diameter}px`; // 200px
circle.style.height = `${diameter}px`; //200px

const text1 = circle.innerText;
const character = text1.split(''); // to spilt the text
circle.innerText = null;

let angle = -90; //get the angle by which the element is rotated
const deltaangle = 360 / character.length;

//foreach char in string javascript

character.forEach((char, index) => { 
    const charelement = document.createElement('span'); // create span using createElement 
    charelement.innerText = char;
    const xpos = radius * Math.cos(angletoradian(angle)); //Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
    const ypos = radius * Math.sin(angletoradian(angle)); //Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

    const transform = `translate(${xpos}px, ${ypos}px)`; // Css animation using javascript
    const rotate = `rotate(${index * deltaangle}deg)`;

    charelement.style.transform = `${transform} ${rotate}`;

    angle += deltaangle; //The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable.
    circle.appendChild(charelement); // The appendChild() method appends a node as the last child of a node.
});  