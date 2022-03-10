import { Post } from "../model/post";
import BaseDatabase from "./BaseDatabase";

export class PostDatabase extends BaseDatabase{
    protected TABLE_NAME = 'Labook_Post'

    public insertPost = async (post: Post) => {
        await BaseDatabase.connection(this.TABLE_NAME)
            .insert(post)
    }
}