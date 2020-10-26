// Code your solutions in this file
function writeCards(people, reason){
    let thankYouCards = []
    for (let i = 0; i < people.length; i++) {
        thankYouCards.push(`Thank you, ${people[i]}, for the wonderful ${reason} gift!`);
    }
    return thankYouCards
}

function countDown(num) {
    while (num > 0) {
       console.log(num);
       num -= 1;
    }
    console.log(num)
}