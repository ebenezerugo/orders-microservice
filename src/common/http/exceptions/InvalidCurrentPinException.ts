import { ForbiddenException } from '@nestjs/common';
import { ErrorType } from '@common/enums';

export class InvalidCurrentPinException extends ForbiddenException {
  constructor() {
    super({
      errorType: ErrorType.InvalidCurrentPin,
      message: 'The current pin is invalid.',
    });
  }
}
