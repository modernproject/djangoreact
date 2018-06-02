import {
  AppDirectoriesFinder,
  FileSystemFinder
} from 'djangoreact.contrib.staticfiles.finders'

export const GlobalSettings = {
  DEBUG: false,

  /* People who get code error notifications. */
  ADMINS: [],

  /* Local time zone for this installation. */
  TIME_ZONE: 'America/Chicago',

  /* If you set this to true, DjangoReact will use timezone-aware datetimes. */
  USE_TZ: false,

  /* Language code for this installatoin. */
  LANGUAGE_CODE: 'en-us',

  /*
    Not-necessarily-technical managers of the site. They get broken link
    notifications and other various emails.
  */
  MANAGERS: ADMINS,

  /*
    Default content type and charset to use for all HttpResponse objects, if a
    MIME type isn't manually specified. These are used to construct the
    Content-Type header.
  */
  DEFAULT_CONTENT_TYPE: 'text/html',
  DEFAULT_CHARSET: 'utf-8',

  /* Encoding of files read from disk (template and initial SQL files). */
  FILE_CHARSET: 'utf-8',

  /* List of strings representing installed apps. */
  INSTALLED_APPS: [],

  /* Whether to append trailing slashes to URLs. */
  APPEND_SLASH: true,

  /* Whether to prepend the "www." subdomain to URLs that don't have it. */
  PREPEND_WWW: False,

  /*
    MIDDLEWARE
  */

  /*
    List of middleware to use. Order is important; in the request phase, these
    middleware will be applied in the order given, and in the response
    phase the middleware will be applied in reverse order.
  */
  MIDDLEWARE: [],

  /*
    AUTHENTICATION
  */

  AUTH_USER_MODEL: 'auth.User',

  LOGIN_URL: '/accounts/login/',

  LOGIN_REDIRECT_URL: '/accounts/profile/',

  LOGOUT_REDIRECT_URL: None,

  /*
    TESTING
  */

  /* The name of the class to use to run the test suite */
  TEST_RUNNER: 'jest',

  /*
    STATICFILES
  */
  STATICFILES_DIRS: [],

  /*
    List of finder classes that know how to find static files in various locations.
  */
  STATICFILES_FINDERS: [AppDirectoriesFinder, FileSystemFinder]
}
