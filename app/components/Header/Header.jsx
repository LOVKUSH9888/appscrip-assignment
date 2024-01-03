import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import MainHeader from './MainHeader/MainHeader'
import Menu from './Menu/Menu'
import "./Header.css"

const Header = () => {
  return (
    <>
    {/* Top Header */}
    <TopHeader/>
    {/* Main Header */}
    <MainHeader/>
    {/* Menu */}
    <Menu/>
    </>
  )
}

export default Header