import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header() {
    const [loc, setLoc] = useState('')
    const role = useSelector((state) => state.auth.roleid)

    return (
        <div className="header">
            <p className="logo">Штрафам ДА!</p>
            {
                role == undefined ?
                    <nav className="navLink">
                        <Link to={'/auth'} className="navLink_a">Авторизация</Link>
                        <Link to={'/reg'} className="navLink_a">Регистрация</Link>
                    </nav> :
                    role == 1 ?
                        <nav className="navLink">
                            <Link to={'/'}
                                className="navLink_a">Главная</Link>
                            <Link to={'/newRequest'}
                                className="navLink_a">Создать заявку</Link>
                            <Link to={'/myAccount'}
                                className="navLink_a">Профиль</Link>
                        </nav >
                        :
                        <nav className="navLink">
                            <Link to={'/admin'}
                                className="navLink_a">Главная</Link>
                            <Link to={'/myAccount'}
                                className="navLink_a">Профиль</Link>
                        </nav>
            }
        </div >
    )
}

export default Header

// ul li