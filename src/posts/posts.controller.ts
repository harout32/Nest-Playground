import { Controller, Get, Param, Post, Body, HttpException, HttpStatus, Put, Delete } from '@nestjs/common';
import { NotFoundException } from 'src/exceptions/not-found-exception';
import { PostsService } from './posts.service';
import { PostInt } from './interfaces/post.interface';
import { PostDto } from './dto/post.dto';



@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }
    /**
     *
     *
     * @returns {PostInt[]}
     * @memberof PostsController
     */
    @Get('')
    getAll(): PostInt[] {
        return this.postsService.findAll();
    }
    /**
     *
     *
     * @param {string} id
     * @returns {string}
     * @memberof PostsController
     */
    @Get(':id')
    findOne(@Param('id') id: string): string {
        if (id === 'haha') {
            return 'haha';
        } else {
            throw new NotFoundException('the post you are trying to access is not found!');
        }
    }
    /**
     *
     *
     * @param {PostDto} postDto
     * @memberof PostsController
     */
    @Post()
    async add(@Body() postDto: PostDto) {
        this.postsService.create(postDto);
    }

    /**
     *
     *
     * @param {string} id
     * @param {PostDto} postDto
     * @returns
     * @memberof PostsController
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() postDto: PostDto) {
        return `This action updates a #${id} cat`;
    }
    /**
     *
     *
     * @param {string} id
     * @returns
     * @memberof PostsController
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} post`;
    }

}
