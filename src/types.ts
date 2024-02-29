export type PostType = {
    id: number;
    text: string;
    op: string;
    voteCount: number;
    replies?: PostType[];
};