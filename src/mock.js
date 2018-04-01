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
        handpickedIamge: Random.image('300x400', '#00405d', '#fff', '哈哈哈'),
        handpickedDisc: Random.cparagraph(2, 3),
        photo: Random.image('40x40', '#00405d', '#fff', 'photo'),
        name: Random.cword(1, 6),
        starNum: Random.natural(0, 1000)
      }
      hot.topicHandpickedList.push(obj)
    }
    return hot
  }
}

Mock.mock('api/movement-circle/hot', api.movementCircle)
Mock.mock('api/movement-circle/slider', api.getSliderList)
