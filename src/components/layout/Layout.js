import React from 'react'
import LayoutStyle from './Layout.module.css'

const Layout = (props) => {
  return (
    <div>
        <main className={LayoutStyle.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout