function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="../images/react.png" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                

            </nav>
        </header>
        
    );
}   
//ReactDOM.render(<Header/>, document.getElementById("title"));

function Footer() {
    return (
        <footer>
            <small>© 2022 Adeniyi development. All rights resderved.</small>
        </footer>    
    );
};

// using components
function Page() {
        return (
            <div>
                {/*
                you can use the header and footer components here so that you render just the page
                the header and footer are called the children components
                */}
                <Header/>
                <h1>
                    <b>Fun Facts about React: reasons I am excited to learn about react</b>
                </h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps , including mobile apps</li>
                </ul>
                <Footer/>
            </div>
            
    );
};
ReactDOM.render(<Page/>, document.getElementById("list"));
