import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

// import components
import Header from "./components/Header"
import Body from "./components/Body"

export default function Page({ dispatch }) {
  useLayoutEffect(() => {
  }, [])

  return <div>
    <Header/>
    <Body/>
  </div>
}

Page.displayName = 'HomePage'
Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
