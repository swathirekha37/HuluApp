import Router from 'next/router'
import React from 'react'
import requests from '../utils/requests'

function NavBar() {

  return (
    <nav className='flex px-10 whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide'>
       {Object.entries((requests)).map(([key,{title,url}]) => <h3 key={key}
       onClick={()=>Router.push(`/?genre=${key}`)}
       className={'hover:text-white last:pr-20 cursor-pointer hover:scale-125 transform duration-100 transition active:text-red-400'}>{title}</h3>)} 
    </nav>
  )
}

export default NavBar