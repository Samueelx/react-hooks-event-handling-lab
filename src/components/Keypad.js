// Code Keypad Component Here

function Keypad (){
    function handleOnChange() {
        console.log('Entering password...');
    }

    return (
        <div>
            <input type="password" onChange={handleOnChange} />
        </div>
    )
}

export default Keypad;