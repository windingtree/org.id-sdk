export type Status =
  | 'OK'
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'METHOD_NOT_ALLOWED'
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_IMPLEMENTED'
  | 'BAD_GATEWAY'
  | 'SERVICE_UNAVAILABLE';

export type Code = 200 | 400 | 401 | 403 | 404 | 405 | 500 | 501 | 502 | 503;

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';

export type HttpStatuses = {
  [key in Status]: Status
}

export type Methods = {
  [key in Method]: Method
}

export type HttpStatusCodes = {
  [key in Status]: Code
}

// HTTP status
export const HTTP_STATUS: HttpStatuses = {
  OK: 'OK',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
  BAD_GATEWAY: 'BAD_GATEWAY',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
};

// HTTP status codes
export const HTTP_STATUS_CODES: HttpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};

// HTTP methods
export const HTTP_METHODS: Methods = {
  GET: 'GET',
  get: 'GET',
  POST: 'POST',
  post: 'POST',
  PUT: 'PUT',
  put: 'PUT',
  DELETE: 'DELETE',
  delete: 'DELETE',
  PATCH: 'PATCH',
  patch: 'PATCH',
  head: 'HEAD',
  HEAD: 'HEAD',
  options: 'OPTIONS',
  OPTIONS: 'OPTIONS',
  purge: 'PURGE',
  PURGE: 'PURGE',
  link: 'LINK',
  LINK: 'LINK',
  unlink: 'UNLINK',
  UNLINK: 'UNLINK'
};
