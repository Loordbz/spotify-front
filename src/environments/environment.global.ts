const environmentGlobal = {
  LOCAL: {
    production: true,
    publicPath: 'http://localhost:4200/',
    
  },
  PROD: {
    production: true,
    publicPath: '',
  },
};

export default function getConfiguration(path: string) {
  switch (path) {
    case 'LOCAL':
      return environmentGlobal.LOCAL;
    case 'PROD':
      return environmentGlobal.PROD;
    default:
      return environmentGlobal.LOCAL;
  }
}