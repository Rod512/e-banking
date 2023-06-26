import React from 'react';
import { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
        const [user_name, setname] = useState('')
        const [user_email, setEmail] = useState('')
        const [user_password, setPassword] = useState('')

    const store = () => {
        localStorage.setItem("user_name",JSON.stringify(user_name))
        localStorage.setItem("user_email",JSON.stringify(user_email))
        localStorage.setItem("user_password",JSON.stringify(user_password))
    }

    return (
        <Fragment>
        <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-indigo-600">
                       Register for new account
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="name"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                                onChange={(e)=>{setname(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            user_email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="email"
                                name="email"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            user_password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                name="password"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="justify-end mt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md active:bg-gray-900 false"
                            onClick={store}
                        >
                        <Link to={'/log-in'}>Register</Link>
                           
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </Fragment>
    );
};

export default Register;