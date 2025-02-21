import './bar.css'

//close bar
function closea() {
    const bar = document.getElementById('bar');
    bar.style = "left: -300px;";
}

//sitebar
export function Bar() {
    return (
        <div className="sitebar" id='bar'>
            <div className="img">
                <i className="fa-solid fa-chart-line"></i>
                <h2>Dashboard <sup>v.01</sup></h2>
            </div>
            <button id='close' onClick={closea}><i className="fa-solid fa-xmark"></i></button>
            <nav>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-key"></i> Dashboard </a><i className="fa-solid fa-angle-right"></i></li>
                    <li><a href="#"><i className="fa-solid fa-clipboard-check"></i> Products </a><i className="fa-solid fa-angle-right"></i></li>
                    <li><a href="#"><i className="fa-solid fa-id-card"></i> Customers </a><i className="fa-solid fa-angle-right"></i></li>
                    <li><a href="#"><i className="fa-solid fa-wallet"></i> Incomes </a><i className="fa-solid fa-angle-right"></i></li>
                    <li><a href="#"><i className="fa-solid fa-receipt"></i> Promote </a><i className="fa-solid fa-angle-right"></i></li>
                    <li><a href="#"><i className="fa-solid fa-circle-info"></i> Help </a><i className="fa-solid fa-angle-right"></i></li>
                </ul>
            </nav>
        </div>
    )
}