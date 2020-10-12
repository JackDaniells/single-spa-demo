import '@babel/polyfill';

import React from 'react'
import axios from 'axios';
import './style.css';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [owner, setOwner] = React.useState({});

  window.addEventListener('hashchange', () => {
    const repo = window.location.hash.split('#')[1]

    getRepoOwner({ repo })
  })

  const getRepoOwner = async ({ repo }) => {
    if (!repo) return;
    setOwner(null)
    setLoading(true);

    try {
      const { data } = await axios.get(`https://api.github.com/repos/${repo}`)

      setOwner(data.owner)
    } catch (error) {
      console.log(error);
      setOwner(null)
    }

    setLoading(false);
  }

  if (loading) return (<div>Loading...</div>);

  if (!owner) return (<div></div>);

  return (
    <div className="react">
      <img className="react-picture" src={owner.avatar_url} />
      <h2>{owner.login}</h2>
    </div>
  )
}

export default App