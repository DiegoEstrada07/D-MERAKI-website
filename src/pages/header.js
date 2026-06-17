import '../App.css';

function Header(){
    return(
        <div>
            <header className="header">
                <div class="logo">
                    D'MERAKI
                </div>

                <nav class="nav">
                    <a href="" class="active">Home</a>
                    <a href="">Services</a>
                    <a href="">Promotions</a>
                    <a href="">Contact</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;