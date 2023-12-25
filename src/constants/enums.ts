enum STORAGE_KEYS {
  APP_THEME = 'APP_THEME',
  APP_LANGUAGE = 'APP_LANGUAGE',
  FIRST_LAUNCH = 'FIRST_LAUNCH',
  PROFILE_DATA = 'PROFILE_DATA',
}

enum APP_ROUTES {
  homeStack = 'HomeStack',
  profileStack = 'ProfileStack',
  launch = 'Launch',
  home = 'Home',
  details = 'Details',
  profile = 'Profile',
  settings = 'Settings',
  onboarding = 'Onboarding',
}

enum APP_LABELS {
  HOME = 'Home',
  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}

enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum SCREEN_STATE {
  'ERROR' = 'ERROR',
  'SUCCESS' = 'SUCCESS',
  'NONE' = 'NONE',
  'LOADING' = 'LOADING',
}

enum ASYNC_STORAGE {
  IS_FIRSTLAUNCH = 'appLaunched',
}

export { APP_LABELS, APP_ROUTES, GENDER, SCREEN_STATE, STORAGE_KEYS, ASYNC_STORAGE };
