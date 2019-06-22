import {useState, useEffect} from "react";


function useLocalStorageState(key, initialVal) {
  //Make piece of state based off of value in localStorage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  });

  //useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorageState;