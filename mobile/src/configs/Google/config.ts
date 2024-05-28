import { GOOGLE_CLIENT_ID, GOOGLE_EMAIL_FULL_NAME_SCOPE } from './constants';

const config = {
  webClientId: GOOGLE_CLIENT_ID,
  scopes: [GOOGLE_EMAIL_FULL_NAME_SCOPE],
};

export default config;
