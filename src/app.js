import yesOrNo from './modules/yes-or-no'
import { hello } from './modules/hello'
import * as myVariables from './modules/names'
import { Foo } from './modules/classes'

if (process.env.NODE_ENV !== 'production') {
  console.warn('some warning only shown in development environment.')
}

(async function () {
  if (await yesOrNo()) {
    console.log('hello, world')
  } else {
    console.log(hello(myVariables.names[0]))
  }
})()

new Foo().hello();
