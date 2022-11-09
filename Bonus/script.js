const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        const element = `<div class="box box-fixbuzz">FizzBuzz</div>`;
        container.innerHTML += element;
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
        const element = `<div class="box box-fizz">Fizz</div>`;
        container.innerHTML += element;
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
        const element = `<div class="box box-buzz">Buzz</div>`;
        container.innerHTML += element;
    } else {
        console.log(i);
        const element = `<div class="box">${i}</div>`;
        container.innerHTML += element;
    }
}