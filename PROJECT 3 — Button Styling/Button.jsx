//External Style
function Button(){
    return(
        <button className="button">Click me</button>
    );
}
export default Button;

Modules
import styles from './Button.module.css'
function Button(){
    return(
        <button className={styles.button}>Click me</button>
    );
}

export default Button;
