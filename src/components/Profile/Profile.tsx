import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ava from '../../img/avatar.jpg'


export const Profile = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img className={s.avatarImg} src={ava} alt=""/>
                </div>
                <div className={s.name}>Vladislav Boiarinov</div>
                <div>
                    <div className={s.textCols}>
                        <div className={s.textColsLeft}>
                            <div>Country:</div>
                            <div>Date of birth:</div>
                            <div>Education:</div>
                            <div>Telegram:</div>
                        </div>
                        <div className={s.textColsRight}>
                            <div>Minsk</div>
                            <div>7 February 2002</div>
                            <div>BNTU 2020-2024</div>
                            <div>@boyarinov_1</div>
                        </div>
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}
