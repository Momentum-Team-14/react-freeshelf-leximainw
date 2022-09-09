import {useState} from 'react'
import Accordion from './Accordion'

const Developer = props => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div style={{marginBottom: '0.8rem', backgroundColor: '#eee', border: '1px solid #ccc', padding: '0.5rem'}}>
            <div>
                <span style={{marginRight: '1.2rem'}}>{props.dev.name}</span><span>{props.dev.available ? 'Looking for work' :''}</span>
            </div>
            <Accordion
            buttonText={expanded ? 'Less Info' : 'More Info'}
            visible={[expanded, setExpanded]}
            >
                Expertise: {props.dev.expertise}
                {props.dev.image ?
                    <div><img
                    style={{maxWidth: props.dev.image.maxWidth || '20rem'}}
                    src={props.dev.image.src}
                    alt={props.dev.image.alt}
                    /></div> : ''}
            </Accordion>
        </div>
    );
};

export default Developer;
