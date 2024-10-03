import HelloPerson from "./HelloPerson";

function Hello() {
    const person = {
        name: 'Minhdzzzzzz',
        theme: { 
            backgroundColor: 'green',
            color: 'white'
        }
    }
    return (
        <>
            <div style={person.theme}> 
                <HelloPerson name={person.name} />
            </div>
            <div> Chúc bạn thành công với React</div>
        </>
    );
}

export default Hello;