import React from 'react'
import Cards from './Cards'

const page = () => {
    return (
        <section className='z-[1] p-[1em] relative w-full bg-[#262d29]'>
            <div className='z-[5] relative w-full flex flex-col items-center justify-center py-[5em] '>
                <div className='w-full h-full max-w-[100em] mx-auto relative px-[4em]'>
                    <div className='flex flex-col relative'>
                        <div className='py-[2em]'>
                            <div className='w-full flex '>
                                <div className="box-border w-1/2 relative justify-center flex-col items-start flex [scrollbar-width:none!important]">
                                    <h2 letters-slide-up="" text-split="" className="box-border mb-0 font-medium mt-0 text-[4.5em] leading-[0.9] w-[100%] [scrollbar-width:none!important] opacity-100">
                                        <span className="box-border [scrollbar-width:none!important] overflow-hidden pb-[0.2em] text-start block w-full">
                                            <span className="box-border [scrollbar-width:none!important] inline-block [rotate:none] translate-x-0 translate-y-0">
                                                <span className="box-border [scrollbar-width:none!important] inline-block">H</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">e</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">a</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">r</span>
                                            </span>{' '}
                                            <span className="box-border [scrollbar-width:none!important] inline-block [rotate:none] translate-x-0 translate-y-0">
                                                <span className="box-border [scrollbar-width:none!important] inline-block">i</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">t</span>
                                            </span>{' '}
                                            <span className="box-border [scrollbar-width:none!important] inline-block [rotate:none] translate-x-0 translate-y-0">
                                                <span className="box-border [scrollbar-width:none!important] inline-block">f</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">r</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">o</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">m</span>
                                            </span>
                                        </span>
                                        <span className="box-border [scrollbar-width:none!important] overflow-hidden pb-[0.2em] block w-full">
                                            <span className="box-border [scrollbar-width:none!important] inline-block [rotate:none] translate-x-0 translate-y-0">
                                                <span className="box-border [scrollbar-width:none!important] inline-block">o</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">u</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">r</span>
                                            </span>{' '}
                                            <span className="box-border [scrollbar-width:none!important] inline-block [rotate:none] translate-x-0 translate-y-0">
                                                <span className="box-border [scrollbar-width:none!important] inline-block">c</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">l</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">i</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">e</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">n</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">t</span>
                                                <span className="box-border [scrollbar-width:none!important] inline-block">s</span>
                                            </span>
                                        </span>{' '}
                                    </h2>
                                    <div className="box-border pt-0 pb-[2em] [scrollbar-width:none!important]"></div>
                                    <div className="box-border rounded-[1000px] w-[18.75em] h-[4em] opacity-100 cursor-pointer border-[2px] border-solid border-[rgba(220,239,216,0.1)] items-center [transition:border-color_0.2s] flex relative [scrollbar-width:none!important]">
                                        <div data-w-id="a828b800-d354-f010-3e42-a12b5fc8274f" className="box-border w-1/2 h-full flex-col justify-center items-center flex relative [scrollbar-width:none!important]">
                                            <div className="box-border text-[1.13em] font-normal leading-[1.4] text-[rgb(67,_85,_75)] [scrollbar-width:none!important]">Fiverr</div>
                                        </div>
                                        <div data-w-id="52724a3f-3ec5-5cce-2e1c-889a6d09c049" className="box-border w-1/2 h-full flex-col justify-center items-center flex relative [scrollbar-width:none!important]">
                                            <div className="box-border text-[1.13em] font-normal leading-[1.4] [scrollbar-width:none!important]">Upwork</div>
                                        </div>
                                        <div className="box-border w-[9em] h-[3.4em] rounded-[1000px] absolute left-[0.25em] [scrollbar-width:none!important]"></div>
                                    </div>
                                </div>
                                <Cards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default page
