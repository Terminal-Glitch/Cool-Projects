let container = document.querySelector(".chat-window");

function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

const responses = [
    "Yes, definitely.",
    "No way.",
    "Ask again later.",
    "Signs point to yes.",
    "Absolutely not.",
    "Probably.",
    "Not in a million years.",
    "Most likely.",
    "Unclear, try again.",
    "Without a doubt.",
    "Don't count on it.",
    "It is certain.",
    "My sources say yes.",
    "Very doubtful.",
    "Reply hazy, try again.",
    "Cannot predict now.",
    "Better not tell you now.",
    "Yes – but only if you’re lucky.",
    "Absolutely.",
    "Nope.",
    "Chances are slim.",
    "Sure, why not?",
    "Ask a friend instead.",
    "Maybe… or maybe not.",
    "I have no idea.",
    "It’s a secret.",
    "All signs point to yes.",
    "All signs point to no.",
    "Yes, but only on Thursdays.",
    "Not today.",
    "Yes… but regret will follow.",
    "No, and don’t ask why.",
    "It’s complicated.",
    "Possibly.",
    "Concentrate and ask again.",
    "My answer is: 42.",
    "Yes… in another universe.",
    "Definitely not in this reality.",
    "Perhaps, if pigs fly.",
    "Only if cats agree.",
    "Think about it.",
    "Maybe, maybe not.",
    "Absolutely yes, with style.",
    "Not unless the stars align.",
    "Without a doubt, probably.",
    "Impossible to tell.",
    "Yes, but I’m feeling lazy.",
    "No, because reasons.",
    "Yes, but quietly.",
    "Negative.",
    "Affirmative.",
    "Why do you even ask?",
    "Perhaps, I’m tired.",
    "Only on alternate Tuesdays.",
    "Yes, but beware.",
    "No, and that’s final.",
    "It depends on your mood.",
    "Yes, with caution.",
    "No, obviously not.",
    "Yes, but in your dreams.",
    "Maybe, or maybe your cat knows.",
    "Sure, if you say please.",
    "No, unless you bribe me.",
    "Yes, but the universe disagrees.",
    "I wouldn’t count on it.",
    "Yes, yes, yes!",
    "Not really.",
    "Yes… maybe?",
    "Ask again, I wasn’t listening.",
    "Yes, but silently.",
    "No, but it sounds nice.",
    "Probably not.",
    "Definitely.",
    "Yes, but who cares?",
    "No, but don’t feel bad.",
    "Yes, but just for fun.",
    "Nope, sorry.",
    "Perhaps… but I might lie.",
    "Yes, but don’t tell anyone.",
    "No, unless you sing a song.",
    "Yes, but only in a parallel dimension.",
    "Maybe, consult a squirrel.",
    "Yes, if you believe hard enough.",
    "No, but keep trying.",
    "Yes, but cautiously.",
    "Maybe, but that’s risky.",
    "Yes… but the cat disagrees.",
    "Probably yes, probably not.",
    "No, but it’s a secret.",
    "Yes, but it’s complicated.",
    "Only if unicorns exist.",
    "Yes, but first you must dance.",
    "No, but the penguins say yes.",
    "Yes, eventually.",
    "No, forever.",
    "Yes, but with dramatic flair.",
    "Maybe, but I’m napping.",
    "Yes, if the sun shines.",
    "No, if the moon is awake.",
    "Yes, but quietly, very quietly.",
    "Only if the coffee is strong.",
    "Yes, but the answer might be wrong.",
    "No, unless you whisper.",
    "Yes, but keep it mysterious.",
    "Maybe, check your socks.",
    "Yes, but the answer may bite.",
    "No, but it’s fun to think about.",
    "Yes, but cautiously optimistic.",
    "Probably, if you ask nicely.",
    "No, because the stars are sleeping.",
    "Yes, and you’ll like it.",
    "Maybe, or maybe a llama knows.",
    "Yes, if you roll a dice.",
    "Definitely… maybe.",
    "Absolutely, but only slightly.",
    "Yes, but the universe disagrees.",
    "Possibly, consult your neighbor.",
    "Yes, but the answer is in binary.",
    "No, but it rhymes with yes.",
    "Yes… but with jazz hands.",
    "Maybe, but I’m just a bot.",
    "Yes, but silently nod.",
    "Ask again, I’m debugging.",
    "No, because the keyboard says so.",
    "Yes, if gravity allows.",
    "Maybe, if you blink thrice.",
    "Yes, but the answer tastes like chocolate.",
    "No, but the answer smells like vanilla."
];

function printBot(text){
    let div = document.createElement("div");
    div.className = "message bot";
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function printUser(text){
    if(!text.trim()) return;
    let div = document.createElement("div");
    div.className = "message user";
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function storeUserInput(){
    let inputElement = document.getElementById("userInput");
    const inputValue = inputElement.value;
    if(!inputValue.trim()) return;
    printUser(inputValue);
    inputElement.value = '';
    let randomResponse = getRandomElement(responses);
    setTimeout(() => {
        printBot(randomResponse);
    }, 700); // small delay to feel like "thinking"
}

function main(){
    let inputBox = document.getElementById("userInput");
    if(inputBox) inputBox.setAttribute('autocomplete', 'off');

    document.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            storeUserInput();
        }
    });
}

main();
