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
  auth = 'Authentication',
}

enum APP_LABELS {
  HOME = 'Home',
  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}

enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
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

enum STATUS {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  ARCHIVED = 'Archived',
}

enum LANGUAGE {
  EN = 'EN',
  KA = 'KA',
  HI = 'HI',
}

enum EXPENSE_STATUS {
  DELETED = 'deleted',
  ACTIVE = 'active',
  PENDING = 'pending',
}

enum EXPENSE_SPLIT_OPTION {
  EQUALLY = 'equally',
  SHARE = 'share',
  PERCENT = 'percent',
}

enum GROUP_STATUS {
  SETTLED = 'settled',
  UNSETTLED = 'unsettled',
  ARCHIVE = 'archive',
}

enum BUTTON_TYPE {
  FILL = 'FILL',
  OUTLINE = 'OUTLINE',
}

export {
  APP_LABELS,
  APP_ROUTES,
  GENDER,
  SCREEN_STATE,
  STORAGE_KEYS,
  ASYNC_STORAGE,
  STATUS,
  LANGUAGE,
  EXPENSE_STATUS,
  EXPENSE_SPLIT_OPTION,
  GROUP_STATUS,
  BUTTON_TYPE,
};
