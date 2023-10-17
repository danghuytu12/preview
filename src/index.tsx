import * as React from 'react'
import styles from './styles.module.css'

const ExampleComponent = () => {
  return (
    <div className={styles.gridContainer}>
      <a href='https://www.facebook.com/' className='item1'>
        ds
      </a>
      <a href='https://www.facebook.com/' className='item2'>
        2
      </a>
      <a className='item3'>3</a>
      <a className='item4'>4</a>
      <a className='item5'>5</a>
    </div>
  )
}
export default ExampleComponent
