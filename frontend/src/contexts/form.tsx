/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-filename-extension */
// Dependencies
import React, { FC, ReactElement, useState, createContext } from 'react'

// Interfaces
interface iFormContext {
  onChange(e: any): any
  values: any
}

interface iProps {
  children: ReactElement
  initialValues: object
}

export const FormContext = createContext<iFormContext>({
  onChange: () => null,
  values: {}
})

const FormProvider: FC<iProps> = ({
  children,
  initialValues = {}
}): ReactElement => {
  const [state, setState] = useState(initialValues)

  function onChange(e: any) {
    const {
      target: { name, value }
    } = e

    if (name && value) {
      setState(state => ({
        ...state,
        [name]: value
      }))
    }
  }

  const context = {
    onChange,
    values: state
  }

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

export default FormProvider
