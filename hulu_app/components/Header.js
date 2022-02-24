import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon,CollectionIcon,BadgeCheckIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center m-5'>
        <div className='flex flex-grow justify-evenly max-w-xl'>
        <HeaderItem title="HOME" Icon={HomeIcon}/>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItem title="COLLECTION" Icon={CollectionIcon}/>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>
        <Image src="/assets/hulu_logo.png" className='object-contain' alt="image" width={200} height={100}/>
    </header>
  )
}

export default Header