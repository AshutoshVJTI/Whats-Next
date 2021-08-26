import React from 'react';
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Movies',
    path: '/movies',
    icon: <MovieIcon />,
    cName: 'nav-text'
  },
  {
    title: 'TV Series',
    path: '/series',
    icon: <TvIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/search',
    icon: <SearchIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <LockIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Signup',
    path: '/signup',
    icon: <LockOpenIcon />,
    cName: 'nav-text'
  }
];