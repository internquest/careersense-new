export const revalidate = 0
import React from 'react'
import { supabase } from '../../lib/supabaseClient'
import { Database } from '@/lib/database.types'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'
import { PostgrestError } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
type Post = {
    'initial-title': string;
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


    const { data: posts, error }: PostsResponse = await supabase.from('posts').select('initial-title,short-desc,tags,slug');
    console.log(posts);

    if (error) {
        console.error("Error fetching posts:", error);
        return <div>Error loading posts</div>;
    }

    return (
        <div className={`${DMSansReg.className}  `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-12'>

                                {
                                    posts?.map((post, id) => (
                                        <a href={`/${post?.slug}`} key={id}>
                                            <li className='relative border min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                                <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>

                                                </div>
                                                <div className='mx-auto  h-full bg-[#FFFFFF]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                                    <div className=''>
                                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>{post["initial-title"]}</h2>
                                                        <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>{post["short-desc"]}</h3>
                                                        <div className='flex gap-4'>

                                                            {
                                                                post?.tags?.map((tag, id) => (
                                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`} key={id}>

                                                                        {tag}
                                                                    </div>
                                                                ))
                                                            }

                                                        </div>
                                                    </div>


                                                </div>
                                                {/* <div className='absolute top-[40px] right-[62px]'>
                                      <img src={bookmark} alt='' />
                                    </div> */}
                                            </li>

                                        </a>

                                    ))
                                }


                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page

// export async function getServerSideProps() {
//     // Fetch data from Supabase
//     const { data: posts, error } = await supabase
//         .from('posts')
//         .select('*');

//     if (error) {
//         console.error("Error fetching posts:", error);
//         return { props: { posts: [] } };
//     }

//     return { props: { posts } };
// }