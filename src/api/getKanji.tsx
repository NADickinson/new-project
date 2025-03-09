export const getKanji = async () => {
  try {
    const response = await fetch('https://kanjiapi.dev/v1/kanji/joyo')
    if (!response.ok) {
      throw new Error('response error')
    }
    const data = response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

//https://kanjiapi.dev/v1/kanji/joyo
