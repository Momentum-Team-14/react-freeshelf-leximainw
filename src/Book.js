import {useState} from 'react'
import Accordion from './Accordion'

const Book = props => {
    const book = props.book;
    const [expanded, setExpanded] = useState(false);
    const [imageError, setImageError] = useState(false);
    return (
        <div className='flex' style={{marginBottom: '0.8rem'}}>
            {book.coverImageUrl ? <div style={{flexShrink: 0, width: '10rem'}}>
                {imageError ? '' : <img
                src={book.coverImageUrl}
                alt={`Cover for ${book.title}`}
                style={{width: '10rem'}}
                onError={() => setImageError(true)}
                />}
            </div> : ''}
            <div style={{flexGrow: 1, backgroundColor: '#eee', border: '1px solid #ccc', padding: '0.5rem'}}>
                <div>
                    <h2><a href={book.url}>{book.title}</a></h2>
                    <div>by {book.author}</div>
                    {book.publicationDate ? <div>Published {book.publicationDate}{book.publisher ? ` by ${book.publisher}` : ''}</div> : ''}
                    <div>{book.shortDescription}</div>
                </div>
                <Accordion
                buttonText={expanded ? 'Less Info' : 'More Info'}
                visible={[expanded, setExpanded]}
                >
                    <p>{book.detailedDescription}</p>
                </Accordion>
            </div>
        </div>
    );
};

export default Book;
