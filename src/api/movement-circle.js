import axios from 'axios'

export function getMovementCircleHot () {
  let url = 'api/movement-circle/hot'
  return new Promise((resolve) => {
    axios.get(url).then((res) => {
      resolve(res)
    })
  })
}

export function getSliderList () {
  let url = 'api/movement-circle/slider'
  return new Promise((resolve) => {
    axios.get(url).then((res) => {
      resolve(res)
    })
  })
}

export function getMovementDetail () {
  let url = 'api/movement-circle/detail'
  return new Promise((resolve) => {
    axios.get(url).then((res) => {
      resolve(res)
    })
  })
}
