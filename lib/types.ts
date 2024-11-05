
export interface CommentProps {
    id: number;
    text: string;
    children?: CommentProps[];

}
export type FullPost = {
    title: string;
    "full-desc": string;
    "main-desc": string;
    "proof-main-content": string;
    tags: string[];
    slug: string;
    "comments": CommentProps[];

}