import { useNavigate, Outlet } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate(); //Built in hook. This creates a constant called navigate.
    return (
        <div className="HomePage">
        <h1>Home Page</h1> 
        {/* Navigate to nested routes */}
        <button onClick={() => navigate('profile')}>profile</button> {/*profile is nested under /home, so keeping it relative is correct.*/}
        <button onClick={() => navigate('/login')}>login</button>
        <button onClick={() => navigate(-1)}>back</button> {/*This button takes you "back" in browser history.*/}
         {/* 👇 Nested pages like ProfilePage will render here */}
        <Outlet />
        </div>
    );
}


//useNavigate is a React Hook that lets you navigate programmatically between pages — meaning you can change pages using code 
// instead of clicking a link.

//<Outlet /> is a placeholder for nested routes. It tells React Router where to display child routes inside a parent route.
// Like ProfilePage.jsx

//when you are already inside /home, it’s cleaner to use a relative path:
//<button onClick={() => navigate('/home/login')}>login</button> /home/login → loads loginPage.jsx
//When the button is clicked it run the following function, it changes the url to /home/login
///home/login → loads loginPage.jsx
