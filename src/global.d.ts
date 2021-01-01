/**
 * Use:
 * This is the global helper that gives access to
 * the service container. It's an easy way to
 * resolve registered services.
 */
declare const use: Use;
type Use = <K extends keyof Micra.Services>(namespace: K) => Micra.Services[K];

/**
 * Config:
 * This is the global helper that gives access to the app's
 * configurations. It's an easy way to resolve the
 * registered config for the services.
 */
declare const config: Config;
type Config = <K extends keyof Micra.Config, R extends Micra.Config[K]>(
  namespace: K,
  fallback?: R,
) => R;

/**
 * Env:
 * This is the global helper that gives access to the app's
 * environmental variables. It's an easy way to resolve
 * the registered variables.
 */
declare const env: Env;
type Env = {
  <K extends keyof NodeJS.ProcessEnv>(variable: K):
    | NodeJS.ProcessEnv[K]
    | undefined;
  <K extends keyof NodeJS.ProcessEnv>(
    variable: K,
    fallback: NodeJS.ProcessEnv[K],
  ): NodeJS.ProcessEnv[K];
};

/**
 * Global:
 * Extension of the global Global object.
 * This will be available in the
 * server.
 */
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
  }

  interface Global {
    config: Config;
    use: Use;
    env: Env;
  }
}
