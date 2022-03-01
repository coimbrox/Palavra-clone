document.addEventListener("DOMContentLoaded", () => {
  // also in local storage
  let currentWordIndex = 0;
  let guessedWordCount = 0;
  let availableSpace = 1;
  let guessedWords = [[]];

  const words = ["banir",
    "vergo",
    "pitam",
    "opine",
    "fervi",
    "sarne",
    "abres",
    "sopre",
    "gaive",
    "feria",
    "vista",
    "guiem",
    "pesga",
    "gebas",
    "nasco",
    "undai",
    "prosa",
    "vites",
    "treno",
    "xuate",
    "lenga",
    "sibal",
    "sacio",
    "ervai",
    "vurmo",
    "turvo",
    "enrio",
    "pelma",
    "jimba",
    "judia",
    "chaem",
    "bunhe",
    "epoxi",
    "mujio",
    "acres",
    "agmis",
    "botes",
    "libau",
    "feito",
    "finca",
    "clipa",
    "gonda",
    "ilham",
    "ripeu",
    "gotas",
    "balco",
    "alugo",
    "jater",
    "mirza",
    "mutis",
    "divos",
    "amoes",
    "tigas",
    "asnem",
    "psico",
    "peumo",
    "atrio",
    "rutei",
    "bucle",
    "bolai",
    "mujil",
    "taxie",
    "etusa",
    "tempo",
    "hipta",
    "treva",
    "felpa",
    "ptdob",
    "ozeia",
    "zupas",
    "fusor",
    "moera",
    "mfeca",
    "plano",
    "apure",
    "valie",
    "bilsa",
    "piton",
    "munha",
    "garfe",
    "salte",
    "supro",
    "piroa",
    "pauto",
    "vedar",
    "pasto",
    "infla",
    "voraz",
    "bisel",
    "ciado",
    "jamil",
    "fulbe",
    "ruiam",
    "duipa",
    "emula",
    "efuso",
    "chiam",
    "tamir",
    "frial",
    "cuite",
    "zuias",
    "irdes",
    "pango",
    "rueis",
    "unhar",
    "surim",
    "monda",
    "heida",
    "virus",
    "afole",
    "jogar",
    "gomil",
    "miufa",
    "zular",
    "pites",
    "mecia",
    "abius",
    "rixam",
    "acuem",
    "gutai",
    "calvo",
    "touca",
    "quera",
    "acrol",
    "dimas",
    "repta",
    "agues",
    "buzio",
    "vicem",
    "folas",
    "zenas",
    "lerda",
    "sambo",
    "ronha",
    "tolei",
    "palhe",
    "miaos",
    "pilha",
    "difos",
    "etnos",
    "sovar",
    "cofre",
    "nicam",
    "eruca",
    "tubas",
    "pareo",
    "muafo",
    "empis",
    "fasto",
    "finar",
    "cirba",
    "pixas",
    "beias",
    "dulia",
    "torna",
    "tasgo",
    "miroe",
    "luica",
    "docam",
    "funga",
    "solea",
    "lacni",
    "negra",
    "orbas",
    "sinda",
    "elson",
    "fungo",
    "lusmi",
    "toire",
    "situa",
    "puder",
    "cedas",
    "ontem",
    "ozena",
    "grani",
    "runas",
    "pitou",
    "jamie",
    "flash",
    "aliso",
    "lista",
    "ingre",
    "frisa",
    "henas",
    "mojas",
    "docar",
    "crega",
    "menor",
    "maori",
    "paiol",
    "luxem",
    "sedia",
    "ipuca",
    "forca",
    "julio",
    "ultor",
    "frole",
    "falem",
    "trema",
    "multo",
    "gomia",
    "ilona",
    "lisca",
    "suomi",
    "mujes",
    "doure",
    "seloa",
    "rebus",
    "misga",
    "creda",
    "feudo",
    "guine",
    "venus",
    "ponhe",
    "mures",
    "guano",
    "guazo",
    "fique",
    "puser",
    "garis",
    "brugo",
    "telho",
    "vexam",
    "tenor",
    "reida",
    "nicol",
    "orfeu",
    "enxia",
    "nasim",
    "berca",
    "tesar",
    "eloar",
    "tomba",
    "pitas",
    "lonja",
    "meola",
    "elbia",
    "sirfo",
    "umbro",
    "flume",
    "ajole",
    "travo",
    "cmlix",
    "intua",
    "etnia",
    "botar",
    "hilos",
    "carne",
    "sirgo",
    "risca",
    "exila",
    "auste",
    "pruca",
    "linda",
    "hemal",
    "sufla",
    "guipa",
    "eudia",
    "leais",
    "junho",
    "vagiu",
    "triem",
    "curia",
    "bojas",
    "mulai",
    "tonis",
    "palmo",
    "padre",
    "freno",
    "lousa",
    "tines",
    "xurda",
    "alceu",
    "rubeo",
    "ileus",
    "louve",
    "rafou",
    "boane",
    "apres",
    "sulfa",
    "venha",
    "huila",
    "acule",
    "pleas",
    "noise",
    "milos",
    "alijo",
    "prema",
    "baixe",
    "toxia",
    "gilas",
    "nerds",
    "zinco",
    "munjo",
    "argon",
    "espia",
    "bacis",
    "velho",
    "borda",
    "eduza",
    "zorta",
    "pinco",
    "acuos",
    "campi",
    "vagil",
    "gaipo",
    "erina",
    "eblis",
    "taipo",
    "oxida",
    "rublo",
    "japix",
    "chate",
    "furco",
    "leoni",
    "decio",
    "cotar",
    "decoa",
    "meias",
    "lanes",
    "amide",
    "itapu",
    "brial",
    "velar",
    "dumba",
    "dilam",
    "hines",
    "usmai",
    "furto",
    "dirua",
    "rodem",
    "minda",
    "bruta",
    "ficha",
    "nivel",
    "bitas",
    "matou",
    "chabu",
    "exito",
    "mabus",
    "ornem",
    "luzir",
    "ocume",
    "dinar",
    "bater",
    "soute",
    "jogas",
    "brume",
    "vibre",
    "arnis",
    "coine",
    "gabro",
    "lorfa",
    "hidro",
    "fines",
    "sacti",
    "jinga",
    "zacos",
    "cabes",
    "morus",
    "juste",
    "husim",
    "prive",
    "ateco",
    "crise",
    "laive",
    "femba",
    "bujao",
    "nobil",
    "beija",
    "docas",
    "tiade",
    "cugar",
    "mulsa",
    "veira",
    "tildo",
    "moeta",
    "lepta",
    "gelou",
    "guita",
    "torva",
    "eudor",
    "boeta",
    "pulex",
    "curve",
    "boite",
    "jodie",
    "mufti",
    "bulam",
    "lapou",
    "lutei",
    "inuma",
    "plica",
    "biter",
    "colme",
    "brame",
    "uivem",
    "jires",
    "macos",
    "ufpel",
    "cagom",];
  let currentWord = words[currentWordIndex];

  initLocalStorage();
  initHelpModal();
  initStatsModal();
  createSquares();
  addKeyboardClicks();
  loadLocalStorage();

  function initLocalStorage() {
    const storedCurrentWordIndex =
      window.localStorage.getItem("currentWordIndex");
    if (!storedCurrentWordIndex) {
      window.localStorage.setItem("currentWordIndex", currentWordIndex);
    } else {
      currentWordIndex = Number(storedCurrentWordIndex);
      currentWord = words[currentWordIndex];
    }
  }

  function loadLocalStorage() {
    currentWordIndex =
      Number(window.localStorage.getItem("currentWordIndex")) ||
      currentWordIndex;
    guessedWordCount =
      Number(window.localStorage.getItem("guessedWordCount")) ||
      guessedWordCount;
    availableSpace =
      Number(window.localStorage.getItem("availableSpace")) || availableSpace;
    guessedWords =
      JSON.parse(window.localStorage.getItem("guessedWords")) || guessedWords;

    currentWord = words[currentWordIndex];

    const storedBoardContainer = window.localStorage.getItem("boardContainer");
    if (storedBoardContainer) {
      document.getElementById("board-container").innerHTML =
        storedBoardContainer;
    }

    const storedKeyboardContainer =
      window.localStorage.getItem("keyboardContainer");
    if (storedKeyboardContainer) {
      document.getElementById("keyboard-container").innerHTML =
        storedKeyboardContainer;

      addKeyboardClicks();
    }
  }

  function resetGameState() {
    window.localStorage.removeItem("guessedWordCount");
    window.localStorage.removeItem("guessedWords");
    window.localStorage.removeItem("keyboardContainer");
    window.localStorage.removeItem("boardContainer");
    window.localStorage.removeItem("availableSpace");
  }

  function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let i = 0; i < 30; i++) {
      let square = document.createElement("div");
      square.classList.add("animate__animated");
      square.classList.add("square");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square);
    }
  }

  function preserveGameState() {
    window.localStorage.setItem("guessedWords", JSON.stringify(guessedWords));

    const keyboardContainer = document.getElementById("keyboard-container");
    window.localStorage.setItem(
      "keyboardContainer",
      keyboardContainer.innerHTML
    );

    const boardContainer = document.getElementById("board-container");
    window.localStorage.setItem("boardContainer", boardContainer.innerHTML);
  }

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updateGuessedLetters(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(availableSpace);

      availableSpaceEl.textContent = letter;
      availableSpace = availableSpace + 1;
    }
  }

  function updateTotalGames() {
    const totalGames = window.localStorage.getItem("totalGames") || 0;
    window.localStorage.setItem("totalGames", Number(totalGames) + 1);
  }

  function showResult() {
    const finalResultEl = document.getElementById("final-score");
    finalResultEl.textContent = "Coimletter  - Você Venceu";

    const totalWins = window.localStorage.getItem("totalWins") || 0;
    window.localStorage.setItem("totalWins", Number(totalWins) + 1);

    const currentStreak = window.localStorage.getItem("currentStreak") || 0;
    window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
  }

  function showLosingResult() {
    const finalResultEl = document.getElementById("final-score");
    finalResultEl.textContent = `Coimletter  - Hoje não é o seu dia de sorte!`;

    window.localStorage.setItem("currentStreak", 0);
  }

  function clearBoard() {
    for (let i = 0; i < 30; i++) {
      let square = document.getElementById(i + 1);
      square.textContent = "";
    }

    const keys = document.getElementsByClassName("keyboard-button",);

    for (var key of keys) {
      key.disabled = true;
    }
  }

  function getIndicesOfLetter(letter, arr) {
    const indices = [];
    let idx = arr.indexOf(letter);
    while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(letter, idx + 1);
    }
    return indices;
  }

  function getTileClass(letter, index, currentWordArr) {
    const isCorrectLetter = currentWord
      .toUpperCase()
      .includes(letter.toUpperCase());

    if (!isCorrectLetter) {
      return "incorrect-letter";
    }

    const letterInThatPosition = currentWord.charAt(index);
    const isCorrectPosition =
      letter.toLowerCase() === letterInThatPosition.toLowerCase();

    if (isCorrectPosition) {
      return "correct-letter-in-place";
    }

    const isGuessedMoreThanOnce =
      currentWordArr.filter((l) => l === letter).length > 1;

    if (!isGuessedMoreThanOnce) {
      return "correct-letter";
    }

    const existsMoreThanOnce =
      currentWord.split("").filter((l) => l === letter).length > 1;

    // is guessed more than once and exists more than once
    if (existsMoreThanOnce) {
      return "correct-letter";
    }

    const hasBeenGuessedAlready = currentWordArr.indexOf(letter) < index;

    const indices = getIndicesOfLetter(letter, currentWord.split(""));
    const otherIndices = indices.filter((i) => i !== index);
    const isGuessedCorrectlyLater = otherIndices.some(
      (i) => i > index && currentWordArr[i] === letter
    );

    if (!hasBeenGuessedAlready && !isGuessedCorrectlyLater) {
      return "correct-letter";
    }

    return "incorrect-letter";
  }

  function updateWordIndex() {
    console.log({ currentWordIndex });
    window.localStorage.setItem("currentWordIndex", currentWordIndex + 1);
  }

  async function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    const guessedWord = currentWordArr.join("");

    if (guessedWord.length !== 5) {
      return;
    }

    try {

      const firstLetterId = guessedWordCount * 5 + 1;

      localStorage.setItem("availableSpace", availableSpace);

      const interval = 200;
      currentWordArr.forEach((letter, index) => {
        setTimeout(() => {
          const tileClass = getTileClass(letter, index, currentWordArr);
          if (tileClass) {
            const letterId = firstLetterId + index;
            const letterEl = document.getElementById(letterId);
            letterEl.classList.add("animate__flipInX");
            letterEl.classList.add(tileClass);

            const keyboardEl = document.querySelector(`[data-key=${letter}]`);
            keyboardEl.classList.add(tileClass);
          }

          if (index === 4) {
            preserveGameState();
          }
        }, index * interval);
      });

      guessedWordCount += 1;
      window.localStorage.setItem("guessedWordCount", guessedWordCount);

      if (guessedWord === currentWord) {
        setTimeout(() => {
          const okSelected = window.confirm("Muito Bem!");
          if (okSelected) {
            clearBoard();
            showResult();
            updateWordIndex();
            updateTotalGames();
            resetGameState();
          }
          return;
        }, 1200);
      }

      if (guessedWords.length === 6 && guessedWord !== currentWord) {
        setTimeout(() => {
          const okSelected = window.confirm(
            `Desculpe! Você não tem mais tentativas, A Palavra é "${currentWord.toUpperCase()}".`
          );
          if (okSelected) {
            clearBoard();
            showLosingResult();
            updateWordIndex();
            updateTotalGames();
            resetGameState();
          }
          return;
        }, 1200);
      }

      guessedWords.push([]);
    } catch (_error) {
      window.alert("Essa Palavra não é Reconhecida!");
    }
  }

  function handleDelete() {
    const currentWordArr = getCurrentWordArr();

    if (!currentWordArr.length) {
      return;
    }

    currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(availableSpace - 1);

    lastLetterEl.innerHTML = "";
    availableSpace = availableSpace - 1;
  }

  function addKeyboardClicks() {
    const keys = document.querySelectorAll(".keyboard-row button",);
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