import devs from './devs'

const App = () => (
    <>{devs.map(dev => <div>{dev.name}</div>)}</>
)

export default App;
