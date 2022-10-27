import Image from "next/image";
import { menus } from "../api/data";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 p-5 md:px-20 items-center">
                {/* Left */}
                <div className="hidden lg:inline-flex relative items-center h-8">
                    <Image
                        layout="fill"
                        src="https://links.papareact.com/qd3"
                        objectFit="contain"
                        objectPosition="left"
                        alt="logo"
                    />
                </div>
                {/* Middle */}
                <div className="flex sm:justify-center items-center border-[2px] rounded-full py-2 md:shadow-sm cursor-pointer w-max">
                    <span className="hidden md:inline-flex flex-grow ml-2 border-r-2 md:px-4 w-max text-sm text-gray-900">Anywhere</span>
                    <span className="hidden md:inline-flex border-r-2 md:px-4 w-max text-sm text-gray-900">Any week</span>
                    <span className="inline-flex">
                        <input className="outline-none pl-5 bg-transparent py-2 text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Add guests" />
                        <svg className="bg-red-400 h-8 rounded-full p-2 hidden md:inline-flex md:mx-2" color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path fill="#f87171" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                </div>

                {/* Right */}
                <div className="flex space-x-4 items-center justify-end text-gray-500">
                    <p className="hidden xl:inline text-sm">Become a host</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                    </svg>
                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                        </svg>


                    </div>

                </div>
            </div>
            <hr />
            <div className="flex lg:mx-16 my-6">
                <div className="flex snap-mandatory snap-x overflow-x-auto w-11/12 hover:overflow-scroll scroll-smooth">
                    {menus.map((menu, i) => (
                        <div className="m-2 p-2 snap-center cursor-pointer" key={i}>
                            <Image src={menu.icon} alt="menu" width={24} height={24} color="white" />
                            <p className="text-xs w-max">{menu.title}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:inline-flex mx-auto mb-auto border-2 rounded-lg p-3 cursor-pointer mt-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    </svg>

                    <button className="text-xs my-auto bg-white ml-2 text-gray-800 font-semibold border-none border-gray-400 rounded">
                        Filters
</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
