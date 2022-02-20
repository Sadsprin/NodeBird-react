import React, { useState } from "react"
import Link from "next/link"

import styled from "styled-components"
import { Menu, Input, Row, Col } from "antd"
import { ShopOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons"
import LoginForm from "./LoginForm"
import UserProfile from "./UserProfile"
import "antd/dist/antd.css"

import PropTypes from "prop-types"

// 특정 페이지의 공통부분을 처리

const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`

const MenuConfig = [
  {
    nav: "/",
    key: "홈",
    icon: <ShopOutlined />,
  },
  {
    nav: "/profile",
    key: "프로필",
    icon: <UserOutlined />,
  },
  {
    component: <SearchInput />,
  },
  {
    nav: "/signup",
    key: "회원가입",
    icon: <KeyOutlined />,
  },
]

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Menu mode="horizontal">
        {MenuConfig.map(({ nav, key, icon, component }) => {
          if (component) {
            return (
              <Menu.Item key={key} icon={icon}>
                {component}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item key={key} icon={icon}>
              <Link href={nav}>{key}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
      {/* 
        xs: extra-small
        sm: small
        md: medium
        lg: large
        col의 그리드는 24가 100%이며 숫자에 따라 %가 달라짐
      */}
      <Row gutter={8}>
        {/* 
            target property
                _blank: 새로운 윈도우나 탭에서 오픈
                _self: 현재 프레임에서 오픈
                _parent: 부모프레임에서 오픈
                _top: 윈도우 전체에서 오픈

            _blank의 경우 주소를 바꿔치기할 가능성이 존재한다
            또한 링크된 페이지는 링크를 건 페이지와 같은 프로세스를
            통해서 실행됩니다. 그러므로 높은 부하를 유발하는 Js가 
            되고 있으면 퍼포먼스가 떨어질 수 있다

            rel property
                noopener: window.opener를 이용하여 링크를 건 페이지를 참조 할 수 없게 됩니다. => 누가 열었는지
                noreferrer: 다른 페이지로 이동할 때, 링크를 건 페이지의 주소 등의 브라우저가 Referer 헤더로 => 어떤 페이지에서 열었는지
                서 송신되지 않습니다.
                        */}
        <Col xs={24} sm={6} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} sm={12} md={12}>
          {children}
        </Col>
        <Col xs={24} sm={6} md={6} offset={6}></Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
