import { useState } from 'react'

const useNews = () => {
  const [news] = useState([])

  return { news }
}

export default useNews;
