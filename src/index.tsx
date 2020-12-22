import * as React from 'react'
import { render } from 'react-dom'
// import { TestComp } from './avatar'

const rootEl = document.getElementById('app')

export const TestComp: React.FC = () => {
  return (
    <>
      <p>hello dvssss2 323 23</p>
      {/* <Avatar
        avatarStyle={AvatarStyle.Circle}
        topType="LongHairStraight"
        accessoriesType="Blank"
        hairColor="BrownDark"
        facialHairType="Blank"
        clotheType="BlazerShirt"
        eyeType="Default"
        eyebrowType="Default"
        mouthType="Default"
        skinColor="Light"
      /> */}
    </>
  )
}

render(<TestComp />, rootEl)
