import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const API_KEY = 'd3e8e6bcc65f4153a166d0caf65a8939'
const URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=ng`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function fetchNews() {
  try {
    const response = await axios.get(URL)
    const data = response.data

    if (!data.articles) {
      throw new Error('Error fetching news')
    }
    const predefinedCategories = [
      'Politics',
      'Business',
      'Sports',
      'Health',
      'Education',
      'Wealth',
      'Science',
      'Food',
      'Travels'
    ]
    const newsList = data.articles.map((article, index) => {
      const { title, description, url, urlToImage, publishedAt, source } = article
      const category = source.name || 'General'
      const categoryName = predefinedCategories.find((cat) => category.includes(cat)) || 'General'
      return {
        id: (index + 1).toString(),
        category: categoryName,
        title: title || 'No title available',
        description: description || 'No description available',
        content: url || 'No content available',
        image: urlToImage || './images/default.jpg',
        date: new Date(publishedAt).toDateString()
      }
    })
    fs.writeFileSync(
      path.join(__dirname, '..', 'src', 'assets', 'news.json'),
      JSON.stringify(newsList, null, 2)
    )

    console.log('News data fetched and saved successfully.')
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}

fetchNews()
