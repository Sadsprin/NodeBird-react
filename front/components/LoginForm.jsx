import React, { useCallback, useState } from "react"
import { Form, Input, Button } from "antd"
import Link from "next/link"
import styled from "styled-components"
import PropTypes from "prop-types"

const ButtonWrapper = styled.div`
  margin-top: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [signInLoading, setSignInLoading] = useState(false)

  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onSubmitForm = useCallback(() => {
    console.log(id, password)
    setIsLoggedIn(true)
  }, [id, password])

  return (
    <>
      <Form onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input name="user-password" value={password} onChange={onChangePassword} required />
        </div>
        {/* 
          declared object({}) is not same declaring object({})
          {} === {} => false
          
          inline-styling(<div style={{marginTop: 10;}}></div>) is re-rendering when LoginForm component is called.
          So, We use styled-component or useMemo of React for preventing this problem

          react only redraw page that change element
        */}
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={signInLoading}>
            로그인
          </Button>
          <Link href="/signup">
            <Button>
              <a>회원가입</a>
            </Button>
          </Link>
        </ButtonWrapper>
      </Form>
    </>
  )
}

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm
