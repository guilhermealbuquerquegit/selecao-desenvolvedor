//Promises

const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ currency: 'euro', value: 3.731 })
  }, 2000)
})

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Ireland', 'England', 'Escotland'])
  }, 3000)
})

Promise.all([currency, countries]).then((responses) => {
  console.log('sucesso', { responses })
})

//Async Wait

async function resolvePromise() {
  const response = await Promise.all([currency, countries]).then(
    (responses) => {
      console.log('sucesso', { responses })
    }
  )
}

resolvePromise()
