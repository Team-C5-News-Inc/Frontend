import { useState } from 'react'

const useNews = () => {
  const [news] = useState([{ title: 'random', images: 'random' }])

  return { news }
}

export default useNews;
