document.addEventListener("DOMContentLoaded", () => {
  //also in local storege
  let currentWordIndex = 0;
  let guessedWords = [[]]
  let availableSpace = 1;
  // let word;
  let guessWordCount = 0;

  const words = ["sweet", "onion", "shoes", "heavy", "couch"];
  let currentWord = words[currentWordIndex];

  initLocalStorage();
  initHelpModal();
  initStatsModal();
  createSquares();
  addKeyboardClicks();
  getNewWord();





  function initLocalStorage() {
    const storedCurrentWordIndex = window.localStorage.getItem('currentWordIndex')
    if (!storedCurrentWordIndex) {
      window.localStorage.setItem('currentWordIndex', currentWordIndex)
    } else {
      currentWordIndex = Number(storedCurrentWordIndex)
    }



  }

  const keys = document.querySelectorAll('.keyboard-row button')

  // function getNewWord() {
  //   fetch(
  //     `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=5&lettersMax=5`,
  //     {
  //       method: "GET",
  //       headers: {
  //         'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  //         'x-rapidapi-key': '4b4d126e83msh2c8fd438e60c14dp16d2f0jsn656a9f8d779b'
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((res) => {
  //       word = res.word;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // }

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length
    return guessedWords[numberOfGuessedWords - 1]
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr()

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter)

      const availableSpaceEl = document.getElementById(String(availableSpace));
      availableSpace = availableSpace + 1

      availableSpaceEl.textContent = letter;
    }
  }


  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter);

    if (!isCorrectLetter) {
      return "rgb(139,0,0)";
    }

    const letterInThatPosition = word.charAt(index);
    const isCorrectPosition = letter === letterInThatPosition

    if (isCorrectPosition) {
      return "rgb(83, 141,78)";
    }
    return "rgb(181,159,59)";

  }


  function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 5) {
      window.alert("Palavra precisa ter 5 letras!")
    }

    const currentWord = currentWordArr.join("");


    fetch(
      `https://wordsapiv1.p.rapidapi.com/words/${currentWord}`,
      {
        method: "GET",
        headers: {
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'x-rapidapi-key': '4b4d126e83msh2c8fd438e60c14dp16d2f0jsn656a9f8d779b'
        },
      }
    ).then((res) => {
      if (!res.ok) {
        throw Error()
      }

      const firstLetterId = guessWordCount * 5 + 1;
      const interval = 200;

      currentWordArr.forEach((letter, index) => {
        setTimeout(() => {
          const tileColor = getTileColor(letter, index);

          const letterId = firstLetterId + index;
          const letterEl = document.getElementById(letterId);
          letterEl.classList.add("animate__flipInX");
          letterEl.style = `background-color:${tileColor};border-color:${tileColor}`

        }, interval * index)
      });

      guessWordCount += 1;

      if (currentWord === word) {
        window.alert("Parabéns!")
      }
      if (guessedWords.length === 6) {
        window.alert(`Você perdeu! A palavra correta era ${word}.`)
      }
      guessedWords.push([])
    }).catch(() => {
      window.alert("Palavra não é conhecida")
    })



  }

  function createSquares() {
    const gameBoard = document.getElementById("board")

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);

    }

  }


  function handleDeleteLetter() {
    const currentWordArr = getCurrentWordArr();
    const removedLetter = currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }


  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key")


      if (letter === 'enter') {
        handleSubmitWord()
        return;
      }


      if (letter === "del") {
        handleDeleteLetter();
        return;
      }
      updateGuessedWords(letter)
    }
  }

  function addKeyboardClicks() {
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
      keys[i].addEventListener("click", ({ target }) => {
        const key = target.getAttribute("data-key");

        if (key === "enter") {
          handleSubmitWord();
          return;
        }

        if (key === "del") {
          handleDelete();
          return;
        }

        updateGuessedLetters(key);
      });
    }
  }

  function initHelpModal() {
    const modal = document.getElementById("help-modal");

    // Get the button that opens the modal
    const btn = document.getElementById("help");

    // Get the <span> element that closes the modal
    const span = document.getElementById("close-help");

    // When the user clicks on the button, open the modal
    btn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  function updateStatsModal() {
    const currentStreak = window.localStorage.getItem("currentStreak");
    const totalWins = window.localStorage.getItem("totalWins");
    const totalGames = window.localStorage.getItem("totalGames");

    document.getElementById("total-played").textContent = totalGames;
    document.getElementById("total-wins").textContent = totalWins;
    document.getElementById("current-streak").textContent = currentStreak;

    const winPct = Math.round((totalWins / totalGames) * 100) || 0;
    document.getElementById("win-pct").textContent = winPct;
  }

  function initStatsModal() {
    const modal = document.getElementById("stats-modal");

    // Get the button that opens the modal
    const btn = document.getElementById("stats");

    // Get the <span> element that closes the modal
    const span = document.getElementById("close-stats");

    // When the user clicks on the button, open the modal
    btn.addEventListener("click", function () {
      updateStatsModal();
      modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }



});