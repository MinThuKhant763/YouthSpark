import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
      <nav className='fixed w-full'>
          <header > 
              <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> 
                  <div className="flex h-16 items-center justify-between">
                      <div className="md:flex md:items-center md:gap-12">
                          <div className={ "block text-teal-600 dark:text-teal-600 " }>
                              <span className="sr-only">Home</span>
                              <div className='text-center text-sky-500 mt-4'>
                                  <i class="fa-brands fa-react fa-2xl"></i>
                                  <h4 className='mt-2'>YouthSpark</h4>
                             </div>
                          </div>
                      </div>

                      <div className="hidden md:block">
                          <nav aria-label="Global">
                              <ul className="flex items-center gap-6 text-md">
                                  <li>
                                      <NavLink to={ '/' }
                                          className={ ({ isActive }) => (isActive ? "active " : "text-black transition text-gray-500/75 dark:text-white dark:hover:text-white/75") }

                                      >
                                          Home
                                      </NavLink>
                                  </li>

                                  <li>
                                      <NavLink to={'/technology'}
                                          className={ ({ isActive }) => (isActive ? "active" : "text-black transition text-gray-500/75 dark:text-white dark:hover:text-white/75")  }
                                          
                                      >
                                          Technology
                                      </NavLink>
                                  </li>

                                  <li>
                                      <NavLink to={ '/benefits' }
                                          className={ ({ isActive }) => (isActive ? "active" : "text-black transition text-gray-500/75 dark:text-white dark:hover:text-white/75") }
                                          
                                      >
                                          Benefits
                                      </NavLink>
                                  </li>

                                  <li>
                                      <NavLink to={'/environment'}
                                          className={ ({ isActive }) => (isActive ? "active" : "text-black transition text-gray-500/75 dark:text-white dark:hover:text-white/75") }
                                          
                                      >
                                            Environment
                                      </NavLink>
                                  </li>

                                  <li>
                                      <NavLink to={'/about'}
                                          className={ ({ isActive }) => (isActive ? "active" : "text-black transition text-gray-500/75 dark:text-white dark:hover:text-white/75") }
                                         
                                      >
                                          About Us
                                      </NavLink>
                                  </li>

                              </ul>
                          </nav>
                      </div>

                      <div className="flex items-center gap-4">
                          <div className="sm:flex sm:gap-4">
                              <NavLink
                                  className={ ({ isActive }) => (isActive ? "active bg-dark border p-2" :"rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow dark:hover:bg-black hover:text-white")}
                                 
                              >
                                  Contact
                              </NavLink>

                              
                          </div>

                          <div className="block md:hidden">
                              <button
                                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                              >
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                  >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
    </nav>
  )
}

export default Header
