import React from 'react';
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import logo from '../assets/logo.svg'

const footerData = [
    {
        icon: phone,
        text: "08178624095"
    },
    {
        icon: email,
        text: "03financeschool@gmail.com"
    },
    {
        icon: twitter,
        text: "03financeschool"
    },
    {
        icon: instagram,
        text: "03financeschool"
    },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white">
        <section className='container mx-auto font-alternate px-8 py-8'>

            <div className='flex flex-col gap-6'>
                <section>
                    <h3 className='font-bold'>QUICK LINKS</h3>
                    <ul className='list-disc pl-4'>
                        <li className='my-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> About us </a></li>
                        <li className='my-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> Courses </a></li>
                        <li className='my-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> Events </a></li>
                        <li className='my-2'> <a href="http://" target="_blank" rel="noopener noreferrer"> Communities </a></li>
                    </ul>
                </section>

                <section>
                    <h3 className='font-bold'>CONTACT INFO</h3>
                    {footerData.map(item => {
                        const { icon, text } = item
                        return (
                            <div key={text} className="flex gap-4 my-2">
                                <img src={icon} alt={text} className="w-4 "/>
                                <p>{text}</p>
                            </div>
                        )
                    })}
                </section>
            </div>

            <div className='my-6'>
                <img src={logo} alt="logo" className='h-[2.2rem]'/>
                <p className='italic font-[500] pl-6 text-[10px]'>....bringing financial liberation to all</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer