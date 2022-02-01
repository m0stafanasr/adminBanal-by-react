import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
            <div className="container">
                <a className="navbar-brand" href="#">Admin panal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" href="#" to="/Products" >Products <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" href="#" to="/orders">Orders <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" href="#" to="Users"> Users <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" href="#" to="/SellersList">Sellers <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" href="#" to="/Sales">Sales <span className="sr-only">(current)</span></Link>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>



    )
}
export default Navbar