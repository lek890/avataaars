import * as React from 'react'
import { render } from 'react-dom'
import { TestComp } from './TestComp'

const rootEl = document.getElementById('app')

render(<TestComp />, rootEl)
