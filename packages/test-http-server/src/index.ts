import http, {
  Server,
  ClientRequest,
  ServerResponse
} from 'http';

export type { http }

export type MimeKeys = 'html' | 'text' | 'json';

export type AllowedMimes = 'text/html' | 'text/plain' | 'application/json';

export type Mimes = {
  [key in MimeKeys]: AllowedMimes
}

export type File = {
  type: MimeKeys;
  path: string;
  content: string | Record<string, unknown>;
}

export type Files = {
  [path: string]: File
}

// Http server port counter
// @todo Implement maximum port value feature
let port = 10000;

export class HttpFileServer {
  port: number;
  baseUri: string;
  mime: Mimes = {
    'html': 'text/html',
    'text': 'text/plain',
    'json': 'application/json'
  };
  server: Server | null = null;
  files: Files = {};

  constructor(shift = 0) {
    if (shift > 0) {
      port = port + shift;
    }
  }

  start(): Promise<Server> {
    this.port = port++;
    this.baseUri = `http://0.0.0.0:${this.port}`;
    this.server = http.createServer(this.reqHandler.bind(this));

    return new Promise(
      (resolve, reject) => (this.server as Server).listen(
        this.port,
        (error: void | Error) => {

          if (error) {
            return reject(error);
          }

          resolve(this.server as Server);
        }
      )
    );
  }

  close(): void {
    if (this.server) {
      this.server.close();
    }

    this.server = null;
  }

  reqHandler(request: ClientRequest, res: ServerResponse): void {
    const req: any = request; // Because of ClientRequest have an outdated types definition
    const path = req.url.replace(/^\//, '');

    if (!this.files[path]) {
      res.statusCode = 404;
      res.statusMessage = http.STATUS_CODES[res.statusCode] as string;
      res.end();
      return;
    }

    res.writeHead(200, {
      'Content-Type': this.mime[this.files[path].type]
    });
    res.end(this.files[path].content);
  }

  addFile(file: File): File {
    if (!file.type) {
      throw new Error('Property "type" required');
    }

    if (!/^html|text|json$/.exec(file.type)) {
      throw new Error('Property "type" has wrong type');
    }

    if (!file.path) {
      throw new Error('Property "path" required');
    }

    if (!file.content) {
      throw new Error('Property "content" required');
    }

    file = Object.assign({}, file);
    this.files[file.path] = file;
    return this.files[file.path];
  }

  removeFile(path: string): void {
    if (!this.files[path]) {
      throw new Error(`File not found: ${path}`);
    }

    delete this.files[path];
  }
}
