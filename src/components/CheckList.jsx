import React from 'react';
import axios from 'axios';

function CheckList() {
  const [cheked, setChecked] = useState([]);

  // axios.get(() => {
  //   fetch('https://rapidapi.com/lino12/api/store-groceries/')
  //   .then(response => response.json)
  //   .then(data => {
  //     setChecked(data)
  //   })

  axios
    .get('https://rapidapi.com/lino12/api/store-groceries/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const axios = require('axios');

export default CheckList;
