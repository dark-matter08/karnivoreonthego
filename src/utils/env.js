import {Platform} from 'react-native';
const localHost = 'http://localhost:5001/mealstogo-3ca1b/us-central1';
const liveHost = 'https://us-central1-mealstogo-3ca1b.cloudfunctions.net';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const isAndroid = Platform.OS === 'android';

export const isMock = 'false';

export const host = !isDevelopment || isAndroid ? liveHost : localHost;
// export const host = liveHost;
