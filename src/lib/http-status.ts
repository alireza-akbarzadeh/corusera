// http-status-code.ts

export enum HttpStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,

  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,

  MovedPermanently = 301,
  Found = 302,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  RequestTimeout = 408,
  Conflict = 409,
  UnprocessableEntity = 422,
  TooManyRequests = 429,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
}
// http-status-text.ts

export const HttpStatusText: Record<HttpStatusCode, string> = {
  [HttpStatusCode.Continue]: "Continue",
  [HttpStatusCode.SwitchingProtocols]: "Switching Protocols",

  [HttpStatusCode.OK]: "OK",
  [HttpStatusCode.Created]: "Created",
  [HttpStatusCode.Accepted]: "Accepted",
  [HttpStatusCode.NoContent]: "No Content",

  [HttpStatusCode.MovedPermanently]: "Moved Permanently",
  [HttpStatusCode.Found]: "Found",

  [HttpStatusCode.BadRequest]: "Bad Request",
  [HttpStatusCode.Unauthorized]: "Unauthorized",
  [HttpStatusCode.Forbidden]: "Forbidden",
  [HttpStatusCode.NotFound]: "Not Found",
  [HttpStatusCode.MethodNotAllowed]: "Method Not Allowed",
  [HttpStatusCode.RequestTimeout]: "Request Timeout",
  [HttpStatusCode.Conflict]: "Conflict",
  [HttpStatusCode.UnprocessableEntity]: "Unprocessable Entity",
  [HttpStatusCode.TooManyRequests]: "Too Many Requests",

  [HttpStatusCode.InternalServerError]: "Internal Server Error",
  [HttpStatusCode.NotImplemented]: "Not Implemented",
  [HttpStatusCode.BadGateway]: "Bad Gateway",
  [HttpStatusCode.ServiceUnavailable]: "Service Unavailable",
};
