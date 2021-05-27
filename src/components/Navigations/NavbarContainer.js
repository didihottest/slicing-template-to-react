import CollapseNavigation from './CollapseNavigation'

const NavbarContainer = ({logo}) => {
  return (
    <div class="container">
      <a class="navbar-brand" href="#page-top"><img src={logo} alt="..." /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
                    <i class="fas fa-bars ms-1"></i>
      </button>
      <CollapseNavigation />
    </div>
  )
}

export default NavbarContainer