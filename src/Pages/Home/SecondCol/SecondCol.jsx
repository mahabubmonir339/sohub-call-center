import React from 'react';
import { FaRegComment } from "react-icons/fa";
import { BsFillTelephoneFill, BsShare, BsTelephone, BsEnvelope, BsChat, BsTrash3 } from "react-icons/bs";
import DialPad from '../Components/DialPad/DialPad';
const SecondCol = () => {
    return (
        <div className='grid grid-rows-2 gap-4 content-between'>
            <div>
                <div className="bg-base-100 shadow-xl p-4 rounded flex-wrap">
                    <div className="flex items-center justify-between">
                        <div className="text-black bg-green-300 rounded-full p-4">
                            <BsFillTelephoneFill size="15px" />
                        </div>
                        <div>
                            <p>+1(412)288-3782</p>
                            <p className='text-xs'>IVR_Queue_1</p>
                        </div>
                        <div className="">
                            <button className="btn btn-sm text-black">00:01</button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 shadow-xl p-4 rounded mt-1">
                    <div className="flex items-center justify-between">
                        <div className="text-black bg-blue-400 rounded-full p-4">
                            <FaRegComment size="15px" />
                        </div>
                        <div>
                            <p>Johan Smith</p>
                            <p className='text-xs'>IVR_Queue_1-00:01</p>
                        </div>
                        <div className="">
                            <button className="btn btn-sm bg-green-800 text-white">Accepted</button>
                        </div>
                    </div>
                </div>
                {/* 3rd section  */}
                <div>
                    <DialPad></DialPad>
                </div>
            </div>



            {/* 2nd section  */}
            <div className=''>
                <div className="">
                    <div className='w-auto h-72 border shadow-xl p-4 rounded bg-slate-100'>
                        <div className='inline md:inline sm:inline px-2'>
                            <button className="btn btn-sm">All</button>
                        </div>
                        <div className='inline-flex flex-wrap justify-around gap-2 mt-3 mb-2'>
                            <div>
                                <button className="btn btn-sm rounded-full  bg-blue-100"><BsTelephone /> </button>
                            </div>
                            <div>
                                <button className="btn btn-sm rounded-full  bg-blue-100"><BsChat /></button>
                            </div>
                            <div>
                                <button className="btn btn-sm rounded-full  bg-blue-100"><BsShare /></button>
                            </div>
                            <div>
                                <button className="btn btn-sm rounded-full  bg-blue-100"><BsEnvelope /></button>
                            </div>
                        </div>
                        <hr />
                        <div className='flex flex-col justify-center items-center h-3/4'>
                            <BsTrash3 size="40px" />
                            <p> No History</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SecondCol;