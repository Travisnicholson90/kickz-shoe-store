import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button 
    className={classes.btn} 
    type="submit" 
    role="button" >
      {props.children}
    </button>
  );
};

export default Button;