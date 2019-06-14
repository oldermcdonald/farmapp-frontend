import axios from 'axios'

export function getData() {
  const localAPIUrl = 'http://localhost:8080/api/todolist'
  const APIurl = process.env.toDoListAPIURL || localAPIUrl
  return axios.get(APIurl).then(response => {
    return response.data
  })
  .catch(err => console.log(err))
}

export function sendData(itemToAdd) {
  const localAPIUrl = 'http://localhost:8080/api/todolist'
  const APIurl = process.env.toDoListAPIURL || localAPIUrl
  axios.post(APIurl, itemToAdd)
  .then(res => {
    console.log(res)
  })
}

// Webpack config built to only accept ES6 syntax above (official)

// how node used to export modules

// module.exports = {
//   getData: getData,
//   sendData: sendData
// };