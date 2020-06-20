import { Injectable } from '@nestjs/common';
import { PostInt } from './interfaces/post.interface';
@Injectable()
export class PostsService {

    private readonly posts: PostInt[] = [];

    create(post: PostInt) {
        this.posts.push(post);
    }

    findAll(): PostInt[] {
        return this.posts;
    }

}
