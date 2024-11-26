import { Dispatch, SetStateAction, useState } from 'react'

export interface useToogleTypes {
  state: boolean
  setStateTrue: () => void
  setStateFalse: () => void
  toggle: () => void
  setState: Dispatch<SetStateAction<boolean>>
}


export const useToggle = (): useToogleTypes => {
  const [state, setState] = useState(false);

  const setStateTrue = () => setState(true);

  const setStateFalse = () => setState(false);

  const toggle = () => setState(!state)

  return { state, setStateTrue, setStateFalse, toggle, setState }
}
