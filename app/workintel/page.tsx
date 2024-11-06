import React from 'react'
import { SchibstedGroteskregular } from '../fonts/fonts'

const page = () => {


    const data = [
        {
            "Job Title": "SDE-1 Python Developer",
            "Company Name": "Panasonic",
            "YOE Requirements": "0-3 yoe"
        },
        {
            "Job Title": "SDE I - Android",
            "Company Name": "Inmobi",
            "YOE Requirements": "1+ yoe"
        },
        {
            "Job Title": "Backend Developer",
            "Company Name": "CRED",
            "YOE Requirements": "1-3 yoe"
        },
        {
            "Job Title": "Software Engineer (Frontend) - SCM IB",
            "Company Name": "Myntra",
            "YOE Requirements": "1+ yoe"
        },
        {
            "Job Title": "Data Scientist 1",
            "Company Name": "Zeta",
            "YOE Requirements": "6m"
        },
        {
            "Job Title": "UX Designer I",
            "Company Name": "Zeta",
            "YOE Requirements": "0-2 yoe"
        },
        {
            "Job Title": "Software Development Engineer I",
            "Company Name": "Zeta",
            "YOE Requirements": "1+ yoe"
        },
        {
            "Job Title": "Business Intelligence Engineer I",
            "Company Name": "Zeta",
            "YOE Requirements": "0-6m"
        },
        {
            "Job Title": "Site Reliability Engineer I (Payzapp)",
            "Company Name": "Zeta",
            "YOE Requirements": "1-2 yoe"
        },
        {
            "Job Title": "Machine Learning Engineer 1 - DSP",
            "Company Name": "Swiggy",
            "YOE Requirements": "0-1 yoe"
        },
        {
            "Job Title": "Software Engineer, Machine Learning",
            "Company Name": "LinkedIn",
            "YOE Requirements": "2+ yoe"
        },
        {
            "Job Title": "Data Scientist - I",
            "Company Name": "Swiggy",
            "YOE Requirements": "0-2 yoe"
        },
        {
            "Job Title": "Software Development Engineer - 1",
            "Company Name": "Cleartrip",
            "YOE Requirements": "1+ yoe"
        },
        {
            "Job Title": "Web Developer",
            "Company Name": "Groww",
            "YOE Requirements": "1+ yoe"
        },
        {
            "Job Title": "SDE-1",
            "Company Name": "ShareChat",
            "YOE Requirements": "1-3 yoe"
        },
        {
            "Job Title": "Software Engineer, YouTube",
            "Company Name": "Google",
            "YOE Requirements": "1+ yoe"
        }
    ]
    return (
        <div className={`${SchibstedGroteskregular.className} mx-auto `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                {/* <div className=' w-[200px] bg-inherit z-[1] '></div> */}
                <div className='flex  bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full  py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0   max-w-[1200px] 2xl:min-w-[1080px] min-w-[980px] '>
                            <ul className='my-[-1.5rem] mx-0'>
                                <li className='relative border-2 border-solid border-black  my-[1.5rem] mx-0 '>
                                    {/* <div className='grid grid-rows-[repeat(3,min-content)] grid-cols-[repeat(3,min-content)]'>
                  <div></div>
                </div> */}
                                    <div className=' pt-36 [&>div]:border-t [&>div]:border-[#D7D7D7] w-full [&>div]:last-of-type:border-b  text-[#100C0A]  bg-[#FFFBF8] min-h-[720px]' >

                                        {
                                            data.map((item, index) => {
                                                return (
                                                    <div className='flex  items-center gap-5 px-3 py-2 '>
                                                        <div className=' flex-shrink-0 flex-grow basis-[45%] flex self-center '>

                                                            <div className={` ${SchibstedGroteskregular.className} text-[#24201F] font-normal text-[1rem] tracking-normal leading-[2rem] `}>{item['Job Title']}</div>
                                                        </div>
                                                        <div className={`self-center flex-shrink-0 flex-grow basis-[35%] flex  ${SchibstedGroteskregular.className} text-[#00133B]/[.9] text-[16px] font-semibold tracking-normal leading-[1.45rem] w-[243px]`}>{item['Company Name']}</div>

                                                        <div className={`${SchibstedGroteskregular.className} flex self-end flex-col flex-shrink-0 flex-grow basis-[15%]`}>
                                                            <p className=' bg-[#ACFAA8] text-[1rem] font-medium tracking-normal h-[30px] text-[#100C0A] leading-[1.45] self-center w-[70px] whitespace-nowrap  px-2 py-2 flex justify-center items-center'>
                                                                {item['YOE Requirements']}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }


                                        {/* <div className='flex  items-center gap-5 px-3 py-2 '>
                                            <div className=' flex-shrink-0 flex-grow basis-[45%] flex self-center '>

                                                <div className={` ${SchibstedGroteskregular.className} text-[#24201F] font-normal text-[1rem] tracking-normal leading-[2rem] `}>Software Development Engineer I</div>
                                            </div>
                                            <div className={`self-center flex-shrink-0 flex-grow basis-[35%] flex  ${SchibstedGroteskregular.className} text-[#00133B]/[.9] text-[16px] font-semibold tracking-normal leading-[1.45rem] w-[243px]`}>Zeta</div>

                                            <div className={`${SchibstedGroteskregular.className} flex self-end flex-col flex-shrink-0 flex-grow basis-[15%]`}>
                                                <p className=' bg-[#ACFAA8] text-[1rem] font-medium tracking-tight h-[30px] texxt-[#100C0A] leading-[1.45rem] self-center w-[70px]  px-2 py-2 flex justify-center items-center'>
                                                    1+ yoe
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex  items-center gap-5 px-3 py-2 '>
                                            <div className=' flex-shrink-0 flex-grow basis-[45%] flex self-center '>

                                                <div className={` ${SchibstedGroteskregular.className} text-[#24201F] font-normal text-[1rem] tracking-normal leading-[2rem] `}>Business Intelligence Engineer I</div>
                                            </div>
                                            <div className={`self-center flex-shrink-0 flex-grow basis-[35%] flex  ${SchibstedGroteskregular.className} text-[#00133B]/[.9] text-[16px] font-semibold tracking-normal leading-[1.45rem] w-[243px]`}>Zeta</div>

                                            <div className={`${SchibstedGroteskregular.className} flex self-end flex-col flex-shrink-0 flex-grow basis-[15%]`}>
                                                <p className=' bg-[#ACFAA8] text-[1rem] font-medium tracking-tight h-[30px] texxt-[#100C0A] leading-[1.45rem] self-center w-[70px]  px-2 py-2 flex justify-center items-center'>
                                                    0-6m
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex  items-center gap-5 px-3 py-2 '>
                                            <div className=' flex-shrink-0 flex-grow basis-[45%] flex self-center '>

                                                <div className={` ${SchibstedGroteskregular.className} text-[#24201F] font-normal text-[1rem] tracking-normal leading-[2rem] `}>Customer Service Process Associate (Voice-English)</div>
                                            </div>
                                            <div className={`self-center flex-shrink-0 flex-grow basis-[35%] flex  ${SchibstedGroteskregular.className} text-[#00133B]/[.9] text-[16px] font-semibold tracking-normal leading-[1.45rem] w-[243px]`}>Genpact India Private Limited</div>

                                            <div className={`${SchibstedGroteskregular.className} flex self-end flex-col flex-shrink-0 flex-grow basis-[15%]`}>
                                                <p className=' bg-[#ACFAA8] text-[1rem] font-medium tracking-tight h-[30px] texxt-[#100C0A] leading-[1.45rem] self-center w-[70px]  px-2 py-2 flex justify-center items-center'>
                                                    0-1 yoe
                                                </p>
                                            </div>
                                        </div> */}


                                    </div>
                                </li>

                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
