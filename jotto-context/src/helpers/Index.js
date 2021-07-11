export function getLetterMatchCount(guessedWord, secretWord) {
  const seceretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  return [...seceretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
