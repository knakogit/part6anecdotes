import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote} from "./reducers/anecdoteReducer";
import NewAnecdote from "./components/NewAnecdote";

const App = () => {
  const anecdotes = useSelector(state => {
      const data = [...state]
      data.sort((l,r)=>l.votes > r.votes? -1 : 1 )
      return data;
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }



  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <NewAnecdote/>
    </div>
  )
}

export default App
