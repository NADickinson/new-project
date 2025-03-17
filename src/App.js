import { useEffect, useState } from 'react'
import { getKanji } from './api/getKanji'

export const App = () => {
  const [kanji, setKanji] = useState()

  useEffect(() => {
    const nestedKanji = async () => {
      const res = await getKanji()
      setKanji(res)
    }
    nestedKanji()
  }, [])
  return <div>{kanji} </div>
}
