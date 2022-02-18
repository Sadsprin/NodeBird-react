import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { Card, Avatar, Button } from "antd"

const UserProfile = ({ setIsLoggedIn }) => {
  const logOut = useCallback(() => {
    setIsLoggedIn(false)
  }, [])
  return (
    <Card
      // 배열로 jsx 쓸때는 무조건 key를 붙여 써야함
      actions={[
        <div key="twit">
          짹쨱
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>Zc</Avatar>} title="minjun" />
      <Button onClick={logOut}>로그아웃</Button>
    </Card>
  )
}

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}
export default UserProfile
