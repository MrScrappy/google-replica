import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'
import Micrhopone from './icons/Micrhopone'

const SearchComponent = () => {
    return (
        <div className="flex w-full mt-5 hover:shadow-lg
         focus-within:shadow-lg max-w-md rounded-full
         border border-gray-200 px-5 py-3 items-center
         sm:max-w-xl lg:max-w-2xl
         "  >
            <SearchIcon className="h-5 w-5 mr-3 text-gray-500 "/>
            <input type="text" className=" flex-grow focus:outline-none"/>
            <Micrhopone className="h-5" />
        </div>
    )
}

export default SearchComponent
