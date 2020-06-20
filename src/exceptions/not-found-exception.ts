import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor(hint?: string) {
        super({
            status: HttpStatus.NOT_FOUND,
            message: 'recourse not found',
            hint
        },
            HttpStatus.NOT_FOUND
        );
    }
}