'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Productos', href: '#', current: false },
  { name: 'Contacto', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              {/* LOGO */}
              <div className="flex items-center text-xl font-bold text-indigo-600">
                EMPRENDE-CONECTA
              </div>

              {/* MENÚ DESKTOP */}
              <div className="hidden sm:flex sm:items-center sm:space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                        : 'text-gray-600 hover:text-indigo-500',
                      'text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* MENÚ MOBILE */}
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* PANELES MOBILE */}
          <Disclosure.Panel className="sm:hidden px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-gray-700 hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
