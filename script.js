'use strict';

//slice
//splice
//reverse
//join
//concat
//at
//foreach
//map
//filter



// const numbers = [2,4,6,8,-4, 0, 10,12,14,16,18];

// // let ertnishnebi=[]


// const ertnishnebi = numbers.map((val, i) => val * 2)

// console.log(ertnishnebi.filter((value)=>value > 0))
 
// console.log(ertnishnebi.filter((value)=>value!==undefined))

// const ind=numbers.reverse().indexOf(14)

// console.log(ind)
// console.log(numbers.splice(ind, 3))

// console.log(numbers.splice(ind, 3))

// const container = document.getElementById('container');


// const insertElements = () =>{
//     const elements = ['div','p','h1','h2','h3','h4','h5','h6','span','a','button','input','img'];

//     elements.forEach(element=>{
//         const div = document.createElement('div');
//         div.classList.add('element');

//         div.innerHTML=`
//         <${element}>${element}lol</${element}>
//         `;

//         container.appendChild(div);
//     });

// }

// insertElements();

// J.doe (John Doe)

// const uppercaser = (str, fullStr = false) => {

//     const firstLetter=str.charAt(0).toUpperCase()

//     if(fullStr){
//         return firstLetter + str.slice(1)
//     }

//     return firstLetter
// }

// const nameConverter = (user) => {
//     const n=user.firstName
//     const l=user.lastName

//     const signature=`${uppercaser(n)}.${l}`

//     const fullPart=`(${uppercaser(n,true)} ${uppercaser(l, true)})`

//     return signature + ' ' + fullPart
// }



// const userNames= [
//     {
//         id:1,
//         'firstName':'john',
//         'lastName':'doe',
//         point: 50
//     },
//     {
//         id:2,
//         'firstName':'jane',
//         'lastName':'doe',
//         point: 120
//     },
//     {
//         id:3,
//         'firstName':'jim',
//         'lastName':'doe',
//         point: 80
//     },
//     {
//         id:4,
//         'firstName':'jimmy',
//         'lastName':'doe',
//         point: 40
//     },
//     {
//         id:5,
//         'firstName':'emzara',
//         'lastName':'doe',
//         point: 51200
//     },
//     {
//         id:6,
//         'firstName':'leonidas',
//         'lastName':'doe',
//         point: 20
//     },
//     {
//         id:7,
//         'firstName':'staliniosebi',
//         'lastName':'doe',
//         point: 90
//     },
// ]




// const ascended = userNames.sort((a, b) => {
//     if (a.firstName.length > b.firstName.length) return -1;
//     if (a.firstName.length < b.firstName.length) return 1;
//     return 0; // This ensures that elements with the same length stay in their original order
// });


// console.log(ascended.map(item => item.firstName))




















//Number
//example of execution: Number('123') => 123
// console.log(Number('123.123123.123'))


//ParseInt
//example of execution: parseInt('123') => 123
// console.log(parseInt('123.123'))


//ParseFloat
//example of execution: parseFloat('123.123') => 123.123
// console.log(parseFloat('123.123.123.234'))






//isNaN
//example of execution: isNaN('123') => false
// console.log(isNaN(Number('123.121312.123')))












//isFinite
//example of execution: isFinite('123') => true
// console.log(isFinite(10/0))


//Math.sqrt
//example of execution: Math.sqrt(9) => 3
// console.log(Math.sqrt(625))

// const myMath={

//     sqrt: (num) => {
//         return num ** 0.5
//     },

//     toSquare: (num) => {
//         return num ** 2
//     }

// }

// console.log(myMath.toSquare(10))

// import greet from 'matematikosi.js'

// console.log(greet('john'))

// console.log(matematika)

// Math.max
// example of execution: Math.max(1,2,3,4,5,6,7,8,9,10) => 10
// console.log(Math.max(1,2,3,4,5,6,7,8,90,10))


//Math.min
//example of execution: Math.min(1,2,3,4,5,6,7,8,9,10) => 1
// console.log(Math.min(1,2,3,4,5,6,7,8,9,10))


//Math.floor
//example of execution: Math.floor(1.9) => 1
// console.log(Math.floor(1.9))


//Math.ceil
//example of execution: Math.ceil(1.1) => 2


