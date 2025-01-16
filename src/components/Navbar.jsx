import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clubLogo from '../assets/clubLogo.png';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', current: false, link: "/ClubWebsite", color: "lime" },
  { name: 'Events', current: false, link: "/ClubWebsite/event", color: "purple" },
  { name: 'Team', current: false, link: "/ClubWebsite/team", color: "yellow" },
  { name: 'Contact', current: false, link: "/ClubWebsite/contact", color: "rose" },
  { name: 'Register', current: false, link: "/ClubWebsite/register", color: "cyan" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div style={{ position: 'fixed', width: '100vw', zIndex: '100' }}>
      <Disclosure as="nav" className="bg-slate-800" style={{ backgroundColor: 'black' }}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={clubLogo}
                      alt="Club Logo"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={clubLogo}
                      alt="Club Logo"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : `text-gray-300 hover:bg-${item.color}-600 hover:text-white`,
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Optionally you can add any icons here */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
