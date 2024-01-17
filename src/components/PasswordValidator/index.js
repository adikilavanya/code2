import {useState} from 'react'

import {ParaContent, DivContent, HeadingContent} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const setisValid = event => {
    setPassword(event.target.value)
  }

  return (
    <DivContent>
      <HeadingContent>Password Validator</HeadingContent>
      <ParaContent>Check how strong and secure is your password</ParaContent>
      <input type="password" onChange={setisValid} />
      {password.length >= 8 ? (
        ''
      ) : (
        <ParaContent>Your password must be at least 8 characters</ParaContent>
      )}
    </DivContent>
  )
}

export default PasswordValidator
