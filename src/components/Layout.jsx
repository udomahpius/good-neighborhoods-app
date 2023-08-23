import { Nav, SideBar } from "@/components"

function Layout({ children }) {
    return (
        // <>
        //     <Nav />
        //     <SideBar />
        //     <div className="px-12 pt-24 sm:ml-64 relative bg-white">
        //         { children }
        //     </div>
        // </>
        <div className="wrapper overflow-y-hidden  h-screen">
            {/* <Nav /> */}
            <SideBar />
            <article className="relative h-screen overflow-y-auto w-full bg-gray-50">
                { children }
            </article>
            
        </div>
    );
}

export default Layout;