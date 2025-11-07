import { useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate(); //Built in hook. This creates a constant called navigate.
    return (
        <div className="HomePage">
        <h1>Home Page</h1> 
        {/* Navigate to nested routes */}
        <button onClick={() => navigate('/cart')}>cart</button> {/*profile is nested under /home, so keeping it relative is correct.*/}
        <button onClick={() => navigate('/login')}>login</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate(-1)}>back</button> {/*This button takes you "back" in browser history.*/}
        </div>
    );
}