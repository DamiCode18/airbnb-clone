import Image from "next/image";
import { menus } from "../api/data";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="grid grid grid-cols-3 p-5 md:px-20">
                {/* Left */}
                <div className="hidden sm:inline-flex relative flex items-center h-10">
                    <Image
                        layout="fill"
                        src="https://links.papareact.com/qd3"
                        objectFit="contain"
                        objectPosition="left"
                        alt="logo"
                        width={1}
                        height={1}
                    />
                </div>
                {/* Middle */}
                <div className="flex sm:justify-center items-center border-[2px] rounded-full py-2 md:shadow-sm cursor-pointer w-max">
                <span className="hidden md:inline-flex flex-grow ml-2 border-r-2 md:px-4 w-max text-sm">Anywhere</span>
                <span className="hidden md:inline-flex border-r-2 md:px-4 w-max text-sm">Any week</span>
                <span className="inline-flex">
                <input className="outline-0 pl-5 bg-transparent py-2 text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Add guests" />
                    <svg className="bg-red-400 h-8 rounded-full p-2 hidden md:inline-flex md:mx-2" color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path fill="#f87171" stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </span>
                </div>

                {/* Right */}
                <div>
                </div>
            </div>
            <hr />
            <div className="flex lg:mx-16 my-6">
                <div className="flex snap-mandatory snap-x overflow-x-auto w-11/12 hover:overflow-scroll scroll-smooth">
                    {menus.map((menu, i) => (
                        <div className="m-2 p-2 snap-center" key={i}>
                            <Image src={menu.icon} alt="menu" width={24} height={24} color="white" />
                            <p className="text-xs w-max">{menu.title}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:inline-flex my-auto">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12,16 C13.3062521,16 14.4175144,16.8348501 14.8293257,18.0000889 L21,18 C21.5522847,18 22,18.4477153 22,19 C22,19.5522847 21.5522847,20 21,20 L14.8289758,20.0009007 C14.4168852,21.1656226 13.3058822,22 12,22 C10.6941178,22 9.58311485,21.1656226 9.17102423,20.0009007 L3,20 C2.44771525,20 2,19.5522847 2,19 C2,18.4477153 2.44771525,18 3,18 L9.17067428,18.0000889 C9.58248558,16.8348501 10.6937479,16 12,16 Z M12,18 C11.4477153,18 11,18.4477153 11,19 C11,19.5522847 11.4477153,20 12,20 C12.5522847,20 13,19.5522847 13,19 C13,18.4477153 12.5522847,18 12,18 Z M19,9 C20.6568542,9 22,10.3431458 22,12 C22,13.6568542 20.6568542,15 19,15 C17.6941178,15 16.5831148,14.1656226 16.1710242,13.0009007 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 L16.1706743,11.0000889 C16.5824856,9.8348501 17.6937479,9 19,9 Z M19,11 C18.4477153,11 18,11.4477153 18,12 C18,12.5522847 18.4477153,13 19,13 C19.5522847,13 20,12.5522847 20,12 C20,11.4477153 19.5522847,11 19,11 Z M5,2 C6.31179956,2 7.42694971,2.84195618 7.83453458,4.01495267 C7.88798638,4.00469482 7.94344492,4 8,4 L21,4 C21.5522847,4 22,4.44771525 22,5 C22,5.55228475 21.5522847,6 21,6 L8,6 C7.94344492,6 7.88798638,5.99530518 7.83399285,5.98628401 C7.42694971,7.15804382 6.31179956,8 5,8 C3.34314575,8 2,6.65685425 2,5 C2,3.34314575 3.34314575,2 5,2 Z M5,4 C4.44771525,4 4,4.44771525 4,5 C4,5.55228475 4.44771525,6 5,6 C5.55228475,6 6,5.55228475 6,5 C6,4.44771525 5.55228475,4 5,4 Z" />
                    </svg>
                    <button className="my-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 ml-8 border-none border-gray-400 rounded">
                        Button
</button>
                </div>
            </div>
        </header>
    )
}

export default Header;