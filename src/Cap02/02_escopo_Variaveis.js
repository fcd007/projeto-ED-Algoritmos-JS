let movie = 'Lord of the Rings';
//var movie = 'Batman vs Superman';
function starWarsFan() {
    const movie = 'Star Wars';
    return movie;
}

function marvelFan() {
    const movie = 'The Avengers';
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' +  phrase);

    if (isFan) {
        let phrase = 'Initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: ' + phrase);
    }

    phrase = 'For The Alliance!';
    console.log('After if: ' + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();