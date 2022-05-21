export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): {
    message: string;
    feild?: string;
    success: boolean;
  }[];
}
