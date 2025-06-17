declare global {
  function ll(message?: any, ...optionalParams: any[]): void;

  // eslint-disable-next-line no-var
  var isEnvDevelopment: boolean;
  // eslint-disable-next-line no-var
  var isEnvProduction: boolean;
}

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

globalThis.isEnvDevelopment = (window as any).$$AppConfig.env === 'development';
globalThis.isEnvProduction = (window as any).$$AppConfig.env === 'production';

export {};
