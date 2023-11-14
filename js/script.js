// scrivere in console numeri da 1 a 100
// per i multipli di 3 deve uscire Fizz
// per i multipli di 5 deve uscire Buzz
// per i multipli di 3 e 5 deve uscire FizzBuzz


for (let index = 1; index <= 100; index++) {
  
   
    if (index % 3 === 0 && index % 5 === 0) {
        console.log('FizzBuzz')
    } else if (index % 5 === 0) {
        console.log('Buzz')
    } else if (index % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(index)
    }

    let mainElement = document.querySelector('main')

    let containerElement = document.createElement('div');
    containerElement.className = 'container';

    let sectionElement = document.createElement('section');
    sectionElement.innerHTML = index;

    containerElement.appendChild(sectionElement);
    mainElement.appendChild(containerElement)

}



