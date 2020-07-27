import { useState, useEffect } from 'react'

// default state for our custom hook
const defaultState = {
  isLoading: true,
  isError: false,
  error: null,
  data: null
}

// in-memory cache (could also replace with localStorate)
const cache = {}

// this hook is useful for giving us a consistent set of states to work with for all fetches
// it also lets us cache previous fetches so we don't make more requests than necessary
// takes in a fetch fn and a cache key (string) as an argument
// the fetch fn MUST return a promise so we can call .then on it
export const useFetch = (cacheKey, fetcher) => {

  const [fetchInfo, setFetchInfo] = useState(defaultState)

  useEffect(() => {
    if (cacheKey in cache) {
      // if we've already cached the data, use the cached version
      setFetchInfo({ ...defaultState, isLoading: false, data: cache[cacheKey] })
    } else {
      // otherwise, run the fetch

      // set loading state and clear old values
      setFetchInfo({ ...defaultState, isLoading: true })

      // run whatever fetch function we were given
      fetcher()
        // if fetch succeeds, set data and clear old values
        .then(data => {
          cache[cacheKey] = data
          setFetchInfo({ ...defaultState, isLoading: false, data })
        })
        // if fetch fails, set error state and clear old values
        .catch(error => setFetchInfo({ ...defaultState, isLoading: false, isError: true, error }))
    }
  }, [cacheKey])

  // return a callback so we can run fetch, from outside the fn
  // and also the fetch info to expose this hook's internal state
  return fetchInfo
}