'use strict'
const config = require('./../config')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/profiles',
    method: 'GET'
  })
}

const destroy = formData => {
  return $.ajax({
    url: config.apiUrl + '/profiles/' + formData.profile.id,
    method: 'DELETE'
  })
}
const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/profiles/',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  index,
  destroy,
  create
}
