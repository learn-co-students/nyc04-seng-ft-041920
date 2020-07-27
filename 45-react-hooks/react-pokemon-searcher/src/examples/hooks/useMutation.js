import { useState } from 'react'

// default state for our custom hook
const defaultState = {
  isLoading: false,
  isError: false,
  error: null,
  data: null
}

// this hook is useful for giving us a consistent set of states to work with for all fetches
// takes in a fetch fn as an argument
// the fetch fn MUST return a promise so we can call .then on it
export const useMutation = fetcher => {
  const [fetchInfo, setFetchInfo] = useState(defaultState)

  const runFetch = () => {
    // set loading state and clear old values
    setFetchInfo({ ...defaultState, isLoading: true })

    // run whatever fetch function we were given
    fetcher()
      // if fetch succeeds, set data and clear old values
      .then(data => setFetchInfo({ ...defaultState, data }))
      // if fetch fails, set error state and clear old values
      .catch(error => setFetchInfo({ ...defaultState, isError: true, error }))
  }

  // return a callback so we can run fetch, from outside the fn
  // and also the fetch info to expose this hook's internal state
  return [runFetch, fetchInfo]
}