// Math.round
// example of execution: Math.round(1.5) => 2
// console.log(Math.round(1.4))


//Math.random
// console.log(Number((Math.random() * 100).toString().split('.')[0]))


//Math.PI
//example of execution: Math.PI => 3.141592653589793
// console.log(Math.PI)


//Math.toFixed
//example of execution: (1.123456).toFixed(2) => 1.12
// console.log((Math.PI).toFixed(5))

//isEven
//example of execution: isEven(2) => true

// const matematikosi = {
//     isEven: (num) => {
//         return num % 2 === 0
//     },

//     isOdd: (num) => {
//         return num % 2 !== 0
//     }
// }


// console.log(matematikosi.isEven(2), matematikosi.isOdd(2))

//isOdd
//example of execution: isOdd(2) => false









//numeric seperators
//example of execution: 1_000_000 => 1000000







//Max safe integer
//example of execution: Number.MAX_SAFE_INTEGER => 900719925

//Min safe integer
//example of execution: Number.MIN_SAFE_INTEGER => -900719925

// console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)









//BigInt
//example of execution: BigInt(9007199254740991) => 9007199254740991n









//now date
//example of execution: new Date() => 2021-09-20T14:02:22.000Z
// console.log(new Date())

//date of oct 07 2000 00:00:00
// console.log(new Date(2000, 10, 7))

//date of oct 07 2000 17:20:20
//example of execution: new Date(2000, 10, 7, 17, 20, 20) => 2000-11-07T14:20:20.000Z
// console.log(new Date(2000, 10, 7, 17, 20, 20))

//future date
//example of execution: new Date('2022-01-01') => 2022-01-01T00:00:00.000Z
// console.log(new Date('2022-01-01'))

//get full year
//example of execution: new Date().getFullYear() => 2021
// console.log(new Date(2000, 10, 7, 17, 20, 20).getFullYear())

//get month
//example of execution: new Date().getMonth() => 8
// console.log(new Date().getFullYear())

//get day
//example of execution: new Date().getDay() => 1
// console.log(new Date().getDay())

//get hours
//example of execution: new Date().getHours() => 17





//set timeout
//example of execution: setTimeout(()=>console.log('hello'), 1000) => hello

//set interval
//example of execution: setInterval(()=>console.log('hello'), 1000) => hello


// console.log(new Date().getMilliseconds())
// setTimeout(()=> console.log(new Date().getMilliseconds()), 1000) 

// const inter=setInterval(()=> {
//     console.log(new Date().getMilliseconds())
// }, 1000)


// setTimeout(()=> {
//     clearInterval(inter)
// }, 10000)



// ავიგაცია,
//  ლოკალსთორიჯი, 
//   ინფუთევის ვალიდაციის მიხედვით რაღაცეების გამოჩენა და სტილის შეცვლა, 
//    ვალიდაცია და რეგექსი,
//     ინფუთების კუსტომიზირება,
//      ჩექბოქსის ინფუთი
// requests







const button = document.getElementById('navigation-button');
const nameInput = document.getElementById('input');


button.addEventListener('click', () => {
    window.location.href = 'index2.html'
});

nameInput.addEventListener('input', (event) => {
    localStorage.setItem('name', event.target.value)
});


const nameValue = localStorage.getItem('name');


if (nameValue) {
    nameInput.setAttribute('value', nameValue)
}




const inputElement = document.getElementById('input');
const validatedStateElement = document.getElementById('name-validated-state');
const errorStateElement = document.getElementById('name-errored-state');


inputElement.addEventListener('input', (event) => {
    const value=event.target.value

    const regex = /^[^0-9]*$/;


    if(value.length<2 || !regex.test(value)) {
        errorStateElement.style.display='block'
        validatedStateElement.style.display='none'
    }else if(value.length>=2 && regex.test(value)){
        errorStateElement.style.display='none'
        validatedStateElement.style.display='block'
    }

    if(value.length===0){
        errorStateElement.style.display='none'
        validatedStateElement.style.display='none'
    }

});



const radioValues=document.getElementsByName('radio')


radioValues.forEach(rad => {
   rad.addEventListener('click', (event) => {
   localStorage.setItem('radio', event.target.value)
   })
});


console.log(localStorage.getItem('radio'))

