import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';


// Redux
import {signIn} from '../../redux/reducers/auth/auth.action'
import {useDispatch} from 'react-redux'
import { mySelf } from '../../redux/reducers/User/user.action';

const SignIn = ({ isOpen, setisOpen }) => {
  const [userData, setuserData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setisOpen(false);
  };

  const dispatch = useDispatch()

  const submit = async () => {
    await dispatch(signIn(userData))
    await dispatch(mySelf());
    closeModal();
    setuserData({ email: '', password: '' });
  };

  const googleSignIn = () => (window.location.href = 'http://localhost:4000/auth/google');

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                  
                  </Dialog.Title>
                  <div className='mt-2 flex flex-col gap-3 w-full'>
                  <button
                    className='w-full text py-2 justify-center rounded-lg flex  items-center gap-2 border border-gray-400 text-gray-700 bg-white hover:bg-gray-100'
                    onClick={googleSignIn}>
                    Sign In with Google <FcGoogle />
                  </button>
                  <form className='flex flex-col gap-2'>
                  <div className='w-full flex flex-col gap-2'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='text'
                        value={userData.email}
                        id='email'
                        onChange={handleChange}
                        placeholder='user@gmail.com'
                        className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                      />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='text'
                        value={userData.password}
                        id='password'
                        onChange={handleChange}
                        placeholder='*******'
                        className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                      />
                    </div>
                    <div onClick={submit} className='py-2 cursor-pointer w-full text-center bg-zomato-400 text-white px-2 rounded-lg'>
                      Sign In
                    </div>
                  </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignIn;
