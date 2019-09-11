'use strict'
const showProfilesTemplate = require('../templates/profiles-page.handlebars')

const onCreateSuccess = (formData) => {
  console.log(formData)
  $('#message2').text('Success Profile Created')
  $('#create-profile').hide()
  $('form').trigger('reset')
  console.log(formData)
  console.log(formData.profiles)
  $('#gridleavesTable').show()
}

const onCreateFailure = (formData) => {
  $('#message2').text('Failure: Profile not Created')
}

const onIndexSuccess = (data) => {
  console.log(data)
  console.log(data.profiles)
  const showProfilesHtml = showProfilesTemplate({profiles: data.profiles})
  $('#create-profile').hide()
  $('.content').html(showProfilesHtml)
  $('.content').show()
  $('#new-profile').on('click', onAddNewProfile)
  $('#get-profiles').hide()
  $('.input_class').hide()
  $('.content').on('click', '.update-profile', function (event) {
    $(event.target).closest('section').find('.update-profile-form').show()
  })
}
// const onEditProfile = function () {
//   $('.updateProfile').show()
//   // $('.editProfile').show()
//   $('.content').hide()
//   // $('.editProfile').show()
// }
const onAddNewProfile = function () {
  console.log('hello')
  $('#content').hide()
  $('#create-profile').show()
}
// }

// const onIndexFailure
//
// const onUpdateSuccess
//
// const onUpdateFailure
//
// const onDestroySuccess
//
// const onDestroyFailure

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onAddNewProfile
}
