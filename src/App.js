import Developer from './Developer'
import devs from './devs'

const App = () => (
    <>{devs.map(dev => <Developer dev={dev} />)}</>
)

export default App;
