import { notifyError, notifyWarning } from '@/utils/NotificationUtils';
import ErrorTypes from './models/ErrorTypes';

abstract class ErrorHandler {
  protected error: Error;

  protected message: string | null | undefined;

  protected type: ErrorTypes;

  public constructor(
    error: Error,
    message?: string | null,
    type: ErrorTypes = ErrorTypes.DANGER,
  ) {
    this.error = error;
    this.message = message;
    this.type = type;

    this.handleError();
  }

  handleError(): void {
    this.logError();
    if (this.message) this.notifyError(this.message);
  }

  logError(): void {
    console.log(`[Skaalab][${this.constructor.name}]`, this.error);
  }

  notifyError(message: string): void {
    switch (this.type) {
      case ErrorTypes.WARNING:
        notifyWarning(message);
        break;
      default:
        notifyError(message);
        break;
    }
  }
}

export default ErrorHandler;
