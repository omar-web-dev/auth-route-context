import React from 'react';

const SignUp = () => {
    return (
        <div className='sing-up-page'>
            <div className="mx-auto mt-20 flex  w-[350px] flex-col border-2 bg-white text-black shadow-xl">
                <div className="mx-8 my-7 mb-1 flex flex-row justify-start space-x-2">
                    <div className="h-7 w-3 bg-[#0DE6AC]"></div>
                    <div className="w-3 text-center font-sans text-xl font-bold"><h1>Registration</h1></div>
                </div>
                <div className="flex flex-col items-center">
                    <input className="my-2 w-72 border p-2" name='name' type="text" placeholder="Username" />
                    <input className="my-2 w-72 border p-2" name='email' type="email" placeholder="Usermail" />
                    <input className="my-2 w-72 border p-2" name='password' type="password" placeholder="Password" />
                </div>
                <div className="my-2 flex justify-center">
                    <button className="w-72 border bg-[#0DE6AC] p-2 font-sans">Submit</button>
                </div>
                <div className="mx-7 my-3 flex justify-between text-sm font-semibold">
                    <div><h1>have a account?</h1></div>
                    <div><h1 className="underline underline-offset-2">Sign in</h1></div>
                </div>
                <div className='mx-7'>
                    <div className="flex justify-center gap-5 w-full  mb-7">

                        <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                            <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
                            
                            <span>Google</span>
                        </button>
                        <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                            <svg className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
                            <span>Google</span>
                        </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default SignUp;