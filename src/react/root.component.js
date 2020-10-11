import '@babel/polyfill';

import React from 'react'
import axios from 'axios';
import './style.css';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [owner, setOwner] = React.useState({});

  window.addEventListener('hashchange', evt => {
    const repo = window.location.hash.split('#')[1]

    getRepoOwner({ repo })
  })

  const getRepoOwner = async ({ repo }) => {
    setLoading(true);

    try {
      const { data } = await axios.get(`https://api.github.com/repos/${repo}`)

      setOwner(data.owner)
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  if (loading) return (<div>Loading...</div>);

  // if (!owner) return (<div></div>);

  return (
    <div className="react">
      <img className="react-picture" src="https://avatars0.githubusercontent.com/u/24396516?v=4" />
      <h2>inacior</h2>
    </div>
  )
}

export default App