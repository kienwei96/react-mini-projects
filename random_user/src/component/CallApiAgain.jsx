

export default function CallApiAgain(props) {

    const handleClick =(e) => {

        
        e.preventDefault();
        props.handleToggle();
        console.log("Now make API call...")

        
    }

    return (
        <button onClick={handleClick}>Pull Another Random User</button>
    )
}