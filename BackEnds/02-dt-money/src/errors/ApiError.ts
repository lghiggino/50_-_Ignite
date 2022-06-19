export class ApiError extends Error {
    public statusCode: number;
    public errors: any
    public cause?: Error
    constructor(name: string, statusCode: number, message?: string, cause?: Error) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        this.cause = cause;
    }
}

export class UniqueError extends ApiError {
    constructor(message: string, cause?: Error) {
        super("UniqueError", 409, message, cause)
    }
}
