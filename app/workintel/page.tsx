import React from 'react'
import { SchibstedGroteskregular } from '../fonts/fonts'

const page = () => {
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
                                    <div className=' pt-36 [&>div]:border-t [&>div]:border-[#D7D7D7] w-full [&>div]:last-of-type:border-b  text-[#100C0A]  bg-[#FFFBF8] h-[720px]' >
                                        <div className='flex  items-center gap-5 px-3 py-2 '>
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
                                        </div>

                                        {/* <div className='flex gap-5 '>
                                            <div className='w-[350px] flex justify-start '>
                                                <div className={` ${QuandoRegular.className} w-[331px] px-0   text-[#100C0A] font-normal tracking-tight text-[1rem] leading-[2rem] py-4`}>Junior Merchandise Designer(Fashion
                                                    Designer)</div>
                                            </div>
                                            <div className=' flex self-center text-[#141417E5]/[.9] py-4 text-[18px] leading-[1.45rem] w-[243px]'>K.S.E. INC</div>
                                            <div className={`${DMSansMed.className} bg-[#ACFAA8]  text-[1.25rem] font-medium tracking-tight leading-[1.65rem] flex justify-center self-center items-center h-[45px] w-[102px] px-2 py-2`}>1-4 yoe</div>

                                        </div>


                                        <div className='flex gap-5 '>
                                            <div className='w-[350px] self-center flex '>
                                                <div className={` ${QuandoRegular.className} text-[1rem] leading-[2rem] w-[307px] tracking-tight py-4`}>Customer Service Process Associate
                                                    (Voice-English)</div>
                                            </div>
                                            <div className=' flex  self-center text-[#141417E5]/[.9] text-[1.125rem] whitespace-pre-wrap leading-[1.45rem] text-[#100C0A] font-normal tracking-tight w-[243px]'>Genpact India Private Limited</div>
                                            <div className={`${DMSansMed.className} bg-[#ACFAA8]  text-[1.25rem] font-medium tracking-tight leading-[1.65rem] self-center h-[45px] w-[102px] px-2 py-2 flex justify-center items-center`}>0-1 yoe</div>

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
