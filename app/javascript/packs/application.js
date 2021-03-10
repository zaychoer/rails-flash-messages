// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "stylesheets/application.scss"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

import { config, library, dom } from '@fortawesome/fontawesome-svg-core'
// Change the config to fix the flicker
config.mutateApproach = 'sync'
// Import icons
import { faInfoCircle, faCheckCircle, faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
library.add(faInfoCircle, faCheckCircle, faExclamationCircle, faExclamationTriangle)
// Load icons
dom.watch()

import "controllers"
