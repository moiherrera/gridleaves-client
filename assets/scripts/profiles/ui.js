'use strict'
const showProfilesTemplate = require('../templates/profiles-page.handlebars')

const onCreateSuccess = (formData) => {
  $('#message2').text('Success Profile Created.')
  $('#create-profile').hide()
  $('form').trigger('reset')
  $('#gridleavesTable').show()
}

const onCreateFailure = (formData) => {
  $('#message2').text('Failure: Profile not Created')
}
const onUpdateSuccess = function () {
  $('#message2').text('Profile Updated')
}

const onIndexSuccess = (data) => {
  const showProfilesHtml = showProfilesTemplate({profiles: data.profiles})
  $('#create-profile').hide()
  $('.content').html(showProfilesHtml)
  $('.content').show()
  $('#message3').text('Welcome to Gridleaves. Here are the Profiles')
  $('#new-profile').on('click', onAddNewProfile)
  $('#get-profiles').hide()
  $('.input_class').hide()
}

const onAddNewProfile = function () {
  $('#content').hide()
  $('#create-profile').show()
  $('#message2').text('Add a New Profile!')
  $('#message3').text()
}
const onIndexFailure = function () {
  $('#message2').text('No profiles to get!')
}

const onUpdateFailure = function () {
  $('#message2').text('Profile does not belong to user. Cannot Update')
}
const onDestroySuccess = function () {
  $('#message2').text('Success Profile Destroyed')
}
const onDestroyFailure = function () {
  $('#message2').text('Profile does not belong to user. Cannot Destroy')
}
//
// const onDestroyFailure

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onAddNewProfile,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onIndexFailure,
  onUpdateFailure
}
