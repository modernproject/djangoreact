/*
Settings and configuration for DjangoReact.

Read values from the module specified by the DJANGOREACT_SETTINGS_MODULE
environment variable, and then from src.conf.global_settings; see the
GlobalSsettings.js for a list of all possible variables.
 */
import { GlobalSettings } from './GlobalSettings'

const ENVIRONMENT_VARIABLE = 'DJANGO_SETTINGS_MODULE'

const Settings = {}

const UserSettingsHolder = {
  SETTINGS_MODULE: undefined
}

export const LazySettings = {}
