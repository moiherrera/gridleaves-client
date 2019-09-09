'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetProfiles = function () {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
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

const onCreateProfile = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

// gets returned to onGetBooks
// api.index().then will invole console.log and it will pass it whatever value
// when we invoke it.

module.exports = {
  onGetProfiles,
  onDestroyProfile,
  onCreateProfile
}
