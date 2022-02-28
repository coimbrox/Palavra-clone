document.addEventListener("DOMContentLoaded", () => {
  createSquares();

  let guessedWords = [[]]
  let avaliableSpace = 1;

  const keys = document.querySelectorAll('.keyboard-row button')

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key")

      updateGuessedWords(letter)
    }
  }

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length
    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr()

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter)

      const avaliableSpaceEl = document.getElementById(String(avaliableSpace))
      avaliableSpace = avaliableSpace + 1

      avaliableSpaceEl.textContent = letter;
    }
  }

  function createSquares() {
    const gameBoard = document.getElementById("board")

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);

    }

  }








})