import React, { useEffect, useState } from 'react';
function App() {
    let [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/updates.json?print=pretty')
            .then(res => res.json()).then(result => setProfiles(result['profiles']))
    }, [])
    return (
        <div className="App">
            <ol>
                {
                    profiles.map(n => {
                        return <li key={n}>{n}</li>
                    })
                }
            </ol>

        </div>
    );
}

export default App;
