import React from 'react';
import styles from './Search.module.css';
import { XvbaLogoSharedComp } from '../../../../shared/components/Xvba-Logo.shared.component';


export const SearchComp = () => {

    return (
        <div>
            <div className={styles.Search}>
                <XvbaLogoSharedComp size="7rem"></XvbaLogoSharedComp>

            </div>
            <SearchInputComp></SearchInputComp>
        </div>

    )
}

const SearchInputComp = () => {
    return (
        <div>
            <input placeholder="Search VBA Package" className={styles['Search-Input']}></input>
            <button className={styles['Search-Input-Btn']}>Search</button>
        </div>
    )
}