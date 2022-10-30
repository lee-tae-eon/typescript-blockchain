interface Config {
  urls: string;
}

interface Code {
  test: number;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: Code): number;
}
