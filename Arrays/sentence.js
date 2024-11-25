let sentence = "Abdul Rashid Salim Salman Khan (pronounced [səlˈmɑːn xɑːn]; born 27 December 1965)[3] is an Indian actor, film producer, and television personality who works predominantly in Hindi films. In a career spanning over three decades, Khan has received numerous awards, including two National Film Awards as a film producer, and a Filmfare Award as an actor.[4] He is cited in the media as one of the most commercially successful actors of Indian cinema.[5] [6] Forbes has included Khan in listings of the highest-paid celebrities in the world, in 2015 and 2018, with him being the highest-ranked Indian in the latter year.[7][8][9][10] Khan has starred in the annual highest-grossing Hindi film of 10 individual years, the highest for any actor.";
function check(word) {
    if(word !== "") {
        return word;
    }
}
const words = sentence.split(/\s+/).filter(check);
console.log(words.length)