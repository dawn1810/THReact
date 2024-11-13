import Menu from './Menu';

const list = [
    {
        url: 'https://youtu.be/dQw4w9WgXcQ?si=TYIw8wtVbb86LGh9',
        text: 'rick roll',
    },
    {
        url: 'https://youtu.be/dQw4w9WgXcQ?si=TYIw8wtVbb86LGh9',
        text: 'rick roll',
    },
];

function Header() {
    return <Menu list={list} />;
}

export default Header;
