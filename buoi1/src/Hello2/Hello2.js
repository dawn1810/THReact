function Hello2() {

    const hiAll = () => {
        alert("Hello everyOne");
    }

    const hiYou = (name) => {
        alert("Hello " + name);
    }

    return (  
        <span>
            <button onClick={() => hiAll()}>Hi All</button>
            <button onClick={() => hiYou('Minhdzzzz')}>Hi you</button>
        </span>
    );
}

export default Hello2;