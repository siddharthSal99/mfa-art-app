# Random MET Learning App
## The app in a nutshell:
This app will query the MET api and provide information about paintings in different ways
### Page 1: random art
This page will generate an info display of a random piece of art based on "department" and optional "start date" and "end date"
We can also add a feature that lets you view your history - the artworks you have been shown
### Page 2: search art
Use this page to search for art using a search term and a boolean-constructive search 
You can also view your history here

## Hooks and their functionality:
### useEffect
we will use the useEffect hook to make the API call to the MET back
### useState
useState will be used to save individual state for the various components of the app
### useRef
maybe we can use useRef to update the image of the current painting
### useMemo
maybe we can use useMemo to save the state of the app if we want to search for the same thing multiple times?

## Backlog features
*Select multiple departments in the random retrieval page dropdown
*Add a navbar item called "History" that lets you see the art you've viewed and on what date. 
*Like artworks and and have a recommended artwork navbar page
*Accumulate apis from multiple museums
*give GPT the json response with the art piece's data and have it write a paragraph that includes all the information in a nice summary.
*retry artwork fetching when we get an artwork with no primary image