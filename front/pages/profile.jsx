import React from "react"

import Head from "next/head"
import AppLayout from "../components/AppLayout"

import NicknameEditForm from "../components/NicknameEditForm"
import FollowList from "../components/FollowList"

import styled from "styled-components"

const SpaceToHeader = styled.div`
  margin-top: 20px;
`

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "민준" },
    { nickname: "스프링" },
    { nickname: "제로초" },
    { nickname: "민준" },
    { nickname: "스프링" },
  ]
  const followingList = [
    { nickname: "제로초" },
    { nickname: "민준" },
    { nickname: "스프링" },
    { nickname: "제로초" },
    { nickname: "민준" },
    { nickname: "스프링" },
  ]
  return (
    <>
      <Head>
        <title>profile | NodeBird</title>
      </Head>
      <AppLayout>
        <SpaceToHeader>
          <NicknameEditForm />
          <FollowList header="팔로잉 목록" data={followingList} />
          <FollowList header="팔로워 목록" data={followerList} />
        </SpaceToHeader>
      </AppLayout>
    </>
  )
}

export default Profile
