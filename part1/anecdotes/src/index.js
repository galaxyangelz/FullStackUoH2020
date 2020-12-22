import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const initialArray = Array(6).fill(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialArray)
  let topAnecdoteId = points.indexOf(Math.max(...points));

  const randomNumber = () => {
    return Math.floor((Math.random() * anecdotes.length))
  }

  const handleChangeClick = () => {
    const random = randomNumber()
    setSelected(random)
  }

  const handleVoteClick = (random) => {
    const copy = [...points]
    copy[random]++
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <div>
        <button onClick={() => handleVoteClick(selected)}>vote</button>
        <button onClick={handleChangeClick}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[topAnecdoteId]}
      <p>has {points[topAnecdoteId]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
