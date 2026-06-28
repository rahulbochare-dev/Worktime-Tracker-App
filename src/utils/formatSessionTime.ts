export const formatSessionTime = (timeMs: number) => {
  console.log(timeMs)
  const totalSeconds = Math.max(0, Math.floor(timeMs / 1000))
  
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  
  if(hours > 0){
    return `${hours}hr ${minutes}mins`
  }

  if(minutes == 1){
    return `${minutes}min ${seconds}secs`
  }

  if(minutes > 0){
    return `${minutes}mins ${seconds}secs`
  }

  return `${seconds}secs`
}