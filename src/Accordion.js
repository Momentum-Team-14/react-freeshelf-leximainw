const Accordion = props => {
    const [visible, setVisible] = props.visible
    return (
        <div>
            <div><button onClick={() => setVisible(!visible)}>{props.buttonText || (visible ? 'Collapse' : 'Expand')}</button></div>
            {visible ? props.children : ''}
        </div>
    );
};

export default Accordion;
