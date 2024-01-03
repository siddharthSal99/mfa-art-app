import React from 'react';
const Dropdown = (props) => {
    const handle = (event) => {
        props.setValue(event.target.value)
    }
    return (
        <select onChange={handle} defaultValue={"placeholder"}>
            <option value={"placeholder"}>Select Collection</option>
            {
                props.values.map((item,index) => {
                    return <option key={index} value={item.id}>{item.displayName}</option>
                })
            }
        </select>
    )
}
export default Dropdown