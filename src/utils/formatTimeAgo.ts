export const formatTimeAgo = (createdAt: number) => {
  const now = new Date().getTime()
  const createdAtUnix = new Date(createdAt).getTime()

  const differenceMs = now - createdAtUnix
  const differenceSec = Math.max(0, Math.floor(differenceMs / 1000))

  const minutes = Math.floor(differenceSec / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)

  if(differenceSec < 60){
    return "Just\nnow"
  }

  if(minutes < 60){
    return minutes === 1 ? "1 min\nago" : `${minutes}\nmin ago`
  }

  if(hours < 24){
    return hours === 1 ? "1 hr\nago" : `${hours}\nhrs ago`
  }

  if(days < 30){
    return days === 1 ? "yesterday" : `${days}\ndays ago`
  }

  return months === 1 ? "1 month\nago" : `${months}\nmonths ago`
}