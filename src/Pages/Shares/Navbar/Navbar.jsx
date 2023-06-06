import React from 'react';
import NavTitle from "../../../assets/Logo/Asset@4x.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPersonCircle , BsFillCheckCircleFill} from "react-icons/bs";

const Navbar = () => {
    return (

        <nav className="flex justify-between items-center bg-white px-2 py-1">
            <button>
                <img class="w-18 h-6 inline px-2" src={NavTitle} alt="" />
                <h1 class="text-xl text-gray-800 font-bold inline">Sohub Call Center</h1>
            </button>

            <div className="flex items-center">

                <ul className="flex items-center space-x-6 ms-6">
                    <li>
                        <BsFillTelephoneFill size="18px" />
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </li>
                </ul>
                <div className="">
                    <ul className="menu menu-horizontal px-6">
                        <li tabIndex={0}>
                            <details>
                                <summary className='px-2 w-48 border'><BsFillCheckCircleFill size="14px" className='text-green-700' />  Engaged</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div>
                    <BsPersonCircle size="22px" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;