import getConfiguration from "./environment.global";
import { EnvironmentInteface } from "./environment.interface";

const path = window.location.hostname.includes('localhost') ? 'LOCAL': 'PROD';
const configuration = getConfiguration(path);

export const environment: Required<Readonly<EnvironmentInteface>> = {
    production: configuration.production,
    publicPath: configuration.publicPath,
};