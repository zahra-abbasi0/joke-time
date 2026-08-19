async function getData() {
    const url = "https://official-joke-api.appspot.com/random_joke";

    const response = await fetch(url);
    const data = await response.json();

    const jokeSetup = document.getElementById("joke-setup");
    const jokePunchline = document.getElementById("joke-punchline");

    jokeSetup.textContent = data.setup;
    jokePunchline.textContent = data.punchline;
}

const anotherJoke = document.getElementById("get-joke-btn");

anotherJoke.addEventListener("click", getData);


const floatingEmojis = document.querySelectorAll(".floating-emoji");

floatingEmojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {

        for (let i = 0; i < 20; i++) {

            const laughEmoji = document.createElement("span");

            laughEmoji.textContent = i % 2 === 0 ? "😂" : "😄";
            laughEmoji.classList.add("laughing-emoji");

            // Spread across the whole page
            laughEmoji.style.left = `${Math.random() * 100}vw`;

            // Start from the top
            laughEmoji.style.top = "-40px";

            // Slightly different falling distance
            laughEmoji.style.setProperty(
                "--fall",
                `${90 + Math.random() * 70}px`
            );

            document.body.appendChild(laughEmoji);

            setTimeout(() => {
                laughEmoji.remove();
            }, 1500);
        }
    });
});


const copyButton = document.getElementById("copy-btn");

copyButton.addEventListener("click",()=>{

    const setUp = document.getElementById("joke-setup").textContent;
    const punchline = document.getElementById("joke-punchline").textContent;

    const joke = `${setUp}\n ${punchline}`;
    navigator.clipboard.writeText(joke);

    copyButton.textContent= "✅ Copied!";

    setTimeout(() => {
        copyButton.textContent="📋 Copy";
    }, 2000);
})


const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click",()=>{
   
    const setUp = document.getElementById("joke-setup").textContent;
    const punchline = document.getElementById("joke-punchline").textContent;

    const joke = {
        setUp: setUp,
        punchline: punchline
    }

    let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
    favorite.push(joke);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    saveButton.textContent = "❤️ Saved!";

    setTimeout(()=>{
        saveButton.textContent = "🤍 Save Favorite";
    },2000)
});