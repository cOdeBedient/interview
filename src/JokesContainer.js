import './JokesContainer.css'

export default function JokesContainer({ jokes }) {
    return jokes.map((joke) => {
        return (
            <>
                <p className='setup'>{joke.setup}</p><br/>
                <p className='joke'>{joke.punchline}</p><br/>
            </>
        )
      })
}