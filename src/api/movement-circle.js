import axios from 'axios'

export function getMovementCircleHot () {
  let url = 'api/movement-circle/hot'
  return new Promise((resolve) => {
    axios.get(url).then((res) => {
      resolve(res)
    })
  })
}
