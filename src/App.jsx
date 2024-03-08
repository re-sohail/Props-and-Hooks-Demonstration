import {React, useState} from 'react'
import Button from './Components/Button/Button'
import Component1 from './Components/Component1/Component1'
import RenderComponent from './Components/RenderComponent/RenderComponent'

let button = [
  'Comp1', 'Comp2', 'Comp3', 'Comp4', 'Comp5', 'Comp6', 'Comp7', 'Comp8'
]

function App() {
  const [isSelected, setIsSelected] = useState(0)
  return (
    <>
    <Button button = {button} isSelected ={isSelected} setIsSelected ={setIsSelected}/>
    <Component1 />
    <RenderComponent index = {isSelected} />
    </>
  )
}

export default App