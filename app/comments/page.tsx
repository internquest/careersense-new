import React from 'react'
import Comment, { CommentProps } from "@/components/Comment";
import Image from "next/image";


const commnets: CommentProps[] = [
    {
        id: 1,
        text: `They make you sign a document before placements starts. Which basically says that the placement 
team can do whatever the f they want and you agree to it because without it you are debarred 
from sitting for placements. Messed up system`,
    },
    {
        id: 2,
        text: `So I know from very close sources that the folks who generally are asked to opt out are those who have 
been unable to get any placements even after 2-3 months of attending interviews. These are the last 
30% students who cannot really get past the interviews due to skill mismatch or communication skills 
gap,  etc. So this kind of opt out message is not forced and is not a pressure tactic. It's the college saying 
I have tried my best to get companies to the college and give you enough opportunities to get through, 
but now even I can't help you since I cannot guarantee more companies in the future since it's already 2-3 months past the placement start date.`,
        children: [
            {
                id: 3,
                text: `Agree to everything. But then that clearly means that they don't/can't provide 100% placements.  Which is the 
primary reason this "opt-out" scheme is being implemented in the first place`,
                children: [
                    {
                        id: 4,
                        text: `Oh yes that's true. They take in a lot of people but do not have true 100% placements. 100%  is only after 
the optouts.`,
                    },
                ],
            },
            {
                id: 5, text: `This is nothing new. I know of three other MBA colleges that did something similar with the '23 batch.  I was part of 
one. They make you sign a document before placements with unethical rules such as this. The worst thing is the 
faculties are in on it. When few students decided to speak up, a meeting was called with the placement faculty 
incharge who then proceeded to call the students on stage and humiliated them as well as threatened them of 
punishing them by not allowing them to appear for 3 dream companies. Tier 2 and below MBA colleges do anything 
to protect the 100% placement stat and also inflate their ctcs by any means necessary.` },
        ],
    },
    {
        id: 6,
        text: `Indian colleges are all about placements, they will do anything to make their stats look good. `,
    },
    {
        id: 7,
        text: `This is great example that students, aspirants and parents should not blankly look at the brochure but take feedback from
 recent graduates as well to get the check of reality.

Further, some folks are asking why would students give such a certificate, it's simple when you are under placement 
pressure that too with MBA curriculum, you will agree to anything that institutes ask you to do specially regarding 
placements.`,
    },
    {
        id: 8,
        text: `How is this new? This is a well-known tactic used in all biz colleges across the country where placement isn't 100%, even 
the newer IIMs.`,
    },
    {
        id: 9,
        text: `MBA colleges have this thing from a long time. Just put “opted out of placements” for people who haven’t got placed. 
They have been doing these on their admission brochures. The placement team is formed in the first year itself and people 
who are close friends of the placement committee gets the best placement and their CVs are pushed. Similar with the 
placement committee. This is the sad reality.`,
    }


];
const page = () => {
    return (
        <div className="bg-white text-black h-full w-full p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            {commnets.map((comment, index) => (
                <Comment comment={comment} key={comment.id} indexed={index} />
            ))}
        </div>
    )
}

export default page
