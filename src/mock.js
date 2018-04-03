import Mock from 'mockjs'

const Random = Mock.Random

const api = {
  getSliderList () {
    let arr = []
    for (let i = 0; i < 6; i++) {
      let color = Random.color()
      let sliderItem = Random.image('720x290', color, '#fff', 'slider' + i)
      arr.push(sliderItem)
    }
    return arr
  },
  movementCircle () {
    // let handpickedList = []
    let hot = {
      topicIamge: Random.image('100x100', '#00405d', '#fff', 'Mock.js'),
      topicTitle: Random.cword(5, 10),
      topicDisc: Random.cparagraph(2, 3),
      topicTab: [],
      topicHandpickedList: [],
      participate: Random.natural(0, 1000)
    }
    for (let i = 0; i < 10; i++) {
      hot.topicTab.push(Random.cword(2, 5))
    }
    for (let i = 0; i < 8; i++) {
      let obj = {
        id: Random.natural(0, 1000),
        handpickedIamge: Random.image('300x400', '#00405d', '#fff', '哈哈哈'),
        handpickedDisc: Random.cparagraph(2, 3),
        photo: Random.image('40x40', '#00405d', '#fff', 'photo'),
        name: Random.cword(1, 6),
        starNum: Random.natural(0, 1000)
      }
      hot.topicHandpickedList.push(obj)
    }
    return hot
  },
  getMovementDetail () {
    var MathR = Math.floor(Math.random() * 100)
    let detail = {
      photo: Random.image('100x100', '#00405d', '#fff', 'userPhoto'),
      name: Random.cword(1, 5),
      time: Random.natural(1, 10),
      desc: Random.cparagraph(2, 7),
      showPhoto: [],
      address: Random.city(),
      starNum: Random.natural(0, 1000),
      starPhoto: [],
      evaluation: []
    }

    for (let i = 0; i < 9; i++) {
      detail.showPhoto.push(Random.image('300x300', '#00405d', '#fff', 'showPhoto'))
    }
    for (let i = 0; i < MathR; i++) {
      detail.starPhoto.push(Random.image('100x100', '#00405d', '#fff', 'star'))
    }
    for (let i = 0; i < 10; i++) {
      let obj = {
        photo: Random.image('100x100', '#00405d', '#fff', 'eva'),
        name: Random.cword(1, 5),
        time: Random.natural(1, 10),
        text: Random.cparagraph(2, 5)
      }
      detail.evaluation.push(obj)
    }
    return detail
  }
}

Mock.mock('api/movement-circle/hot', api.movementCircle)
Mock.mock('api/movement-circle/slider', api.getSliderList)
Mock.mock('api/movement-circle/detail', api.getMovementDetail)
