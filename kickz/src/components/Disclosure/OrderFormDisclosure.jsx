import { Disclosure, Transition} from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import classes from './OrderFormDisclosure.module.css'

const OrderFormDisclosure = () => {
    return (
        <div>

        <Disclosure className='flex justify-center align-middle'>
        {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
            <Disclosure.Button className='flex items-center w-full text-lg font-bold'>
                Shipping
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
            <Disclosure.Panel className='flex flex-col'>
            <p className='text-lg'>In-store pickup available at selected stores subjected to stock availability, choose your preferred store at checkout.</p>
            <div className='ms-5 py-2'>
            <p className='py-2'><bold className='font-bold'>Express delivery</bold> free for orders over $100</p>
            <p><bold className='font-bold'>Next day delivery</bold> for all order placed before 12pm your items will be shipped same day</p>
            </div>
            </Disclosure.Panel>
            </Transition>
            </>
        )}
    </Disclosure>

    <Disclosure className='flex justify-center align-middle'>
    {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
        <Disclosure.Button className='flex items-center w-full text-lg font-bold'>
            Returns
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
        <Disclosure.Panel className='flex flex-col'>
        <p className='text-lg'>Returns available for all order purchased within 30 days.</p>
        <p className='pt-3'>All order being returns must meet the following conditions:</p>
        <ul className='ms-5 list-decimal'>
        <li className='pt-2'>In origin condition with no signs of damage or wear</li>
        <li className='pt-2'>All tags still attached</li>
        <li className='pt-2'>In origin packaging</li>
        </ul>
        </Disclosure.Panel>
        </Transition>
        </>
    )}
        </Disclosure>
</div>
    )
}

export default OrderFormDisclosure;