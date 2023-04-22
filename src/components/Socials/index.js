//import React from 'react';
import React, { useState, useEffect } from 'react';
//import clsx from 'clsx';
//import styles from './styles.module.css';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { useColorMode } from '@docusaurus/theme-common';

const socialDetails = [
    {
        name: 'github',
        classname: 'fab fa-github fa-fw',
        link: 'https://github.com/wheremyfiji',
    },
    {
        name: 'telegram',
        classname: 'fab fa-telegram fa-fw',
        link: 'https://t.me/wheremyfiji',
    },
    {
        name: 'vk',
        classname: 'fab fa-vk fa-fw',
        link: 'https://vk.com/id168729180',
        //to: '',
    },
    {
        name: 'lastfm',
        classname: 'fab fa-lastfm-square fa-fw',
        link: 'https://www.last.fm/user/wheremyfiji',
    },
    {
        name: 'shikimori',
        classname: 'fab fa-s',
        link: 'https://shikimori.me/wheremyfiji',
    },
];

export default function Socials() {
    const { colorMode, setColorMode } = useColorMode();

    useEffect(() => {
        const node = loadCSS(
            // 'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            'https://use.fontawesome.com/releases/v6.4.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return node;

        // return () => {
        //     if (node.parentNode !== undefined) {
        //         node.parentNode.removeChilde(node);
        //     }
        // };
    }, []);

    return (
        <div>
            {socialDetails.map(cn => {
                return (
                    <a
                        href={cn.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={cn.classname}
                    >
                        <Icon
                            className={cn.classname}
                            sx={{
                                // color: isDarkTheme ? 'white' : 'black',
                                //color: 'white',
                                color: colorMode === 'dark' ? 'white' : 'black',
                                fontSize: 30,
                                marginTop: 1,
                                marginRight: 1,
                            }}
                        />
                    </a>
                );
            })}
        </div>
    );
};