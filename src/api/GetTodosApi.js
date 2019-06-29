import React, { Component } from 'react';
import axios from 'axios';

export default function GetTodosApi(token, meetingId, callback) {
    console.log(token, meetingId)
    axios.get('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos')
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