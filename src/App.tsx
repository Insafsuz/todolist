import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
import Select from './components/ui/Select/Select'

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Todo list</h1>
      <div className='header'>
        <div className='column'>
          <Select
            options={[
              { value: 'all', name: 'All' },
              { value: 'complete', name: 'Complete' },
              { value: 'incomplete', name: 'Incomplete' },
            ]}
          />
        </div>
        <div className='column'>
          <Input type='text' id='search' placeholder='Search task' />
        </div>
        <div className='column'>
          <Button type='button' variant='primary'>
            Add task
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
