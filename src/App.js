import Book from './Book'
import books from './books'

const App = () => (
    <>{books.map(book => <Book book={book} />)}</>
)

export default App;
