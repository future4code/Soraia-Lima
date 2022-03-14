export class Like {
    constructor(
        private post_id: string,
        private user_id: string
    ) { }

    public getPostId(): string {
        return this.post_id
    }

    public getUserId(): string {
        return this.user_id
    }
    static toLikeModel(data: Like) {
        return new Like(data.post_id, data.user_id)
    }
}

export type LikeInputDTO = {
    post_id: string
}