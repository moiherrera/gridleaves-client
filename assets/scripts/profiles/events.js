'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .then(() => onGetProfiles(event))
    .catch(ui.onCreateFailure)
}

const onGetProfiles = function (event) {
  event.preventDefault()
  api.index(event)
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(function (formData) {
      onGetProfiles(event)
      ui.onUpdateSuccess()
    })
    .catch(ui.onUpdateFailure())
}

const onDestroyProfile = event => {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  api.destroy(id)
    .then(() => {
      ui.onDestroySuccess()
      onGetProfiles(event)
    })
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreateProfile,
  onGetProfiles,
  onUpdateProfile,
  onDestroyProfile
}
