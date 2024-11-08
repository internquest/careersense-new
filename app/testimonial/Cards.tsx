'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import addificoleftarow from '@/public/addificoleftarow.svg'
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
const Cards = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [lefthover, setLefthover] = useState(false);
    const [righthover, setRighthover] = useState(false);

    const handleLeftHover = (value: boolean) => {
        setLefthover(value);
    };
    const handleRightHover = (value: boolean) => {
        setRighthover(value);
    };


    return (
        <div className='h-[36em] flex flex-col items-start w-1/2 relative'>
            <div className='w-full h-full flex text-[1.0582010582010584vw] flex-col justify-center items-start absolute'>
                <Swiper
                    effect={'cards'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    navigation={
                        {
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }
                    }
                    modules={[EffectCards, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="box-border rounded-[24px] w-[26em] text-[1.0582010582010584vw] h-[34em] gap-[2em] bg-[rgb(228,_236,_227)] flex-col items-start p-[2.5em] flex relative [scrollbar-width:none!important]">
                            <div className="box-border gap-[0.5em] w-full flex-row flex [scrollbar-width:none!important]">
                                <div className="box-border flex-col  justify-center items-center px-[1.2em] py-[0.6em] flex relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border opacity-70 rounded-[1000px] z-0 w-full h-full bg-[rgb(201,_220,_198)] absolute inset-0 [scrollbar-width:none!important]"></div>
                                    <div className="box-border text-[1em] font-medium leading-[1.4] text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important]">57 of 324</div>
                                </div>
                                <a href="https://www.fiverr.com/dikovh" target="_blank" className="bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)] no-underline flex-col justify-center items-center px-[1.2em] py-[0.6em] relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border text-[1em] font-medium leading-none text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important] whitespace-nowrap pointer-events-none">Read more</div>
                                    <div className="box-border rounded-[1000px] z-0 w-full h-full border-[2px] border-[solid] border-[rgb(201,220,198)] [transition:border-color_0.1s] absolute [scrollbar-width:none!important]"></div>
                                </a>
                            </div>
                            <div className="box-border text-[1.13em] font-normal leading-normal text-[rgb(67,_85,_75)] opacity-80 relative z-[5] [scrollbar-width:none!important]">The analysis was very profound, even though the business model is rather new and experimental. Every result and figure was marked with the source and every calculation can be reconsidered</div>
                            <img src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ec45d3256eff900454a0a2_Quotes-icon-New.svg" loading="lazy" alt="" className="border-[0px] box-border max-w-full align-middle inline-block right-[2.5em] top-[4em] left-auto bottom-auto w-[7.06em] absolute [scrollbar-width:none!important]"></img>
                            <div className="box-border w-full gap-[1em] items-center mt-auto pt-[2em] flex relative [scrollbar-width:none!important]">
                                <div className="box-border w-full h-px opacity-10 origin-[0%_center] absolute [scrollbar-width:none!important] [transform:translate3d(0px,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]"></div>
                                <div className="box-border w-[3.75em] h-[3.75em] bg-[50%_center] bg-no-repeat bg-cover rounded-[1000px] flex-[0_0_auto] [scrollbar-width:none!important]"></div>
                                <div className="box-border gap-[0.2em] flex-col flex [scrollbar-width:none!important]">
                                    <h3 className="box-border mb-0 font-bold mt-0 text-[1.25em] leading-[1.4] [transition:color_0.2s] tracking-[0.5px] text-[rgb(67,_85,_75)] [scrollbar-width:none!important]">Oliver Lauche</h3>
                                    <div className="box-border tracking-[3px] uppercase text-[0.75em] font-medium leading-[1.1] text-[rgb(67,_85,_75)] opacity-40 [scrollbar-width:none!important]">Founder of Witjaw</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box-border rounded-[24px] w-[26em] text-[1.0582010582010584vw] h-[34em] gap-[2em] bg-[rgb(228,_236,_227)] flex-col items-start p-[2.5em] flex relative [scrollbar-width:none!important]">
                            <div className="box-border gap-[0.5em] w-full flex-row flex [scrollbar-width:none!important]">
                                <div className="box-border flex-col  justify-center items-center px-[1.2em] py-[0.6em] flex relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border opacity-70 rounded-[1000px] z-0 w-full h-full bg-[rgb(201,_220,_198)] absolute inset-0 [scrollbar-width:none!important]"></div>
                                    <div className="box-border text-[1em] font-medium leading-[1.4] text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important]">57 of 324</div>
                                </div>
                                <a href="https://www.fiverr.com/dikovh" target="_blank" className="bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)] no-underline flex-col justify-center items-center px-[1.2em] py-[0.6em] relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border text-[1em] font-medium leading-none text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important] whitespace-nowrap pointer-events-none">Read more</div>
                                    <div className="box-border rounded-[1000px] z-0 w-full h-full border-[2px] border-[solid] border-[rgb(201,220,198)] [transition:border-color_0.1s] absolute [scrollbar-width:none!important]"></div>
                                </a>
                            </div>
                            <div className="box-border text-[1.13em] font-normal leading-normal text-[rgb(67,_85,_75)] opacity-80 relative z-[5] [scrollbar-width:none!important]">The analysis was very profound, even though the business model is rather new and experimental. Every result and figure was marked with the source and every calculation can be reconsidered</div>
                            <img src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ec45d3256eff900454a0a2_Quotes-icon-New.svg" loading="lazy" alt="" className="border-[0px] box-border max-w-full align-middle inline-block right-[2.5em] top-[4em] left-auto bottom-auto w-[7.06em] absolute [scrollbar-width:none!important]"></img>
                            <div className="box-border w-full gap-[1em] items-center mt-auto pt-[2em] flex relative [scrollbar-width:none!important]">
                                <div className="box-border w-full h-px opacity-10 origin-[0%_center] absolute [scrollbar-width:none!important] [transform:translate3d(0px,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]"></div>
                                <div className="box-border w-[3.75em] h-[3.75em] bg-[50%_center] bg-no-repeat bg-cover rounded-[1000px] flex-[0_0_auto] [scrollbar-width:none!important]"></div>
                                <div className="box-border gap-[0.2em] flex-col flex [scrollbar-width:none!important]">
                                    <h3 className="box-border mb-0 font-bold mt-0 text-[1.25em] leading-[1.4] [transition:color_0.2s] tracking-[0.5px] text-[rgb(67,_85,_75)] [scrollbar-width:none!important]">Oliver Lauche</h3>
                                    <div className="box-border tracking-[3px] uppercase text-[0.75em] font-medium leading-[1.1] text-[rgb(67,_85,_75)] opacity-40 [scrollbar-width:none!important]">Founder of Witjaw</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box-border rounded-[24px] w-[26em] text-[1.0582010582010584vw] h-[34em] gap-[2em] bg-[rgb(228,_236,_227)] flex-col items-start p-[2.5em] flex relative [scrollbar-width:none!important]">
                            <div className="box-border gap-[0.5em] w-full flex-row flex [scrollbar-width:none!important]">
                                <div className="box-border flex-col  justify-center items-center px-[1.2em] py-[0.6em] flex relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border opacity-70 rounded-[1000px] z-0 w-full h-full bg-[rgb(201,_220,_198)] absolute inset-0 [scrollbar-width:none!important]"></div>
                                    <div className="box-border text-[1em] font-medium leading-[1.4] text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important]">57 of 324</div>
                                </div>
                                <a href="https://www.fiverr.com/dikovh" target="_blank" className="bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)] no-underline flex-col justify-center items-center px-[1.2em] py-[0.6em] relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border text-[1em] font-medium leading-none text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important] whitespace-nowrap pointer-events-none">Read more</div>
                                    <div className="box-border rounded-[1000px] z-0 w-full h-full border-[2px] border-[solid] border-[rgb(201,220,198)] [transition:border-color_0.1s] absolute [scrollbar-width:none!important]"></div>
                                </a>
                            </div>
                            <div className="box-border text-[1.13em] font-normal leading-normal text-[rgb(67,_85,_75)] opacity-80 relative z-[5] [scrollbar-width:none!important]">The analysis was very profound, even though the business model is rather new and experimental. Every result and figure was marked with the source and every calculation can be reconsidered</div>
                            <img src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ec45d3256eff900454a0a2_Quotes-icon-New.svg" loading="lazy" alt="" className="border-[0px] box-border max-w-full align-middle inline-block right-[2.5em] top-[4em] left-auto bottom-auto w-[7.06em] absolute [scrollbar-width:none!important]"></img>
                            <div className="box-border w-full gap-[1em] items-center mt-auto pt-[2em] flex relative [scrollbar-width:none!important]">
                                <div className="box-border w-full h-px opacity-10 origin-[0%_center] absolute [scrollbar-width:none!important] [transform:translate3d(0px,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]"></div>
                                <div className="box-border w-[3.75em] h-[3.75em] bg-[50%_center] bg-no-repeat bg-cover rounded-[1000px] flex-[0_0_auto] [scrollbar-width:none!important]"></div>
                                <div className="box-border gap-[0.2em] flex-col flex [scrollbar-width:none!important]">
                                    <h3 className="box-border mb-0 font-bold mt-0 text-[1.25em] leading-[1.4] [transition:color_0.2s] tracking-[0.5px] text-[rgb(67,_85,_75)] [scrollbar-width:none!important]">Oliver Lauche</h3>
                                    <div className="box-border tracking-[3px] uppercase text-[0.75em] font-medium leading-[1.1] text-[rgb(67,_85,_75)] opacity-40 [scrollbar-width:none!important]">Founder of Witjaw</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box-border rounded-[24px] w-[26em] text-[1.0582010582010584vw] h-[34em] gap-[2em] bg-[rgb(228,_236,_227)] flex-col items-start p-[2.5em] flex relative [scrollbar-width:none!important]">
                            <div className="box-border gap-[0.5em] w-full flex-row flex [scrollbar-width:none!important]">
                                <div className="box-border flex-col  justify-center items-center px-[1.2em] py-[0.6em] flex relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border opacity-70 rounded-[1000px] z-0 w-full h-full bg-[rgb(201,_220,_198)] absolute inset-0 [scrollbar-width:none!important]"></div>
                                    <div className="box-border text-[1em] font-medium leading-[1.4] text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important]">57 of 324</div>
                                </div>
                                <a href="https://www.fiverr.com/dikovh" target="_blank" className="bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)] no-underline flex-col justify-center items-center px-[1.2em] py-[0.6em] relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border text-[1em] font-medium leading-none text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important] whitespace-nowrap pointer-events-none">Read more</div>
                                    <div className="box-border rounded-[1000px] z-0 w-full h-full border-[2px] border-[solid] border-[rgb(201,220,198)] [transition:border-color_0.1s] absolute [scrollbar-width:none!important]"></div>
                                </a>
                            </div>
                            <div className="box-border text-[1.13em] font-normal leading-normal text-[rgb(67,_85,_75)] opacity-80 relative z-[5] [scrollbar-width:none!important]">The analysis was very profound, even though the business model is rather new and experimental. Every result and figure was marked with the source and every calculation can be reconsidered</div>
                            <img src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ec45d3256eff900454a0a2_Quotes-icon-New.svg" loading="lazy" alt="" className="border-[0px] box-border max-w-full align-middle inline-block right-[2.5em] top-[4em] left-auto bottom-auto w-[7.06em] absolute [scrollbar-width:none!important]"></img>
                            <div className="box-border w-full gap-[1em] items-center mt-auto pt-[2em] flex relative [scrollbar-width:none!important]">
                                <div className="box-border w-full h-px opacity-10 origin-[0%_center] absolute [scrollbar-width:none!important] [transform:translate3d(0px,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]"></div>
                                <div className="box-border w-[3.75em] h-[3.75em] bg-[50%_center] bg-no-repeat bg-cover rounded-[1000px] flex-[0_0_auto] [scrollbar-width:none!important]"></div>
                                <div className="box-border gap-[0.2em] flex-col flex [scrollbar-width:none!important]">
                                    <h3 className="box-border mb-0 font-bold mt-0 text-[1.25em] leading-[1.4] [transition:color_0.2s] tracking-[0.5px] text-[rgb(67,_85,_75)] [scrollbar-width:none!important]">Oliver Lauche</h3>
                                    <div className="box-border tracking-[3px] uppercase text-[0.75em] font-medium leading-[1.1] text-[rgb(67,_85,_75)] opacity-40 [scrollbar-width:none!important]">Founder of Witjaw</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box-border rounded-[24px] w-[26em] text-[1.0582010582010584vw] h-[34em] gap-[2em] bg-[rgb(228,_236,_227)] flex-col items-start p-[2.5em] flex relative [scrollbar-width:none!important]">
                            <div className="box-border gap-[0.5em] w-full flex-row flex [scrollbar-width:none!important]">
                                <div className="box-border flex-col  justify-center items-center px-[1.2em] py-[0.6em] flex relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border opacity-70 rounded-[1000px] z-0 w-full h-full bg-[rgb(201,_220,_198)] absolute inset-0 [scrollbar-width:none!important]"></div>
                                    <div className="box-border text-[1em] font-medium leading-[1.4] text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important]">57 of 324</div>
                                </div>
                                <a href="https://www.fiverr.com/dikovh" target="_blank" className="bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)] no-underline flex-col justify-center items-center px-[1.2em] py-[0.6em] relative overflow-hidden [scrollbar-width:none!important]">
                                    <div className="box-border text-[1em] font-medium leading-none text-[rgb(67,_85,_75)] relative [scrollbar-width:none!important] whitespace-nowrap pointer-events-none">Read more</div>
                                    <div className="box-border rounded-[1000px] z-0 w-full h-full border-[2px] border-[solid] border-[rgb(201,220,198)] [transition:border-color_0.1s] absolute [scrollbar-width:none!important]"></div>
                                </a>
                            </div>
                            <div className="box-border text-[1.13em] font-normal leading-normal text-[rgb(67,_85,_75)] opacity-80 relative z-[5] [scrollbar-width:none!important]">The analysis was very profound, even though the business model is rather new and experimental. Every result and figure was marked with the source and every calculation can be reconsidered</div>
                            <img src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ec45d3256eff900454a0a2_Quotes-icon-New.svg" loading="lazy" alt="" className="border-[0px] box-border max-w-full align-middle inline-block right-[2.5em] top-[4em] left-auto bottom-auto w-[7.06em] absolute [scrollbar-width:none!important]"></img>
                            <div className="box-border w-full gap-[1em] items-center mt-auto pt-[2em] flex relative [scrollbar-width:none!important]">
                                <div className="box-border w-full h-px opacity-10 origin-[0%_center] absolute [scrollbar-width:none!important] [transform:translate3d(0px,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]"></div>
                                <div className="box-border w-[3.75em] h-[3.75em] bg-[50%_center] bg-no-repeat bg-cover rounded-[1000px] flex-[0_0_auto] [scrollbar-width:none!important]"></div>
                                <div className="box-border gap-[0.2em] flex-col flex [scrollbar-width:none!important]">
                                    <h3 className="box-border mb-0 font-bold mt-0 text-[1.25em] leading-[1.4] [transition:color_0.2s] tracking-[0.5px] text-[rgb(67,_85,_75)] [scrollbar-width:none!important]">Oliver Lauche</h3>
                                    <div className="box-border tracking-[3px] uppercase text-[0.75em] font-medium leading-[1.1] text-[rgb(67,_85,_75)] opacity-40 [scrollbar-width:none!important]">Founder of Witjaw</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
                <div className="box-border w-[114%] gap-0 justify-between -ml-[7%] flex absolute [scrollbar-width:none!important]">
                    <a onMouseEnter={() => handleLeftHover(true)} onMouseLeave={() => handleLeftHover(false)} href="#" role="button" ref={prevRef} aria-label="Previous slide" aria-controls="swiper-wrapper-788f10319f567175" aria-disabled="false" className=" bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)]  no-underline w-[3em] h-[3em] flex-col justify-center items-center relative [scrollbar-width:none!important]">
                        <div data-w-id="375e1af4-b5a1-12d5-aa6a-0137bd509bb2" className="box-border w-full h-full flex-col justify-center items-center flex absolute rotate-180 [scrollbar-width:none!important]">
                            <div className="box-border w-[3.2em] h-[3.2em] rounded-[100px] flex-col justify-center items-center text-[16px] flex absolute overflow-hidden [scrollbar-width:none!important]">
                                <div className="box-border w-full h-full rounded-[100px] z-[2] flex-col justify-center items-center flex absolute overflow-hidden [scrollbar-width:none!important]">
                                    <Image style={{ transform: lefthover ? 'translateX(400%)' : '' }} alt='' src={addificoleftarow} className="border-[0px] duration-300 box-border max-w-full align-middle inline-block opacity-60 z-[2] w-[30%] flex-[0_0_auto] absolute [scrollbar-width:none!important] [transform:translate3d(0%,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]" />
                                    <Image style={{ transform: lefthover ? 'translateX(0%)' : 'translateX(-400%)' }} alt='' src={addificoleftarow} className="border-[0px] box-border max-w-full align-middle flex opacity-60 z-[5] w-[30%] flex-col flex-[0_0_auto] justify-center items-center absolute duration-300 [transform:translate3d(-400%,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [scrollbar-width:none!important] [transform-style:preserve-3d]" />


                                </div>
                                <div className="box-border z-0 w-full h-full opacity-100 bg-[rgba(0,_0,_0,_0.2)] rounded-[100px] relative [scrollbar-width:none!important]"></div>
                                <div style={{ transform: lefthover ? 'translateX(0%)' : '' }} className="box-border w-[110%] h-[110%] min-h-[110%] min-w-[110%] opacity-100 bg-[rgba(67,_85,_75,_0.7)] rounded-[100px] absolute duration-300 [transform:translate3d(-110%,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [scrollbar-width:none!important] [transform-style:preserve-3d]"></div>
                            </div>
                        </div>
                    </a>
                    <a onMouseEnter={() => handleRightHover(true)} onMouseLeave={() => handleRightHover(false)} href="#" role="button" ref={nextRef} aria-label="Next slide" aria-controls="swiper-wrapper-788f10319f567175" aria-disabled="false" className="bg-transparent box-border max-w-full flex text-[rgb(220,_239,_216)] no-underline  w-[3em] h-[3em] flex-col justify-center items-center relative [scrollbar-width:none!important]">
                        <div data-w-id="375e1af4-b5a1-12d5-aa6a-0137bd509bba" className="box-border w-full h-full flex-col justify-center items-center flex absolute [scrollbar-width:none!important]">
                            <div className="box-border w-[3.2em] h-[3.2em] rounded-[100px] flex-col justify-center items-center text-[16px] flex absolute overflow-hidden [scrollbar-width:none!important]">
                                <div className="box-border w-full h-full z-[2] rounded-[100px] flex-col justify-center items-center flex absolute overflow-hidden [scrollbar-width:none!important]">
                                    <Image style={{ transform: righthover ? 'translateX(400%)' : '' }} src={addificoleftarow} alt='' className='border-[0px] box-border max-w-full align-middle inline-block opacity-60 z-[2] w-[30%] duration-300 flex-[0_0_auto] absolute [scrollbar-width:none!important] [transform:translate3d(0%,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [transform-style:preserve-3d]' />
                                    <Image style={{ transform: righthover ? 'translateX(0%)' : '' }} src={addificoleftarow} alt='' className='border-[0px] box-border max-w-full align-middle flex opacity-60 w-[30%] z-[5] duration-300 flex-col flex-[0_0_auto] justify-center items-center absolute [transform:translate3d(-400%,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [scrollbar-width:none!important] [transform-style:preserve-3d]' />

                                </div>
                                <div className="box-border z-0 w-full h-full opacity-100 bg-[rgba(0,_0,_0,_0.2)] rounded-[100px] relative [scrollbar-width:none!important]"></div>
                                <div style={{ transform: righthover ? 'translateX(0%)' : '' }} className="box-border w-[110%] h-[110%] duration-300 min-h-[110%] min-w-[110%] opacity-100 bg-[rgba(67,_85,_75,_0.7)] rounded-[100px] absolute [transform:translate3d(-110%,_0px,_0px)_scale3d(1,_1,_1)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)_skew(0deg,_0deg)] [scrollbar-width:none!important] [transform-style:preserve-3d]"></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards
