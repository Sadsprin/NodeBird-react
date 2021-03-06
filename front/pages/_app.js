import React from "react"

import Head from "next/head"

import "antd/dist/antd.css"
import PropTypes from "prop-types"

// 모든 페이지의 공통인 부분을 처리할 수 있다.

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird
