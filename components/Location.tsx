import Link from 'next/link'
import React from 'react'

const Location = () => {
  return (
    <nav className="w-full top-12 sticky bg-gray-300 my-8 py-4 font-bold items-center hidden gap-4 lg:flex justify-evenly">
            <Link className="text-sm hover:underline" href="/kharar">
              Kharar
            </Link>
            <Link className="text-sm hover:underline" href="/mohali">
              Mohali
            </Link>
            <Link className="text-sm hover:underline" href="/chandigarh">
                Chandigarh
            </Link>
            <Link className="text-sm hover:underline" href="/near-cu">
              Near Gate 2, CU
            </Link>
          </nav>
  )
}

export default Location