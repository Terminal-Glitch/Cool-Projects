async function hacker(){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      let randomNumber = getRandomInt(1, 7);

    const output = document.getElementById('output')


    function print(message) {
        // remove any trailing dots from the message text so the blinking span is the only dots
        const textOnly = String(message).replace(/\.{1,}$/, '');

        const p = document.createElement('div');
        p.className = 'line';
        p.textContent = textOnly;
        output.appendChild(p);

        // create dot span and reserve width so text doesn't jump
        const dotSpan = document.createElement('span');
        dotSpan.className = 'dots';
        dotSpan.style.display = 'inline-block';
        dotSpan.style.width = '3ch';
        dotSpan.style.marginLeft = '0.2ch';
        p.appendChild(dotSpan);

        // blinking states
        const states = ['', '.', '..', '...'];
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % states.length;
            dotSpan.textContent = states[idx];
        }, 500);

        return p;
    }



    let msg1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hacking...")
        }, (randomNumber = getRandomInt(1,7)) * 1000);
    })
    console.log(randomNumber)
    print(msg1);
    

    let msg2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Reading your Files...")
        }, (randomNumber = getRandomInt(1,7))* 1000);
    })
    console.log(randomNumber)
    print(msg2);


    let msg3 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Password files Detected...")
        }, (randomNumber = getRandomInt(1,7)) * 1000);
    })
    console.log(randomNumber)
    print(msg3);
    

    let msg4 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sending all passwords and personal files to server...")
        }, (randomNumber = getRandomInt(1,7)) * 1000);
    })
    console.log(randomNumber)
    print(msg4);


    let msg5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cleaning up...")
        }, (randomNumber = getRandomInt(1,7)) * 1000);
    })
    console.log(randomNumber)
    print(msg5);


}



hacker()