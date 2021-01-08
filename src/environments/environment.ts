// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //  SERVER_URL: `http://10.10.0.54:8014`,
  SERVER_URL: `https://dev-iot-dvlp.knowin.com`,
  CONTROLLER_URL: `https://dev-iot-api.knowin.com`,
  ACCOUNT_URL: `https://dev-iot-account.knowin.com`,
  AP_URL: 'dev-iot-ap.knowin.com',
  GUIDE_URL: 'https://dev-iot-guide.knowin.com',
  DEVICE_URL: 'https://dev-iot-spec.knowin.com',
  MIOT_URL: 'http://miot-spec.org',
  VERSION: require('../../package.json').version,
  mock: false,
  prod: false,
  useHash: true,
  dev: false,
  stage: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
