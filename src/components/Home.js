import React,{Fragment} from 'react';
import img from '../img/e-banking.png'
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <Fragment>
            <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div>
                    <h2 className='mb-5 text-6xl'><span className='text-indigo-600 font-semibold'>Online</span><br/>Banking system</h2>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis quasi officia pariatur architecto ipsam. <br /> Nobis ut assumenda repellendus aspernatur expedita doloribus officiis necessitatibus sit? Quis quia sequi facilis <br /> reprehenderit deserunt temporibus at minima illo, recusandae rem. Sint, ratione dolor! Cumque, porro? Velit in <br /> ut porro debitis id ab accusamus.</p>
                    <button className='bg-indigo-600 text-white mt-5 px-6 py-3 rounded'>
                    <Link to={'/log-in'}>Login here</Link>
                    </button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;