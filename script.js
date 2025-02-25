const quotes = {
    happy: [
        { text: "Seeing you happy makes my whole world brighter, my love.", image: "images/happy1.jpg" },
        { text: "Your smile is my favorite thing in the universe, princess.", image: "images/happy2.jpg" },
        { text: "Hunny munchkin, your laughter is the sweetest melody to my ears.", image: "images/happy3.jpg" },
        { text: "You deserve all the happiness in the world, my baby.", image: "images/happy4.jpg" },
        { text: "Your joy is contagious, and I’m lucky to have you, sayang.", image: "images/happy5.jpg" }
    ],
    angry: [
        { text: "It’s okay to be angry, my love. I’m always here to hold you tight.", image: "images/angry1.jpg" },
        { text: "Even in your stormiest moments, you are my sunshine, sayang.", image: "images/angry2.jpg" },
        { text: "No matter how upset you are, I will love you just the same.", image: "images/angry3.jpg" },
        { text: "Take a deep breath, my princess. I'm here with you, always.", image: "images/angry4.jpg" },
        { text: "I’m not going anywhere, hunny. You can always lean on me.", image: "images/angry5.jpg" }
    ],
    sad: [
        { text: "I wish I could hug you right now, my love. You don’t have to go through this alone.", image: "images/sad1.jpg" },
        { text: "Even in your sadness, you are the most beautiful person in my world, sayang.", image: "images/sad2.jpg" },
        { text: "Cry if you need to, baby. I’ll be here to wipe your tears away.", image: "images/sad3.jpg" },
        { text: "You’re stronger than you think, my princess. And I believe in you.", image: "images/sad4.jpg" },
        { text: "No matter how hard today feels, I will always stand beside you, hunny munchkin.", image: "images/sad5.jpg" }
    ],
    unmotivated: [
        { text: "You’ve already come so far, sayang. Keep going, I believe in you!", image: "images/unmotivated1.jpg" },
        { text: "Even if you take a small step, my love, it's still progress.", image: "images/unmotivated2.jpg" },
        { text: "You are so capable, my baby. You just need to see it too.", image: "images/unmotivated3.jpg" },
        { text: "I’ll always be cheering for you, my princess, no matter what.", image: "images/unmotivated4.jpg" },
        { text: "You don’t have to be perfect, hunny. Just do your best.", image: "images/unmotivated5.jpg" }
    ],
    tired: [
        { text: "I know you’re tired, my love. Let me be your comfort.", image: "images/tired1.jpg" },
        { text: "You’ve worked so hard, sayang. I appreciate you so much.", image: "images/tired2.jpg" },
        { text: "No matter how exhausted you feel, I’ll always be here to support you, baby.", image: "images/tired3.jpg" },
        { text: "Take a moment for yourself, my princess. You deserve it.", image: "images/tired4.jpg" },
        { text: "Even superheroes need to rest, hunny munchkin. And you’re my superhero.", image: "images/tired5.jpg" }
    ]
};

function showQuotes(feeling) {
    let randomQuote = quotes[feeling][Math.floor(Math.random() * quotes[feeling].length)];
    document.getElementById("quote-text").textContent = randomQuote.text;
    document.getElementById("quote-image").src = randomQuote.image;
    
    document.getElementById("feelings-container").style.display = "none";
    document.getElementById("quote-container").style.display = "block";
    document.getElementById("quote-container").style.opacity = "1";
}

function resetPage() {
    document.getElementById("quote-container").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("quote-container").style.display = "none";
        document.getElementById("feelings-container").style.display = "flex";
    }, 500);
}
