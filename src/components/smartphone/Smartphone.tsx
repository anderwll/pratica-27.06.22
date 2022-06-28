import React, { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import SmartphoneStyled from './SmartphoneStyled'
import SmartphoneTela from './SmartphoneTela'

function Smartphone() {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const contador = useRef(0)

  useEffect(() => {
    contador.current += 1
  })

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <SmartphoneStyled>
      <SmartphoneTela>
        <Grid item xs={4} md={4}>
          <h1>useRef()</h1>
          <h3>Digitado na input:</h3>
          <p>{name}</p>
          <h3>Contador:</h3>
          <p>{contador.current}</p>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
            type="text"
          />
          <button type="button" onClick={focusInput}>
            ENVIAR
          </button>
        </Grid>
      </SmartphoneTela>
    </SmartphoneStyled>
  )
}

export default Smartphone
