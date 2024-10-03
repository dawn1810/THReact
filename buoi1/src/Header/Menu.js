import Item from "./Item";

function Menu({list}) {
    
    return ( 
        <ul>
            {
                list.map((item, index) => {
                    const props = {
                        link: item.url, 
                        content:item.text
                    };
                    return (<Item key={index} props={props}/>);
                })
            }
        </ul>
     );
}

export default Menu;