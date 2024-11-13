import {useRef, useState} from 'react';

function Car() {
    const updateYear = useRef()
    const [car, setCar] = useState({
        name: 'Rolls-Royce Boat Tail',
        color: 'Black',
        year: '2021'
    })

    const handleChange = (event) => {
        setCar( prev => ({
            ...prev,
            year: updateYear.current.value
        }))
    }

    return (
        <>
            Show information of Car: 
            Car name: {car.name},
            Car color: {car.color},
            Car year: {car.year},
            <br/>
            Update Year of Car: 
            <input ref={updateYear} type="number"/>
            <input type="button" value="Update Year" onClick={handleChange}/>
        </>
      )
    
}

export default Car;