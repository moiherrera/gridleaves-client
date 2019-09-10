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
  api.index(event)
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdateProfile = function (data) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateGame(formData)
    .then(() => {
      ui.onUpdateSuccess()
      onGetProfiles()
    })
    .catch(ui.onUpdateFailure)
}

const onDestroyProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroy(formData)
    .then(() => {
      ui.onDestroySuccess()
      onGetProfiles()
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
