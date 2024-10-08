enum STORAGE_KEYS {
  APP_THEME = 'APP_THEME',
  APP_LANGUAGE = 'APP_LANGUAGE',
  FIRST_LAUNCH = 'FIRST_LAUNCH',
  PROFILE_DATA = 'PROFILE_DATA',
}

enum APP_ROUTES {
  homeStack = 'HomeStack',
  profileStack = 'ProfileStack',
  settingsStack = 'SettingsStack',
  launch = 'Launch',
  home = 'Home',
  details = 'Details',
  profile = 'Profile',
  groups = 'Groups',
  settings = 'Settings',
  onboarding = 'Onboarding',
  signup = 'Signup',
  signin = 'Signin',
  auth = 'Authentication',
  languages = 'Languages',
}

enum APP_LABELS {
  HOME = 'Home',
  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}

enum CONSTANTS {
  SERVER_RESOURCE_NOT_FOUND = "Oops! our system's are fluctuating. Do not worry, Best minds are at work.",
  MOCK_COUPON = 'ABCD',
  COUPON_ERROR = 'Please enter a valid Coupon Code',
  GENERIC_ERROR_MESSAGE = 'Something went wrong!',
  INVALID_CRED = 'Invalid email or password. Please provide valid credentials.',
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
  ACCESS_TOKEN = 'accessToken',
  COUPON = 'couponCode',
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
  UNDERLINE = 'UNDERLINE',
}

enum TOAST_TYPE {
  NORMAL = 'normal',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

enum EReqMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
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
  TOAST_TYPE,
  CONSTANTS,
  EReqMethod,
};
