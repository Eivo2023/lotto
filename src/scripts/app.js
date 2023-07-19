const btnPlayRef = document.querySelector('#playBtn');
const inputRefs = [...document.querySelectorAll('input[id^="digit"]')];

//deklaruję funkcję i przekazuję do niej parametry a później te dane wyjmujemy po wywołaniu funkcji
const isAllNotEmpty = (nodes) => nodes.every((node) => node.value.trim() !== ''); // (nodes) o tylko nazwa zmiennej
const isItegers = (nodes) => nodes.every((node) => Number.isInteger(Number(node.value)) ); //deklaracja funkcji pod nazwą const 'nazwa'
const convertToIntegers = (nodes) => nodes.map((node) => parseInt(node.value)); // funkcja która zwraca intigery
const isInRange = (digits) => digits.every((digit) => digit >= 1 && digit <= 49);
// => digits.every((digit) => digit >= 1 && digit <= 49); - to co jest po strzałce wywołuje funkcję
const isNotRedundant = (digits) => new Set(digits).size === digits.lenght; //tworzy set, który usuwa duplikaty, size to rozmiar seta (tablicy w tym przypadku)
btnPlayRef.addEventListener('click', function(event) {
    // console.log(event.target);
    // console.log(this);
    if (isAllNotEmpty(inputRefs)) {
        if (isItegers(inputRefs)) {
            const userDigits = convertToIntegers(inputRefs);
            // console.log('ok')
            if (isInRange(userDigits)) { //userDigits wpada do zmiennej digits
                if (isNotRedundant(userDigits)) {

                } else {
                    console.log('liczby się powtarzają ziom')
                }
            } else {
                console.log('liczby są po za zakresem 1-49')
            }
        } else {
            console.log('liczby nie są liczbami')
        }
    } else {
        console.log('coś jest puste')
    }

})
