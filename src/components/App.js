// create your App component here
import React, {useState, useEffect} from 'react';

function App() {
    const [dog, setDog] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) =>  {
            setDog(data.message);
            setIsLoaded(true);
        });
    }, []);


    if (!isLoaded) return <p>Loading...</p>;

    return (
    <div>
        <img src={dog} alt='A Random Dog' />
    </div>
    );
}


export default App;