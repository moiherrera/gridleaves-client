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
  $('#get-profiles').on('submit', profileEvents.onGetProfiles)
  $('#create-profile').on('submit', profileEvents.onCreateProfile)
  $('.content').on('submit', '.update-profile-form', profileEvents.onUpdateProfile)
  $('.content').on('click', '.delete-profile', profileEvents.onDestroyProfile)
})
