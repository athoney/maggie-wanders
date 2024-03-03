import React from 'react'
import Link from 'next/link'
import { roboto_mono } from "../fonts";


export default function Button({ text, link }) {
  return (
    <Link href={link}><button className={`rounded-lg bg-primary p-3 text-white font-bold ${roboto_mono.className}`}>{text}</button></Link>
  )
}
