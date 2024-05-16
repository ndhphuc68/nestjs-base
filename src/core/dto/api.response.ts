export class ApiResponseDto<T> {
  status: boolean;
  data: T | T[];
  message: string;

  constructor(status: boolean, data: T[] | T, message: string) {
    this.status = status;
    this.data = data;
    this.message = message;
    return this;
  }
}
