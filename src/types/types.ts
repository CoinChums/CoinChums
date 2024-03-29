import { APP_ROUTES } from '../constants/enums';

export type NavigationParams = {
  [APP_ROUTES.launch]: undefined;
  [APP_ROUTES.home]: undefined;
  [APP_ROUTES.details]: undefined;
  [APP_ROUTES.profile]: undefined;
  [APP_ROUTES.homeStack]: undefined;
  [APP_ROUTES.profileStack]: undefined;
  [APP_ROUTES.settings]: undefined;
  [APP_ROUTES.onboarding]: undefined;
  [APP_ROUTES.auth]: { isSignup: boolean };
  [APP_ROUTES.groups]: undefined;
};

export type TNavRoutes = {
  Authentication: { isSignup: boolean };
};
