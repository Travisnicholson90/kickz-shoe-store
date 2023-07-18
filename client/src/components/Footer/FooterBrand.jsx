import classes from './Footer.module.css';
import visa from '../../assets/images/visa.svg';
import mastercard from '../../assets/images/mastercard.svg';
import amex from '../../assets/images/amex.svg';
import paypal from '../../assets/images/paypal.svg';
import afterpay from '../../assets/images/afterpay.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
import facebook from '../../assets/images/facebook.svg';

const FooterBranding = () => {
    return (
        <div className={classes['bottom-footer']}>
        <div className={classes.copyright}>
            <p>© 2021 <span className={classes.kickz}>KICKZ</span>. All Rights Reserved.</p>
        </div>
        <div className={classes['social-media']}>
        <div className={classes['banking-cards']}>
            <img src={visa} alt="visa-icon" />
            <img src={mastercard} alt="mastercard-icon" />
            <img src={amex} alt="american-express-icon" />
            <img src={paypal} alt="paypal-icon" />
            <img src={afterpay} alt="afterpay-icon" />
        </div>
        {/* <div className={classes['social-media-icons']}>
            <img src={twitter} alt="twitter-icon" />
            <img src={instagram} alt="instagram-icon" />
            <img src={facebook} alt="facebook-icon" />
        </div> */}
        </div>
        <div className={classes.brand}>
            <h2><span className={classes.kickz}>KICKZ</span></h2>
            <p>Premium. Street. Wear.</p>
        </div>
    </div>
    )
}

export default FooterBranding;