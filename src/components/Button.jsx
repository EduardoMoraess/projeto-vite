function Button() {
    const apertar = () =>{
        alert('ola mundo')
    }
    return (
        <div>
            <button onClick={apertar}>
                aperta aqui para ver uma coisa
            </button>
        </div>
    );
}

export default Button;