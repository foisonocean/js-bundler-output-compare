const obj = {
  a: 0,
  b: 'a',
  c: true,
  d: [0, 'a', true],
}

const anotherObj = {
  'this is': 'not used',
}

export default function yesOrNo () {
  const unUsedString = `${Math.random.toString(16).slice(0, 8)}`
  const unUsedOjb = [
    ...obj.d,
    () => {
      console.log('hello, world')
    },
  ]
  let myStr
  Object.values(anotherObj).forEach(value => {
    myStr = value
  })

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.5)
    }, 1000)
  })
}
