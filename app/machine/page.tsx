import React from 'react'
import { SchibstedGroteskregular } from '../fonts/fonts'

const page = () => {
    return (
        <div className={`${SchibstedGroteskregular.className}  mx-auto`}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                {/* <div className=' w-[200px] bg-inherit z-[1] '></div> */}
                <div className='flex  bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 flex flex-col gap-5 px-[3rem] h-full max-w-[1000px] '>
                            <h1 className='text-[64px] text-[#2C2C2CCC] tracking-normal font-black'>Machine Learning Engineer - 1</h1>
                            <div className=' flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[1.5rem] py-[1.1rem]  p-[.75rem]  border-2  border-solid border-black'>
                                <h2 className={`${SchibstedGroteskregular.className} text-[#100C0A]/[.9] text-start text-[1rem] leading-[1.2] font-semibold tracking-normal   `}>Find out if you have the skills & expertise that companies are looking for by answering the following qns</h2>
                            </div>
                            <div className=' flex-shrink-0 basis-auto bg-[#CEFFA3]  px-[1.5rem] py-[1.1rem]  p-[.75rem]  border-2  border-solid border-black'>
                                <div className=''>
                                    <h1 className='text-[24px] leading-[2] text-[#000C00] font-medium'>Can you describe a specific project where you successfully deployed an
                                        ML/DL model to production?</h1>
                                </div>
                                <div className='bg-[#FEFAF9] px-4 py-6 mt-6'>
                                    <p>I'd like to describe a project where I successfully deployed a deep learning model to production for a leading
                                        e-commerce company. The goal of the project was to develop a real-time product recommendation system that
                                        would suggest relevant products to customers based on their browsing and purchase history.</p>
                                    <p className='mt-10'>

                                        I developed a neural network-based model using TensorFlow and Keras,  which consisted of an embedding layer,
                                        a recurrent neural network (RNN), and a fully connected layer. The model was trained on a large dataset  of
                                        customer interactions, including clicks, purchases, and browsing history.</p>

                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='bg-white border-2 w-[195px] flex gap-2 p-2 h-[50px] border-[#030000]'>

                                    <div className='bg-[#A9F9A4] w-[21px] h-[30px] '></div>
                                    <div className='bg-[#A9F9A4] w-[21px] h-[30px] '></div>
                                    <div className='bg-[#A9F9A4] w-[21px] h-[30px] '></div>

                                </div>
                                <div className='flex gap-7'>
                                    <button className='border bg-[#FFFBFA] w-[60px] h-[30px] p-1 border-[#030000] '>back</button>
                                    <button className='bg-[#82DDB6] w-[60px] h-[30px] p-1' >next</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
