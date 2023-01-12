import logo from './assets/logo.png'

function Header() {
  return (
    <nav className='navbar bg-white mb-4 p-0'>
        <div className='container'>
            <a className='navbar-brand' href='/'>
            <div className='d-flex'>
                <img src={logo} alt="logo" className='mr-2' />
                <div>ProjectMgmt</div>
            </div>    
            </a>
        </div>
    </nav>
  )
}

export default Header