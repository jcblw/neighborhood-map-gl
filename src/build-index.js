import neighborhoods from '../data/neighborhood.json'
import fs from 'fs'

const ws = fs.createWriteStream('./data/nearby-indexs.json')

ws.write('{')
neighborhoods.forEach((neighborhood, index) => {
  console.log(`building index for neighborhood ${neighborhood.id}`)
  ws.write(`\n\t"${neighborhood.id}": ` + JSON.stringify(neighborhoods
    .filter((n) => {
      let isNextTo = false
      neighborhood.points.forEach((p) => {
        if (isNextTo) return
        n.points.forEach((p2) => {
          if (isNextTo) return
          isNextTo = p[0] === p2[0] && p[1] === p2[1]
        })
      })
      return isNextTo
    })
    .map((n) => n.id)
  ))
  if (index !== neighborhoods.length - 1) {
    ws.write(',')
  }
})
ws.write('\n}')
ws.end()
