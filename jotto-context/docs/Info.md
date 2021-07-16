# Jotto-Context

# Redux Thunk

- More flexibility for action creators.
- Return function instead of action.
  - Thunk = function that returns a function.
- Can dispatch multiple actions.
- Can access current stete.

## guessWord acion creator

- Always dispatch GUESS_WORD.
- If word is correct, alo dispatch `CORRECT_GUESS`.
- Let us access success piece of state
  - Determining whether to dispatch `CORRECT_GUESS`.
- store.dispatch(): takes an action creator
- store .getState(): returns state object and useful for assertions.
- Create a store with initial state. Will contain `secreWord`.
- Dispatch axction creaator. `store.dispatch(guessWord())`.
- Check state.USe `Jest.toEqual()` to test state object as a whole.

## Integration Testing

- Testing action creators and reducer together.
- Create a new file: src/integration.test.js
- Would seperate into many files for larger app.
