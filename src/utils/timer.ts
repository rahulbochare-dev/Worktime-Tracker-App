let startTime = null
let isRunning = false
let elapsedTime = 0
let endTime = 0
let isEnded = false

export const start = () => {
  startTime = Date.now()
  isRunning = true
  isEnded = false
  elapsedTime = 0
}

export const pause = () => {
  if(!isRunning) return;

  elapsedTime += Date.now() - startTime
  isRunning = false
}

export const resume = () => {
  if(isRunning) return;

  startTime = Date.now()
  isRunning = true
}

export const getElapsedTime = () => {
  if(isRunning){
    return elapsedTime + (Date.now() - startTime)
  }

  return elapsedTime
}

export const end = () => {
  const finalTime = getElapsedTime()

  startTime = null
  isRunning = false
  elapsedTime = 0
  isEnded = true

  return finalTime
}

export const getStatus = () => {
  return isRunning
}

export const getIsEnded = () => {
  return isEnded
}