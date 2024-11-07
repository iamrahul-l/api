const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// List of movie quotes
const quotes = [
    { quote: "May the Force be with you.", movie: "Star Wars" },
    { quote: "I'll be back.", movie: "The Terminator" },
    { quote: "Here's looking at you, kid.", movie: "Casablanca" },
    { quote: "You can't handle the truth!", movie: "A Few Good Men" },
    { quote: "I see dead people.", movie: "The Sixth Sense" },
    { quote: "Hasta la vista, baby.", movie: "Terminator 2: Judgment Day" },
    { quote: "To infinity and beyond!", movie: "Toy Story" },
    { quote: "Houston, we have a problem.", movie: "Apollo 13" },
    { quote: "E.T. phone home.", movie: "E.T. the Extra-Terrestrial" },
    { quote: "Why so serious?", movie: "The Dark Knight" },
    { quote: "I'm the king of the world!", movie: "Titanic" },
    { quote: "You talkin' to me?", movie: "Taxi Driver" },
    { quote: "Life is like a box of chocolates.", movie: "Forrest Gump" },
    { quote: "I feel the need... the need for speed.", movie: "Top Gun" },
    { quote: "Bond. James Bond.", movie: "Dr. No" },
    { quote: "You had me at 'hello'.", movie: "Jerry Maguire" },
    { quote: "Keep your friends close, but your enemies closer.", movie: "The Godfather Part II" },
    { quote: "I'm gonna make him an offer he can't refuse.", movie: "The Godfather" },
    { quote: "Here's Johnny!", movie: "The Shining" },
    { quote: "You’ve got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?", movie: "Dirty Harry" },
    { quote: "I am Groot.", movie: "Guardians of the Galaxy" },
    { quote: "This is Sparta!", movie: "300" },
    { quote: "It's alive! It's alive!", movie: "Frankenstein" },
    { quote: "Shaken, not stirred.", movie: "Goldfinger" },
    { quote: "Nobody puts Baby in a corner.", movie: "Dirty Dancing" },
    { quote: "I solemnly swear that I am up to no good.", movie: "Harry Potter and the Prisoner of Azkaban" },
    { quote: "The first rule of Fight Club is: you do not talk about Fight Club.", movie: "Fight Club" },
    { quote: "Elementary, my dear Watson.", movie: "The Adventures of Sherlock Holmes" },
    { quote: "I drink your milkshake!", movie: "There Will Be Blood" },
    { quote: "I am Iron Man.", movie: "Iron Man" },
    { quote: "Roads? Where we're going, we don't need roads.", movie: "Back to the Future" },
    { quote: "Say 'hello' to my little friend!", movie: "Scarface" },
    { quote: "I'll have what she's having.", movie: "When Harry Met Sally" },
    { quote: "I volunteer as tribute!", movie: "The Hunger Games" },
    { quote: "Just keep swimming.", movie: "Finding Nemo" },
    { quote: "I'm Mary Poppins, y'all!", movie: "Guardians of the Galaxy Vol. 2" },
    { quote: "Inconceivable!", movie: "The Princess Bride" },
    { quote: "They may take our lives, but they'll never take our freedom!", movie: "Braveheart" },
    { quote: "It's not who I am underneath, but what I do that defines me.", movie: "Batman Begins" },
    { quote: "With great power comes great responsibility.", movie: "Spider-Man" },
    { quote: "Hakuna Matata!", movie: "The Lion King" },
    { quote: "You complete me.", movie: "Jerry Maguire" },
    { quote: "You is kind. You is smart. You is important.", movie: "The Help" },
    { quote: "Magic Mirror on the wall, who is the fairest one of all?", movie: "Snow White and the Seven Dwarfs" },
    { quote: "After all, tomorrow is another day!", movie: "Gone with the Wind" },
    { quote: "I’m having an old friend for dinner.", movie: "The Silence of the Lambs" },
    { quote: "You either die a hero, or you live long enough to see yourself become the villain.", movie: "The Dark Knight" },
    { quote: "I wish I knew how to quit you.", movie: "Brokeback Mountain" }
];

// Endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Quotes API is running on http://localhost:${PORT}`);
});
