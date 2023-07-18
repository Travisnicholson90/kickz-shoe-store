import { useState,  } from 'react';
import classes from './Footer.module.css';
import Button from '../UI/Button';


const Footer = () => {
    // email states 
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
}

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const formHandler = (e) => {
    e.preventDefault()
   
    if (email.trim().length === 0 || !email.match(regex)) {
        setEmailError(true);
        return;
    }

    setIsSubmitted(true);
    setEmail('');
};

    return (
    <div className={classes.wrapper}>
        <div className={classes.footer}>
            <div className={classes['customer-service']}>
                <h3 className={classes.header}>Customer Service</h3>
                <ul className={classes.list}>
                    <li><a>Contact Us</a></li>
                    <li><a>Shipping</a></li>
                    <li><a>Orders</a></li>
                    <li><a>Returns</a></li>
                    <li><a>Afterpay</a></li>
                </ul>
            </div>
            <div className={classes['about-us']}>
                <h3 className={classes.header}>About Us</h3>
                <ul className={classes.list}>
                    <li><a>About Us</a></li>
                    <li><a>Terms and Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Ambassadors</a></li>
                    <li><a>Community</a></li>
                </ul>
            </div>
            <div className={classes['mailing-list']}>
                    <h3 className={classes.header}>Join Our Mailing List</h3>
                <form 
                className={classes['form-control']}
                onSubmit={formHandler}>
                    <label>Email</label>
                    <input 
                    className={`${classes.input} ${emailError ? classes.error : ''}`} 
                    onChange={emailHandler} 
                    value={email}></input>
                    {emailError && <p className={classes['error-message']}>Please enter a valid email address</p>}
                    {isSubmitted &&  !emailError && <p className={classes['success-message']}>Thank you for subscribing!</p>}
                    <p className={classes['subscribe-tcs']}>By subscribing our our mailing list you agree to receive updates, news and promotional offers from <span className={classes.kickz}>KICKZ</span>. For more information please refer tou our <a className={classes['tcs-link']}>Terms and Conditions</a></p>
                    <Button type='submit' className={classes.btn}>Subscribe</Button>
                </form>
            </div>
        </div>
    </div>
    )
};

export default Footer;