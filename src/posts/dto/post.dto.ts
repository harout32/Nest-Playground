import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class PostDto {
    @ApiProperty()
    @IsString()
    message: string;
    @ApiProperty()
    @IsInt()
    id: number;
}