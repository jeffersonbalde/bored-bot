import {useState, useEffect} from 'react';

const App = () => {
  const [activity, setActivity] = useState('');

  useEffect(() => {
    requestAPI()
  }, [])

  async function requestAPI() {
    const res = await fetch("https://www.boredapi.com/api/activity");
    const json = await res.json();
    setActivity(json.activity)
  }

  const handleClick = () => {
    requestAPI()
    document.querySelector('h1').textContent = "🦾 HappyBot🦿"
    document.querySelector('h1').classList.add('fun');
  }

  return (
    <div className='container'>
        <h1>🤖 BoredBot 🤖</h1>
        <h2>Boring? Find something to do</h2>
        <p>{activity}</p>
        <button onClick={handleClick}>GET SOMETHING</button>
    </div>
  )
}

export default App