const textBox = document.getElementById('text');
const choicesContainer = document.getElementById('choices');
const nextButtonContainer = document.getElementById('next-button');
const background = document.getElementById('background');
const character = document.getElementById('character');
let currentScene = 0;

function displayText(text) {
    // 改行文字を <br> タグに変換
    const formattedText = text.replace(/\n/g, '<br>');
    textBox.innerHTML = formattedText;
}

function displayChoices(choices) {
    choicesContainer.innerHTML = '';
    nextButtonContainer.innerHTML = '';
    choices.forEach(choice => {
        const choiceButton = document.createElement('div');
        choiceButton.textContent = choice.text;
        choiceButton.className = 'choice';
        choiceButton.onclick = () => {
            currentScene = choice.nextScene;
            playScene();
        };
        if (choice.text === "次のページへ") {
            nextButtonContainer.appendChild(choiceButton);
        } else {
            choicesContainer.appendChild(choiceButton);
        }
    });
}

function playScene() {
    const scene = story[currentScene];
    displayText(scene.text);
    displayChoices(scene.choices);
    background.style.backgroundImage = `url(${scene.background})`;
    character.style.backgroundImage = `url(${scene.character})`;
}

window.onload = () => {
    playScene();
};
