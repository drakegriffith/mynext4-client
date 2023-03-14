import {React, useState, useEffect} from 'react';
import { shuffle } from 'lodash';
import { School, Users, Bug, Skull, BallFootball } from 'tabler-icons-react';

const MyCollegeCards = [
    {
        title: 'Smart School',
        subtitle: 'This college has a strong academic reputation.',
        icon: School,
    },
    {
        title: "Wesley's Theorum",
        subtitle: 'This college has a high ranking physics department.',
        icon: Bug,
    },
    {
        title: "Exclusive Entry",
        subtitle: 'This college has a crucially low acceptance rate.',
        icon: Skull,
    },
    {
        title: 'Sport School',
        subtitle: 'This college has a strong athletic reputation.',
        icon: BallFootball,
    },
    {
        title: 'Fan Favorite',
        subtitle: 'This school had over 50000 applicants!',
        icon: Users,
    },
]

export default MyCollegeCards





 

















