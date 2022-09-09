import {useState} from 'react'
import Accordion from './Accordion'

const Developer = props => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div>
            <div>
                {props.dev.name} {props.dev.available ? 'Looking for work' :''}
            </div>
            <Accordion
            buttonText={expanded ? 'Less Info' : 'More Info'}
            visible={[expanded, setExpanded]}
            >
                {props.dev.expertise}
            </Accordion>
        </div>
    );
};

export default Developer;
