import { useNavigate, Outlet } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate(); //Built in hook. This creates a constant called navigate.
    return (
        <div className="HomePage">
        <h1>Home Page</h1>
        <button onClick={() => navigate('/home/bitcoin')}>bitcoin</button>
        <button onClick={() => navigate('/home/login')}>login</button>
        /* <button onClick={() => navigate(-1)}>back</button> {/*This button takes you "back" in browser history.*/}
        </div>
    );
}


//useNavigate is a React Hook that lets you navigate programmatically between pages — meaning you can change pages using code 
// instead of clicking a link.

//<Outlet /> is a placeholder for nested routes. It tells React Router where to display child routes inside a parent route.


//<button onClick={() => navigate('/home/bitcoin')}>bitcoin</button> /home/bitcoin → loads BitcoinPage.jsx
//When the button is clicked it run the following function, it changes the url to /home/bitcoin
///home/login → loads loginPage.jsx
