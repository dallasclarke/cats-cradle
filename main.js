
function challengeBanner (n) {
    console.log(`##### Challenge ${n} #####`);
}

challengeBanner(1);

function vowelsOnly(str) {
    let i = 0;
    let vowels = "aeiou";
    while (i < str.length) {
        if (vowels.includes(str[i])) {
            console.log(str[i])
        }
        i++;
    }
    
}
vowelsOnly("Regular expressions are for term 2.");

challengeBanner(2);

function vowelsAgain (str) {
    let count = 0;
    let vowels = "aeiou";
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i]) && count < 5) {
            console.log(str[i]);
            count = count + 1;
        }
        i++;
    }
}
vowelsAgain("Regular expressions are for term 2.");
vowelsAgain("hello");

challengeBanner(3);

function everyThird (str) {
    let i = 2;

    while (i < str.length) {
        console.log(str[i]);

        i = i + 3;
    }
}
everyThird("I am the alfalfa and the omlette");

challengeBanner(4);

function firstFour (str, start) {
    let count = 0;
    let i = start;
    while (i < str.length) {
        if (count < 4) {
            console.log(str[i]);
            count = count + 1;
        }
        i++;
    }
}

firstFour("oh hi, I didn't see you there. Welcome.", 4);
firstFour("oh hi, I didn't see you there. Welcome.", 36)

challengeBanner(5);

function indexOfU (str) {
    let i = 0;
    while (i < str.length) {
        if (str[i] === 'u') {
            console.log(i)
        }
        i++;
    }
}
indexOfU("You picked the wrong house, bub.");

challengeBanner(6);

function firstIndexOfU (str) {
    let i = 0;
    while (i < str.length) {
        if (str[i] === "u") {
            console.log(i)
            return;
        }
        i++;
    }
}
firstIndexOfU("You picked the wrong house, bub.");

challengeBanner(7);

function indexofU2 (str) {
    let found = false;
    let i = 0;
    while (i< str.length) {
        if (str[i] === 'u' && found === false) {
            console.log(i)

            found = true;
        }
        i++;
    }
    if (found === false) {
        console.log(-1)
    }
}
indexofU2('You picked the wrong house, bub.')
indexofU2("I'm Canadian.")