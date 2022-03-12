export class Friendship {
    constructor(
        private friend_follower_id: string,
        private friend_followed_id: string
    ) { }

    public getFriendFollower(): string {
        return this.friend_follower_id
    }

    public getFriendFollowed(): string {
        return this.friend_followed_id
    }
}

export type FriendshipInputDTO = {
    friend_followed_id: string
}
