import React from "react"

const App = () => {
  window.addEventListener('hashchange', evt => {
    const repo = window.location.hash.split('#')[1]

    loadRepo({ repo })
  })

  const loadRepo = ({ repo }) => {
    console.log(`From react, load te repo ${repo}`)
  }

  return (
    <h1>Hello from React</h1>
  )
}

export default App