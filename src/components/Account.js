import React from 'react';
import { Fragment } from 'react';
import image from '../img/profile.png'

const Account = () => {
    const profilename = JSON.parse(localStorage.getItem('user_name'))
    return (
        <Fragment>
            <div className='my-2 mx-5 md:mx-0 md:my-0 lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 '>
                {/* account head */}
                <div className='flex justify-between items-center'>
                    <div className=' border border-indigo-700 p-5 rounded'><h2 className='font-bold'>Account Name : <span dangerouslySetInnerHTML={{__html:profilename}}></span></h2></div>
                    <div className='w-28 flex items-center justify-cente'><img className='w-24 bg-white rounded-full' src={image} alt="" /></div>
                </div>

                {/* banking */}

                <div className='grid lg:grid-cols-3 gap-10 text-center mt-20'>
                     <div className='border py-10 bg-cyan-500 font-bold text-white rounded-md'>
                        <h3>Total balance</h3>
                        <p>100$</p>
                     </div>

                     <div className='border py-10 bg-rose-500 font-bold text-white rounded-md'>
                        <h3>Last Withdraw</h3>
                        <p>20$</p>
                     </div>

                     <div className='border py-10 bg-lime-500 font-bold text-white rounded-md'>
                        <h3>Last Deposite</h3>
                        <p>10$</p>
                     </div>
                </div>
            </div>
            
        </Fragment>
        
    );
};

export default Account;