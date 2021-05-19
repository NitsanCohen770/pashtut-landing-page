import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>דרך ארץ 68, חריש</strong>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        תפריט
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
