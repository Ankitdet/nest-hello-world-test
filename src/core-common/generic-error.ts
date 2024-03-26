import { HttpStatus } from '@nestjs/common'

const isStringified = (str: any) => {
    try {
        return JSON.parse(str)
    } catch (err) {
        return str
    }
}

export class GenericError {
    public message: string
    public statusCode: HttpStatus
    public errorCode: string

    constructor(errorCode: string, message: string, statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR) {
        this.errorCode = errorCode
        this.message = isStringified(message)
        this.statusCode = statusCode
    }
}
