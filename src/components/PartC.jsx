import styles from './styles/part-c.module.css'

const PartC = ({topHeading,main,bottomHeading}) => {
  return (
    <div className={styles.PartC}>
        <span>{topHeading}</span>
        <p className='gradient-text'>{main}</p>
        {
          bottomHeading && <span>{bottomHeading}</span>
        }
    </div>
  )
}

export default PartC