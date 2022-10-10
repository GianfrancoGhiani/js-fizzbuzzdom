/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”
al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
const wrapper = document.getElementById('onetohundred'); //identify the container square
let txt = ''; //number inside the cell
for (let i=1; i<=100; i++){
    const d3 = i % 3;   //left over of i / 3
    const d5 = i % 5;   //left over of i / 5
    if ((!d3) && (!d5)){        //! not gives boolean return, if it has inside a 0 it turns into True value
        txt = 'FizzBuzz';
    } else if (!d3){
        txt = 'Fizz';
    } else if (!d5){
        txt = 'Buzz';
    } else{
        txt = i;
    }
    let cell = document.createElement('div'); //creation of a simple element
    cell.classList.toggle('cell');  
    wrapper.append(cell);   //stick the element to his parent
    let p = document.createElement('p'); //creation of a simple element
    p.innerText = txt;
    cell.append(p);  //stick the element to his parent

    if (txt == 'FizzBuzz'){     // == examinate and compare the content of 2 things, does not compare type of elements done by ===
        p.classList.add('green');
    } else if (txt == 'Fizz'){
        p.classList.add('blue');
    } else if (txt == 'Buzz'){
        p.classList.add('lime');
    }
}
