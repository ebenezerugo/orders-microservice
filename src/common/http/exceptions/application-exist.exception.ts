import { ConflictException } from '@nestjs/common';
import { ErrorType } from '@common/enums';

export class ApplicatonExistException extends ConflictException {
  constructor() {
    super({
      errorType: ErrorType.TermSettingsExist,
      message: `Application already exist`,
    });
  }
}
