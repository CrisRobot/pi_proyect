const Form = () => {
    return(
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"></input>
            </div>
            <div>
                <label htmlFor="dificulty">Dificulty:</label>
                <input type="text"></input>
            </div>
            <div>
                <label htmlFor="duration">Duration:</label>
                <input type="text"></input>
            </div>
            <div>
                <label htmlFor="season">Season:</label>
                <input type="text"></input>
            </div>
            <button>CREATE</button>
        </form>
        
    );
};

export default Form;