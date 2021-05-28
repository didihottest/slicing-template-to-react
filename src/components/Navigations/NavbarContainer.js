import CollapseNavigation from './CollapseNavigation'

const NavbarContainer = ({logo}) => {
  return (
    <div className="container">
      <a className="navbar-brand" href="#page-top"><img src={logo} alt="..." /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
                    <i className="fas fa-bars ms-1"></i>
      </button>
      <CollapseNavigation />
    </div>
  )
}

export default NavbarContainer