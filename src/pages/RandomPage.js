import React, {useState, useEffect} from 'react';
import Dropdown from '../components/Dropdown';
import { Button } from '@mui/material';
const RandomPage = (props) => {
    let [departments, setDepartments] = useState([])
    let [currDept, setCurrDept] = useState(0)
    let [imgSource, setImgSource] = useState("")
    let [title, setTitle] = useState("")
    let [artist, setArtist] = useState("")
    let [artDate, setArtDate] = useState("")
    useEffect(() => {
        fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments", {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.departments)
            setDepartments(data.departments)
        })
    }, [])
    let departmentSetter = (newDept) => {
        // console.log(newDept)
        setCurrDept(newDept)
    }
    let generateButtonHandler = () => {

        fetchImageFromMET()
        .then(objectData => {
            setImgSource(objectData.primaryImage)
            setTitle(objectData.title)
            setArtist(objectData.artistDisplayName)
            setArtDate(objectData.objectDate)
            props.addToHistory({
                image: objectData.primaryImage, 
                title: objectData.title, 
                artist: objectData.artistDisplayName,
                date: objectData.objectDate
            })
            return 1
        })
        .catch((error) => {
            return 0
        })
    }
    let fetchImageFromMET = () => {
        return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${currDept}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(response => response.json())
        .then(data => data.objectIDs[ Math.floor(Math.random() * data.objectIDs.length)])
        .then(objectID => {
            // console.log(objectID)
            return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                }
              })
        })
        .then(response => response.json())
        .then(objectData => {
            if (objectData.primaryImage) {
                return objectData
            } else {
                throw new Error("No image available")
            }
        })
    }
    return (
        <>
        <div className='random-page-container'>
            <div>
                <h1>Generate a random art</h1>
            </div>
            <div style={{margin:'20px'}}>
                <Dropdown values={departments.map((item => {
                    return {id:item.departmentId, displayName:item.displayName}
                    }))} setValue={departmentSetter}/>
            </div>
            <div>
                <img src={imgSource} alt='randomly retrieved from art database' style={{height:'500px'}}/>
            </div>
            {(title !== undefined && title !== "") && <div>
                <p>Title: {title}</p>
            </div>}
            {(artist !== undefined && artist !== "") && <div>
                <p>Artist: {artist}</p>
            </div>}
            {(artDate !== undefined && artDate !== "") && <div>
                <p>Year(s): {artDate}</p>
            </div>}
            <div style={{margin:'20px'}}>
                <Button variant='contained' disableElevation onClick={generateButtonHandler}> Generate </Button>
            </div>

        </div>
        </>
    )
}
export default RandomPage