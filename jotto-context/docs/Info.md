# Jotto-Context

# Redux Thunk

- More flexibility for action creators.
- Return function instead of action.
  - Thunk = function that returns a function.
- Can dispatch multiple actions.
- Can access current stete.

## guessWord acion creator

- Always dispatch GUESS_WORD.
- If word is correct, alo dispatch CORRECT_GUESS.
- Let us access success piece of state
  - Determining whether to dispatch CORRECT_GUESS.
