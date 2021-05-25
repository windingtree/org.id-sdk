import {
  Status,
  Code,
  HTTP_STATUS_CODES,
} from '../http';

export type ErrorArgs = [string, Status?];

export interface HttpError {
  code: Code,
  status: Status
}

/**
 * Generate custom error with HTTP codes support
 * @example
 * new HttpError('Cannot find you in the list', 'FORBIDDEN');
 */
export class HttpError extends Error {
  constructor (...args: ErrorArgs) {
    super(args[0]);
    this.code = HTTP_STATUS_CODES[args[1]] || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    this.status = args[1];
  }
}
