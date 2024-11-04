export const revalidate = 0
import React from 'react'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { PostgrestError } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'
type Post = {
    'short-title': string;
    "short-desc": string;
    tags: string[];
    slug: string;
}


type PostsResponse = {
    data: Post[] | null;   // Array of Post objects or null if empty
    error: PostgrestError | null;  // Supabase error type
}
// type Post=Database["public"]["Tables"]["posts"]["Row"]


const page = async () => {

    const { data: posts, error }: PostsResponse = await supabase.from('social-proof-posts').select('short-title,short-desc,tags,slug');
    console.log(posts);

    if (error) {
        console.error("Error fetching posts:", error);
        return <div>Error loading posts</div>;
    }
    return (
        <div className={`${DMSansReg.className}  `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                {/* <div className=' w-[200px] bg-inherit z-[1] '></div> */}
                <div className='flex  bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1000px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-12'>


                                {
                                    posts?.map((post: Post, index: number) => {
                                        return (
                                            <Link href={`/social-proofs/${post?.slug}`} target='_blank'>
                                                <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                                    </div>
                                                    <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                                        <div className=''>
                                                            <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>{post?.['short-title']}</h2>
                                                            <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>{post?.['short-desc']}</h3>
                                                            <div className='flex gap-4'>
                                                                {
                                                                    post?.tags?.map((tag, index) => <div key={index} className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>

                                                                        {tag}</div>)
                                                                }


                                                            </div>
                                                        </div>


                                                    </div>
                                                    {/* <div className='absolute top-[40px] right-[62px]'>
                          <img src={bookmark} alt='' />
                        </div> */}
                                                </li>

                                            </Link>
                                        )
                                    })
                                }

                                <Link href="/social-proofs/no_coding_bootcamps_wont_place_you_at_a_10_lpa" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>No, Coding Bootcamps won't place you at a 10 LPA package and...</h2>
                                                <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>I joined a coding bootcamp 1 year back as I was interested in big data, coding and well, money!

                                                    Here are the promises they made us:</h3>
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        bootcamp</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        reality</div>

                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </Link>

                                <Link href="/social-proofs/this_guy_striver_has_scammed_so_many_people_with" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>this guy striver has scammed so many people with TUF+...</h2>
                                                {/* <Image src={ } alt=''/> */}

                                                <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>i noticed that the problem sets and questions available in tuf+ are the same as his youtube free content...no videos explaining hashing and queues .</h3>
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        bootcamp</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        reality
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </Link>



                                <Link href="/social-proofs/got_scammed_by_tuf_disappointedsaw_a_lot_of" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>got scammed by TUF+ ..disappointed...saw a lot of comments like this...</h2>
                                                {/* <Image src={ } alt=''/> */}

                                                {/* <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>i noticed that the problem sets and questions available in tuf+ are the same as his youtube free content...no videos explaining hashing and queues .</h3> */}
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        bootcamp</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        reality
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </Link>

                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
