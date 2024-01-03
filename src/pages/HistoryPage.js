import React from 'react';
import ArtCard from '../components/ArtCard';
const SearchPage = (props) => {
    return (
        <>
            {
                props.history.map((item,index) => {
                    return (<div>
                        <ArtCard image={item.image} title={item.title} artist={item.artist} date={item.date}/>
                    </div>)
                })
            }
        </>
        
    )
}
export default SearchPage