import React, { Component } from 'react';
import axios from 'axios';

export default function IncompleteTodoApi(todoId, callback) {
    axios.put(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${todoId}`, {
        completed: false
      })
    .then((res) => {
      if (res.status === 200) {
        callback({ data: res.data })
      }
      return false;
    })
      .catch(error => {
      	callback({ error: error })
    });
}