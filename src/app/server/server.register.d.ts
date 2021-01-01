declare namespace Micra {
  interface Services {
    server: import('express').Express;
    request: import('express').Request;
    response: import('express').Response;
  }

  export interface Config {
    server: import('app/server/types').ServerConfig;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
  }
}
