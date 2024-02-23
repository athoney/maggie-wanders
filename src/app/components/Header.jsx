import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='text-center border-b-2 border-black flex items-end justify-between pt-10 pb-3'>
            <p className='text-slate-600'>
                02-03-2024 8:36 ACDT
            </p>
            <h1 className="text-3xl">
                <Link href="/">A Study Abroad Chronicle</Link>
            </h1>
            <p className='text-slate-600'>
                02-03-2024 8:36 ACDT
            </p>
        </div>
    )
}
