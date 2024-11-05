
export const revalidate = 0
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../../fonts/fonts'
import parse from 'html-react-parser'
import Comment from '@/components/Comment';
import { FullPost } from '@/lib/types';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';
type fullPostResponse = {
    data: FullPost | null;   // Array of Post objects or null if empty
    error: PostgrestError | null;  // Supabase error type
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    // const [comments, setComments] = useState([])

    const slug = (await params).slug
    // console.log(slug);

    const { data: post, error }: fullPostResponse = await supabase
        .from('social-proof-posts')
        .select('full-title, full-desc,proof-main-content, tags, slug, comments')
        .eq('slug', slug)
        .single()


    // console.log(post?.['proof-main-content']);

    if (error) {
        console.error('Error fetching post:', error)
        // setError(error.message)
    } else {
        // setPost(post)
    }



    return (
        <div className={`${DMSansReg.className} overflow-hidden `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                {/* <div className=' w-[200px] bg-inherit z-[1] '></div> */}
                <div className='flex  bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-8'>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1000px] border-[2.5px] min-h-[320px] border-solid border-black   mx-0 ' dangerouslySetInnerHTML={{ __html: post ? post?.['proof-main-content'] : '' }} >
                                    {/* {parse(post ? post?.['proof-main-content'] : '')} */}

                                </li>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black   mx-0 my-2 bg-[#FFFBF8]'>

                                    <div className={`${DMSansReg.className} font-normal text-[20px] leading-[1.65rem] tracking-tight  mt-14 mx-4 h-[245px] bg-[#83DCB6] px-10 py-8 `}>
                                        <p className='w-[771px] tracking-[-.01em] text-[#102415] leading-[2.2]'>Seeing 100% placement reports from B-schools, you might assume that it’s worth
                                            pursuing MBA & you will definitely get placed at the end, but the reality is completely
                                            different. It’s time you start thinking and stop falling for not so true placement stats
                                            of B-schools </p>
                                    </div>
                                </li>

                                <li className={`${QuandoRegular.className} font-normal text-[1.125rem] my-3 leading-[1.4rem] tracking-tight`}>It’s time to understand & rethink by reading these comments</li>

                                {
                                    post?.comments.map((comment, index) => (<Comment key={index} comment={comment} hascorner={false} lastone={false} />))
                                }

                                {/* <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-min border-solid border-black   mx-0 pb-3 pr-3  bg-[#FFFBF8]'>
                                    <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.065rem] leading-[2] w-auto tracking-[-.005em] mx-8 py-6 text-[#100C0A]/[.9]`}>

                                        They make you sign a document before placements starts. Which basically says that the placement
                                        team can do whatever the f they want and you agree to it because without it you are debarred <br />
                                        from sitting for placements. Messed up system
                                    </p>
                                </li>
                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-min border-solid border-black   mx-0 pb-3 pr-3 bg-[#FFFBF8] mb-6'>
                                    <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.065rem] leading-[2] w-auto tracking-[-.005em] mx-8 py-6 text-[#100C0A]/[.9]`}>

                                        So I know from very close sources that the folks who generally are asked to opt out are those who have
                                        been unable to get any placements even after 2-3 months of attending interviews. These are the last
                                        30% students who cannot really get past the interviews due to skill mismatch or communication skills
                                        gap,  etc. So this kind of opt out message is not forced and is not a pressure tactic. It&apos;s the college saying
                                        I have tried my best to get companies to the college and give you enough opportunities to get through,
                                        but now even I can&apos;t help you since I cannot guarantee more companies in the future since it&apos;s already
                                        2-3 months past the placement start date.
                                    </p>
                                </li> */}

                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
