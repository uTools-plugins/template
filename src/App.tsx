import { ChangeEvent, useState } from 'react'
import cx from 'classnames'


function App() {
  const [name, setName] = useState<string>('World')

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className={cx('p-4', 'bg-gray-200', 'mx-auto')}>
        <input value={name} onChange={onChangeName} className={cx('border border-gray-400 rounded-md p-1')} />
        <p className='pt-2 text-2xl'>Hello, {name}!</p>
      </div>
    </>
  )
}

export default App
