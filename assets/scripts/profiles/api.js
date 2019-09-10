'use strict'
const config = require('./../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/profiles',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const destroy = formData => {
  return $.ajax({
    url: config.apiUrl + '/profiles/' + formData.profile.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/profiles/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const update = formData => {
  return $.ajax({
    url: config.apiUrl + '/profiles/' + formData.profile.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  index,
  destroy,
  create,
  update
}
