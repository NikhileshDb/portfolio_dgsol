import React from 'react'
import { Link,  useParams } from 'react-router-dom';
import classes from '../css/custom.module.css';
import {GiCircleClaws, GiHamburgerMenu} from 'react-icons/gi';
import {RiSearchFill} from 'react-icons/ri';
import Button from './Button';


// List of Menu data for Navigation menu using a map methode to add the title and url
const menuData = [
    {   id: 1,
        title: 'Services',
        link: '/services'
    },
    {   id:2,
        title: 'Projects',
        link: '/projects'
    },
    {   id:3,
        title: 'Testimonials',
        link: '/testimonials'
    },
    {   id:4,
        title: 'About',
        link: '/about'
    },
    {   id:5,
        title: 'Contact',
        link: '/contact'
    },

]


function NavBar() {
    let {url} = useParams();
    
    return (
        <>
            <div className=" fixed z-[100]  bg-white h-[70px] w-[100%]  sm:px-[30px] px-[10px] flex flex-row justify-between items-center">
                <div className={`${url} flex flex-row justify-start items-center text-[34px] font-bold text-[#1f5355] hover:scale-[110%] z-20`}>
                    <GiCircleClaws className="" /> 
                    <a href="/">DGSol</a>
                </div>
                <div className=" sm:flex hidden z-20  items-center bg-red-500  rounded-[50px]">
                        <input placeholder="Search anything ..." className="p-3 h-10 w-[300px] rounded-[50px] focus:outline-none bg-blue-50" type="text"/>
                        <button className="px-[10px] text-[28px] active:scale-75 text-white "><RiSearchFill/></button>
                </div>

                <div className="sm:block hidden">
                    <ul className="flex justify-end gap-2 text-[18px] text-[#FFFFFC] font-[500]">

                        {/* Inside the unordered list added the li and Link for navigation menu looping through the data provided */}
                        {menuData.map((item, index) => 
                        (
                        <li key={item.id} className={`${classes.underline_animation} cursor-pointer`}>
                            <Link  className={`text-[#1f5355]`} to={item.link}>{item.title}</Link>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="sm:hidden text-[30px]"><GiHamburgerMenu/></div>

            </div>
        </>
    )
}

export default NavBar
