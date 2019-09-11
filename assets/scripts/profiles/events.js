'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')

const onCreateProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  console.log(formData.profile)
  console.log(store.user.token)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .then(() => onGetProfiles(event))
    .catch(ui.onCreateFailure)
}

const onGetProfiles = function (event) {
  event.preventDefault()
  console.log('ran')
  api.index(event)
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdateProfile = function (event) {
  console.log('Hello')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.update(formData)
    .then(function (formData) {
      onGetProfiles(event)
      ui.onUpdateSuccess()
    })
    .catch(ui.onUpdateFailure)
}

const onDestroyProfile = event => {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  console.log(id)
  api.destroy(id)
    .then(() => {
      ui.onDestroySuccess()
      onGetProfiles(event)
    })
    .catch(ui.onDestroyFailure)
}

// gets returned to onGetBooks
// api.index().then will invole console.log and it will pass it whatever value
// when we invoke it.

module.exports = {
  onCreateProfile,
  onGetProfiles,
  onUpdateProfile,
  onDestroyProfile
}
