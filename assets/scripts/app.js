'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const profileEvents = require('./profiles/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.second-view').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#get-profiles').on('click', profileEvents.onGetProfiles)
  $('#delete-profile').on('submit', profileEvents.onDestroyProfile)
  $('#create-profile').on('submit', profileEvents.onCreateProfile)
  $('#update-profile').on('submit', profileEvents.onUpdateProfile)
})
