import React from 'react';
import { Fragment,useState } from 'react';
import image from '../img/profile.png'

const Account = () => {
    const profilename = JSON.parse(localStorage.getItem('user_name'))
    const [deposite,setDeposite] = useState('')
    const [withdraw,setWithdraw] = useState('')
    const deposite_money = JSON.parse(localStorage.getItem('deposite'))
    const withdraw_money = JSON.parse(localStorage.getItem('withdraw'))

    const depo = (e)=>{
        e.preventDefault()
        localStorage.setItem('deposite',JSON.stringify(deposite))
    }

    const with_d = (e)=>{
        e.preventDefault()
        localStorage.setItem('withdraw',JSON.stringify(withdraw))

    }

    let balance = (0 + deposite_money) - withdraw_money
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
                        <p> <span dangerouslySetInnerHTML={{__html:balance}}></span> $</p>
                     </div>

                     <div className='border py-10 bg-rose-500 font-bold text-white rounded-md'>
                        <h3>Last Withdraw</h3>
                        <p><span dangerouslySetInnerHTML={{__html:withdraw_money}}></span>$</p>
                     </div>

                     <div className='border py-10 bg-lime-500 font-bold text-white rounded-md'>
                        <h3>Last Deposite</h3>
                        <p><span dangerouslySetInnerHTML={{__html:deposite_money}}></span> $</p>
                     </div>
                </div>
                <div className='mt-32 flex justify-center'>
                    <form class="w-full max-w-sm" onChange={depo}>
                    <p className='text-4xl pb-20 text-center'>Create Your Banking here!</p>
                        <div class="flex items-center border-b border-teal-500 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={profilename} aria-label="Full name" onChange={(e)=>setDeposite(e.target.value)}/>
                                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Deposite
                                </button>
                        </div>
                    </form>
                </div>

                <div className='mt-12 flex justify-center'>
                    <form class="w-full max-w-sm" onChange={with_d}>
                        <div class="flex items-center border-b border-teal-500 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={profilename} aria-label="Full name" onChange={(e)=>setWithdraw(e.target.value)}/>
                                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Withdraw
                                </button>
                        </div>
                    </form>
                </div>


            </div>
            
        </Fragment>
        
    );
};

export default Account;