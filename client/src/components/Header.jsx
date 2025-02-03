import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {


  // console.log('Current User:', currentUser);
  // console.log('Avatar URL:', currentUser?.avatar);

  return (
    <header className='bg-[#000431] shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-[#82CDCF]'>Madu</span>
            <span className='text-[#F5FAFF]'>Estate</span>
        </h1>
        </Link>
      
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-[#000431]' />
        </form>
        
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-50 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-50 hover:underline'>About</li>
          </Link>
          
          {/* <Link to='/profile'>
             {currentUser?.avatar && currentUser ? (
              <img
                className='rounded-full h-8 w-8 object-cover'
                src={currentUser.avatar}
                alt='profile'
                onError={(e) => e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link> */}

        </ul>
      </div>
    </header>
  );
}






