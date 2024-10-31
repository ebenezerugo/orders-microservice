import { ConflictException } from '@nestjs/common';
import { ErrorType } from '@common/enums';

export class CustomerExistException extends ConflictException {
  constructor(name: string) {
    super({
      errorType: ErrorType.TermSettingsExist,
      message: `Customer with ${name} already exist`,
    });
  }
}
