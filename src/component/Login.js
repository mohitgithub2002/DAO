import React, { useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie';

const Hero = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const apiUrl = 'https://dapps.12foxs.com/investement_api';
    const urlWithParams = `${apiUrl}?user_id=${email}&password=${password}`;
    const handleSubmit = async (e) => {
        // try{
        //     const response = await fetch(urlWithParams, {
        //         mode: 'no-cors',
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
                
        //     });
        //     console.log(response);
        // }catch(error){
        //     console.log(error);
        // }
        axios.get(urlWithParams).then(response =>{
            if(response.status === 200){
                console.log(response.data.total_investment)
                Cookies.set('user', JSON.stringify({user_id : email, total_investment : response.data.total_investment}))
                window.location.href= "/"
            }
        }).catch(error=>{
            console.log(error);
            setError(error);
        })
    }

    return (
        <>
            <div class="relative min-h-screen  w-full ">


                <div class="absolute inset-0 z-0 h-full w-full "></div>
                <div class="container mx-auto  ">
                    <div class="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md absolute top-2/4 left-2/4  w-full sm:max-w-[32rem] max-w-[20rem] -translate-y-2/4 -translate-x-2/4">
                        <div class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-4 grid h-28 place-items-center">
                            <h3 class="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-white">Sign In</h3>
                        </div>
                        <div class="p-6 flex flex-col gap-4">
                            <div class="relative w-full min-w-[200px] h-16">
                                <input type="email" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-md px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500" 
                                placeholder=" " 
                                onChange={(e)=>{setEmail(e.target.value)}} /><label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">Email</label>
                            </div>
                            <div class="relative w-full min-w-[200px] h-16">
                                <input type="password" class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500" 
                                placeholder=" "
                                onChange={(e)=>{setPassword(e.target.value)}}
                                 />
                                <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">Password
                                </label>
                            </div>
                            <div class="-ml-2.5">
                                <div class="inline-flex items-center">
                                    <label class="relative flex items-center cursor-pointer p-3 rounded-full" for="checkbox">
                                        <input type="checkbox" class="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-500 checked:border-blue-500 checked:before:bg-blue-500" id="checkbox" />
                                        <div class="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </label>
                                    <label class="text-gray-700 font-light select-none cursor-pointer mt-px" for="checkbox">Remember Me</label>
                                </div>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <button  class="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full" 
                            type="button"
                            onClick = {handleSubmit}
                            >Sign In</button>
                            <p class="antialiased font-sans text-xl font-light leading-normal text-inherit mt-6 flex justify-center">Don't have an account?
                                <span class="block antialiased font-sans text-xl leading-normal text-blue-500 ml-1 font-bold">Signup</span>

                            </p>
                        </div>
                    </div>
                </div>

            </div >



        </>
    );
}

export default Hero;