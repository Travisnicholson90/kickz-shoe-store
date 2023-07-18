import { Disclosure, Transition} from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import classes from './Accordion.module.css';
import Button from '../UI/Button';

const AccordionFooter = () => {
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
    <Disclosure className={classes.disclosure}>
        {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
            <Disclosure.Button className={classes['disclosure-heading']}>
                Customer Service
                <ChevronRightIcon className={ `${classes.icon} ${ open ? `${classes.open}` : `${classes.close}` } ` } />
            </Disclosure.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
            <Disclosure.Panel className={classes['disclosure-content']}>
            <ul className={classes.list}>
                <li><a>Contact Us</a></li>
                <li><a>Shipping</a></li>
                <li><a>Orders</a></li>
                <li><a>Returns</a></li>
                <li><a>Afterpay</a></li>
            </ul>
            </Disclosure.Panel>
            </Transition>
            </>
        )}
    </Disclosure>

    <Disclosure className={classes.disclosure}>
        {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
            <Disclosure.Button className={classes['disclosure-heading']}>
                About Us
                <ChevronRightIcon className={ `${classes.icon} ${ open ? `${classes.open}` : `${classes.close}` } ` } />
            </Disclosure.Button>
            <Disclosure.Panel className={classes['disclosure-content']}>
            <ul className={classes.list}>
              <li><a>About Us</a></li>
              <li><a>Terms and Conditions</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Ambassadors</a></li>
              <li><a>Community</a></li>
            </ul>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>

    <Disclosure className={classes.disclosure}>
        {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
            <Disclosure.Button className={classes['disclosure-heading']}>
                Mailing List
                <ChevronRightIcon className={ `${classes.icon} ${ open ? `${classes.open}` : `${classes.close}` } ` } />
            </Disclosure.Button>
            <Disclosure.Panel className={classes['disclosure-content']}>
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
                    <Button type='submit' className={classes.btn}>SUBSCRIBE</Button>
                </form>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
</div>
    )
}
export default AccordionFooter;