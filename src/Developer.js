const Developer = props => (
    <div>
        <div>
            {props.dev.name} {props.dev.available ? 'Looking for work' :''}
        </div>
        <div>
            {props.dev.expertise}
        </div>
    </div>
)

export default Developer;
