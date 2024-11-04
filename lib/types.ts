type subcomment = {
    comment: string;
    'subcomment': [];
}

export type FullPost = {
    title: string;
    "full-desc": string;
    "main-desc": string;
    tags: string[];
    slug: string;
    "comments": subcomment[];

}