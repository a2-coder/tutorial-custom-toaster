import logo from '../assets/logo.svg';
import { RiSettings3Line } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="h-16 px-4 bg-slate-100 flex items-center flex-none border-b border-gray-300">
      <img src={logo} className="h-9" alt="logo" />
      <div className="ml-auto">
        <button className="cursor-pointer p-2 text-slate-500 hover:text-slate-600">
          <RiSettings3Line className='w-6 h-6' />
        </button>
      </div>
    </div>
  )
}

export default Header