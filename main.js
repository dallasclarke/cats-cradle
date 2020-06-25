
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
    let i = 0;
    let vowels = "aeiou";
    while (i <= 12) {
        if (vowels.includes(str[i])) {
            console.log(str[i])
        }
        i++;
    }
}
vowelsAgain("Regular expressions are for term 2.");
vowelsAgain("hello");

challengeBanner(3);

function 