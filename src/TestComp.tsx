import * as React from 'react'
import { AvatarNew, AvatarStyle } from './avatar'
import Avatar from './avatar/index copy'
// import Avatar, { AvatarStyle } from './avatar'
import { allOptions } from './options'
import { OptionContextProvider } from './options/OptionContextNew'

export const TestComp = () => {
  return (
    <>
      <Avatar
        avatarStyle={AvatarStyle.Circle}
        // topType="LongHairStraight"
        // accessoriesType="Blank"
        // hairColor="BrownDark"
        // facialHairType="Blank"
        // clotheType="BlazerShirt"
        // eyeType="Default"
        // eyebrowType="Default"
        // mouthType="Default"
        // skinColor="Light"
      />
      <p>hello dvssss2 323 23</p>
      <OptionContextProvider>
        <AvatarNew avatarStyle={AvatarStyle.Circle}></AvatarNew>
      </OptionContextProvider>
    </>
  )
}
