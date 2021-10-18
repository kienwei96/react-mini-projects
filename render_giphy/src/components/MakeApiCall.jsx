

export default function MakeApiCall(props) {

    const handleClick =(e) => {

        
        e.preventDefault();
        props.handleSubmit()
        props.handleCount();
        console.log("Now make API call...")

        
    }

    return (
        <button onClick={handleClick}>Press to generate GIFs!</button>
    )
}