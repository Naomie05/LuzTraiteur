import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MdClose, MdMenu } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { PiTote } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../State/store';
import { getUser, logout } from '../State/Auth/Action';

const navigation = [
  { name: 'ACCEUIL', to: '/'},
  { name: 'LE MENU', to: '/Menu'},
  { name: 'SERVICE TRAITEUR', to: '/Traiteur'},
  { name: 'A PROPOS', to: '/About'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {auth} = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsMenuOpen(false);
    navigate("/")
  }

    useEffect(() =>{
        if(jwt){
            dispatch(getUser(jwt))
        }
    },[jwt, auth.jwt])

    useEffect(() =>{

        if(auth.user){
            handleClose()
        }
        if(location.pathname === "/Login" || location.pathname === "/Signup"){
            navigate(-1)
        }

    },[auth.user])

    /*const handleLogout = () => {
        dispatch(logout())
        handleCloseUserMenu()
    }*/

    const handleLogout = () => {
        dispatch(logout());
        handleClose();
    }


  return (
    <div className={`w-full ${navbarFixed ? 'fixed top-0 z-50' : ''}`}>
        <Disclosure as="nav" className="bg-white border-b border-b-black h-20 justify-center">
        {({ open }) => (
            <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <MdClose className="block h-8 w-8 md:h-8 md:w-8" aria-hidden="true" />
                    ) : (
                        <MdMenu className="block h-8 w-8 md:h-8 md:w-8" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Link to='/'>
                            <img className='h-10 w-auto sm:h-14' src="./img/logo_2.jpg" alt="Luz"/>
                        </Link>
                    </div>
                    <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className='hover:underline px-3 py-2 text-lg font-semibold text-black'>
                            {item.name}
                        </Link>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="relative flex rounded-full text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                {auth.user ? (
                                    <div className="h-10 w-10 md:h-10 md:w-10 flex items-center justify-center bg-first rounded-full text-black text-xl font-semibold">
                                        {auth.user.firstName.charAt(0)}
                                    </div>
                                ) : (
                                    <BsPersonCircle className='h-8 w-auto text-black hidden lg:block'/>
                                )}
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-4 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {auth.user ? (
                                    <>
                                        <Menu.Item>
                                            <div className='flex flex-col text-justify border-b-2 border-b-black my-10 bg-orange-back mt-0'>
                                                <h3 className='text-2xl mt-10 mb-5 text-first font-semibold ml-10'>Salut {auth.user.firstName} !!</h3>
                                                <h1 className='text-5xl font-semibold mb-10 ml-10'>BON RETOUR </h1>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <Link
                                                to=" "
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Mon Profile
                                            </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <Link
                                                to='/Order'
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Mes Commandes
                                            </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item as= "div">
                                            {({ active }) => (
                                                <button
                                                    onClick={handleLogout}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Se deconnecter
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </>
                                ) : (
                                    <>
                                        <Menu.Item>
                                            <div className='flex flex-col text-justify border-b-2 border-b-black my-10 bg-orange-back mt-0'>
                                                <h3 className='text-2xl mt-10 mb-5 text-first font-semibold ml-10'>Salut,</h3>
                                                <h1 className='text-5xl font-semibold mb-10 ml-10'>BIENVENUE</h1>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <div className='text-center mb-5'>
                                                <Link to="/Login" onClick={() => setIsMenuOpen(false)}>
                                                    <button className='btn btn-primary mb-5'>Se Connecter</button>
                                                </Link>
                                               
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <h3 className='text-lg'>Vous n'avez pas de compte? <Link to="/Signup" onClick={() => setIsMenuOpen(false)} className='text-first underline'>S'inscrire</Link> </h3>
                                        </Menu.Item>
                                    </>
                                 )}
                                {/*
                                <Menu.Item>
                                    {({ active }) => (
                                    <Link
                                        to=" "
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Mon Profile
                                    </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <Link
                                        to='/Order'
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Mes Commandes
                                    </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <Link
                                        to=" "
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Se Connecter
                                    </Link>
                                    )}
                                </Menu.Item>*/}
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <Link
                    to="/Cart"
                    className="relative rounded-full p-1 text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                    <span className="absolute -inset-1.5" />
                    <PiTote className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                    </Link>
                </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className='px-5 py-7'>
                    <h1>BIENVENUE</h1>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure>
                        <Link key={item.name}
                        to={item.to}
                        className='text-black block rounded-md px-3 py-2 text-base font-semibold'> 
                            {item.name}
                        </Link>
                    </Disclosure>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </div>
  )
}
