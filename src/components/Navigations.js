import NavbarContainer from './Navigations/NavbarContainer'
import navbarLogo from './Navigations/navbar-logo.svg'

const Navigations = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <NavbarContainer logo={navbarLogo}/>
    </nav>
  )
}

export default Navigations