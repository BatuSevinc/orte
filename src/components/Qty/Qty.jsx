import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Qty.module.css';

const Qty = ({item}) => {
    const {handleInput,handleSelect} = useContext(CartContext)
  return (
    <div className={styles.qty}>
            {
            item.amount < 7 ? (
                <select value={item.amount}
                onChange={(e) => handleSelect(e,item.id)}
                className={styles.qtySelect}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7+</option>
                </select>
            ):(
                <input onBlur={(e)=> handleInput(e,item.id)} type="text" placeholder={`${item.amount}`} />
            )
            }
    </div>
  )
}

export default Qty