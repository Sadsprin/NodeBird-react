import React, { useCallback, useState } from "react"
import useEvent from "../hooks/useEvent"
import styled from "styled-components"

import Head from "next/head"
import AppLayout from "../components/AppLayout"
import { Form, Input, Typography, Checkbox, Button } from "antd"

const { Text } = Typography

const InlineDiv = styled.div`
  display: inline-block;
  margin-top: 10px;
`

const Signup = () => {
  const [id, onChangeId] = useEvent("")
  const [password, onChangePassword] = useEvent("")
  const [nickname, onChangeNickname] = useEvent("")
  const [passwordError, setPasswordError] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState("")

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
    },
    [password]
  )

  const [term, setTerm] = useState("")
  const [termError, setTermError] = useState("")

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked)
    setTermError(false)
  }, [])
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log(id, nickname, password)
  }, [password, passwordCheck, term])
  return (
    <>
      <Head>
        <title>signup | NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">id</label>
            <br />
            <Input placeholder="ID" required onChange={onChangeId} value={id}></Input>
          </div>
          <div>
            <label htmlFor="user-nickname">nickname</label>
            <br />
            <Input placeholder="NICKNAME" required onChange={onChangeNickname} value={nickname}></Input>
          </div>
          <div>
            <label htmlFor="user-password">pasword</label>
            <br />
            <Input type="password" placeholder="PASSWORD" required onChange={onChangePassword} value={password}></Input>
          </div>
          <div>
            <label htmlFor="user-checkpassword">passwordCheck</label>
            <br />
            <Input type="password" placeholder="passwordCheck" required onChange={onChangePasswordCheck} value={passwordCheck}></Input>
            {passwordError && <Text type="warning"> 비밀번호가 일치하지 않습니다.</Text>}
          </div>
          <InlineDiv>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              약관 ~~
            </Checkbox>
            {termError && <Text type="warning">약관에 동의하셔야 합니다.</Text>}
          </InlineDiv>
          <InlineDiv style={{ float: "right" }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </InlineDiv>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup
