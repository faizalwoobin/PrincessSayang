const quotes = {
    happy: [
        { text: "Seeing you happy, sayang, is like the world suddenly making sense. Every little sparkle in your eyes, every tiny curve of your smile—it fills my heart in ways I can't even put into words. I love watching you glow", image: "images/happy1.jpg" },
        { text: "Baby, do you know how much your happiness means to me? It’s like the sun shining through after the rain, warm and golden. No matter what happens, I want you to have more moments like this. And if I can be a part of making them happen, that would be my greatest joy", image: "images/happy2.jpg" },
        { text: "Hunny munchkin, every time you laugh, it’s like my heart learns a new way to beat. I never get tired of seeing you like this, so full of life, so effortlessly beautiful. If I could, I’d pause time just to stay in this moment with you forever.", image: "images/happy3.jpg" },
        { text: "Princess, your happiness is so contagious. I swear, when you're happy, the whole world feels lighter. I hope you always remember that you deserve this joy, not just in small doses, but endlessly.", image: "images/happy4.jpg" },
        { text: "Sayang, I know happiness can be fleeting, but in this moment, you are shining, and I need you to know—I will always, always love seeing you like this.", image: "images/happy5.jpg" },
        { text: "Baby, the way you light up when you're happy—it’s magic. If I could, I’d bottle up this feeling and give it to you whenever you needed a reminder of how wonderful life can be", image: "images/happy1.jpg" },
        { text: "Hunny, I hope you know that you being happy isn’t just something small to me. It’s everything. It makes my day, my week, my world", image: "images/happy2.jpg" },
        { text: "Princess, if I had to choose between having everything in the world or just seeing you happy every day, I’d choose you. Every time. Without hesitation.", image: "images/happy3.jpg" },
        { text: "Sayang, if happiness had a face, it would look like you right now. I wish I could capture this moment forever because seeing you like this is the purest kind of love I know.", image: "images/happy4.jpg" },
        { text: "Baby, never doubt for a second that you deserve to feel this way all the time. And even when the happiness fades, I’ll be right here, loving you just as much.", image: "images/happy5.jpg" }
    ],
    angry: [
        { text: "Sayang, I know you’re upset, and I just want you to know—it’s okay. You don’t have to explain yourself, you don’t have to be okay right now. Just know that I’m here, however you need me.", image: "images/angry1.jpg" },
        { text: "Baby, whatever’s making you angry, I want you to know that your feelings are valid. You’re allowed to be upset, to feel what you feel, and you don’t have to go through it alone.", image: "images/angry2.jpg" },
        { text: "Princess, I know it’s frustrating. I know it feels unfair. And I won’t tell you to just ‘let it go’—instead, I’ll stand beside you, ready to listen, ready to support you however you need.", image: "images/angry3.jpg" },
        { text: "Hunny, no matter how stormy your heart feels right now, I hope you never forget that you are still so loved, so cherished, and you don’t have to carry this frustration alone.", image: "images/angry4.jpg" },
        { text: "Sayang, I don’t want to fix or change how you feel. I just want to be here with you, however you need me, for as long as you need.", image: "images/angry5.jpg" },
        { text: "Baby, when you’re mad, it doesn’t make you any less lovable. It doesn’t make you any less wonderful. I love you in every mood, in every emotion.", image: "images/angry1.jpg" },
        { text: "Princess, I know you’re upset right now, and that’s okay. You don’t have to push it down or pretend you’re fine. I see you, I hear you, and I’m here.", image: "images/angry2.jpg" },
        { text: "Hunny, I wish I could take away whatever’s making you feel this way, but since I can’t, just know you don’t have to go through this alone.", image: "images/angry3.jpg" },
        { text: "Sayang, no matter what, I’m still here. I still love you. And when you’re ready, I’ll be right here to hold you through it.", image: "images/angry4.jpg" },
        { text: "Baby, you don’t have to talk about it if you don’t want to. But if you do, I’m all ears. No judgment, no pressure—just love.", image: "images/angry5.jpg" }
    ],
    sad: [
        { text: "Sayang, I know today feels heavy. But even in your quietest, saddest moments, I need you to know—you are still loved. You are still enough.", image: "images/sad1.jpg" },
        { text: "Baby, I wish I could take away your sadness, but since I can’t, I’ll just remind you that I love you. I’m here, I see you, and I’m not going anywhere.", image: "images/sad2.jpg" },
        { text: "Princess, you don’t have to carry this alone. Whatever it is, I’m here to hold it with you.", image: "images/sad3.jpg" },
        { text: "Hunny, even in sadness, you are still the person I love most in this world. Nothing changes that.", image: "images/sad4.jpg" },
        { text: "Sayang, you don’t have to be okay right now. Just let yourself feel, and I’ll be right here, holding space for you.", image: "images/sad5.jpg" },
        { text: "I wish I could hug you right now, my love. You don’t have to go through this alone.", image: "images/sad1.jpg" },
        { text: "Even in your sadness, you are the most beautiful person in my world, sayang.", image: "images/sad2.jpg" },
        { text: "Cry if you need to, baby. I’ll be here to wipe your tears away.", image: "images/sad3.jpg" },
        { text: "You’re stronger than you think, my princess. And I believe in you.", image: "images/sad4.jpg" },
        { text: "No matter how hard today feels, I will always stand beside you, hunny munchkin.", image: "images/sad5.jpg" }
    ],
    unmotivated: [
        { text: "Sayang, you are not lazy. You are not failing. You are doing your best, and that is enough.", image: "images/unmotivated1.jpg" },
        { text: "Baby, even when you feel stuck, you are still moving forward. I believe in you.", image: "images/unmotivated2.jpg" },
        { text: "Princess, your worth is not measured by your productivity. You are enough, always.", image: "images/unmotivated3.jpg" },
        { text: "Hunny, take a deep breath. You don’t have to figure everything out today.", image: "images/unmotivated4.jpg" },
        { text: "Sayang, even small steps count. You are doing better than you think.", image: "images/unmotivated5.jpg" },
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
        { text: "Even superheroes need to rest, hunny munchkin. And you’re my superhero.", image: "images/tired5.jpg" },
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
