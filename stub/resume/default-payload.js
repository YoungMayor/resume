export default {
    name: 'User Name',
    nick: '@usernick',
    title: 'Job Title',
    phone: '+xxxxxxxxxxxxxxx',
    website: 'https://example.com', // optional
    email: 'foo@example.com',
    address: 'Nigeria',
    competences: [
        ['Resourcefulness', 80],
        ['Logical reasoning', 90],
        ['Teamplayer', 95],
        ['Understanding', 95],
        ['Multi-tasking', 75],
        ['Respect for authority', 90],
    ],
    time: [
        ['Reading', 25, 'red'],
        ['Coding', 29, 'blue'],
        ['Social Activities', 15, 'green'],
        ['Excercise', 10, 'purple'],
        ['Singing', 5, 'yellow'],
        ['Sleeping', 20, 'cream']
    ],
    /**
     * All of the below links are optional. And you can add yours as well. 
     * Just pass an array with the following properties
     * ['https://example.com', 'material-design-icon-class', 'label', 'color class']
     */
    icon_links: [
        ['#', 'mdi-whatsapp', 'whatsapp number', 'green accent-4'],
        ['#', 'mdi-send-circle', 'telegram profile link', 'blue lighten-1'],
        ['#', 'mdi-github', 'github profile link', 'grey darken-3'],
        ['#', 'mdi-facebook', 'facebook profile link', 'blue'],
        ['#', 'mdi-discord', 'discord profile link', 'deep-purple accent-1'],
        ['#', 'mdi-linkedin', 'likedin profile link', 'blue accent-2'],
        ['#', 'mdi-twitter', 'twitter profile link', 'blue'],
        ['#', 'mdi-dev-to', 'dev.to profile link', 'black'],
    ],
    summary: `I am <b>Meyoron Aghogho (YoungMayor)</b>, a senior fullstack software engineer with proficiency in development and management of web application from the ground up. Right from the phase of conception to the planning phase, down to wireframing, navigation, UX designing, layout and code creation, SEO, optimizations and maintaenance
All of my development's are modern standard, fully equiped with unit and feature tests, efficient coding using best and standard practices to ensure a bug free app consumption while also giving you a slick and efficient user experience`,

    // Projects
    projects: [
        [
            'Project One Title',
            'Project description. Lorem ipsum dolor sit amet consectuar', [
                'Product feature',
                'Product feature',
                'Product feature',
                'Product feature'
            ]
        ],
        [
            'Project One Title',
            'Project description. Lorem ipsum dolor sit amet consectuar', [
                'Product feature',
                'Product feature',
                'Product feature',
                'Product feature'
            ]
        ],
        [
            'Project One Title',
            'Project description. Lorem ipsum dolor sit amet consectuar', [
                'Product feature',
                'Product feature',
                'Product feature',
                'Product feature'
            ]
        ],
    ],

    // strengths
    strengths: [
        [
            'Strength',
            'mdi-star',
        ],
        [
            'Strength',
            'mdi-star',
        ],
        [
            'Strength',
            'mdi-star',
        ],
        [
            'Strength',
            'mdi-star',
        ],
        [
            'Strength',
            'mdi-star',
        ],
    ],


    // technologies. 
    // You can add more, just pas the tech name and a correspondng material design icon
    technologies: [
        ['HTML5', 'mdi-language-html5'],
        ['CSS3', 'mdi-language-css3'],
        ['JavaScript', 'mdi-language-javascript'],
        ['PHP', 'mdi-language-php'],
        ['MySQL', 'mdi-database'],
        ['Bootstrap', 'mdi-bootstrap'],
        ['Python', 'mdi-language-python'],
        ['jQuery', 'mdi-jquery'],
        ['VueJS', 'mdi-vuejs'],
        ['Laravel', 'mdi-laravel'],
        ['Wordpress', 'mdi-wordpress'],
        ['NPM', 'mdi-npm'],
        ['NuxtJS', 'mdi-nuxt'],
        ['Vuetify', 'mdi-vuetify'],
        ['NodeJS', 'mdi-nodejs'],
        ['React', 'mdi-react'],
    ],

    histories: {
        /**
         * Career History
         * Array Map: 
         *  [
         *      title: String, 
         *      institution: String, 
         *      date: String,
         *      location: String,
         *      note: String, Null,
         *      list: Array
         *  ]
         */
        career: [
            [
                'Job Title',
                'Company Name',
                '2021 - 2021',
                'Company location',
                'Job description', [
                    'Job Task',
                    'Job Task',
                    'Job Task',
                    'Job Task',
                    'Job Task',
                ]
            ],
            [
                'Job Title',
                'Company Name',
                '2021 - 2021',
                'Company location',
                'Job description', [
                    'Job Task',
                    'Job Task',
                    'Job Task',
                    'Job Task',
                    'Job Task',
                ]
            ],
            [
                'Job Title',
                'Company Name',
                '2021 - 2021',
                'Company location',
                'Job description', [
                    'Job Task',
                    'Job Task',
                    'Job Task',
                    'Job Task',
                    'Job Task',
                ]
            ],
        ],

        /**
         * Education History
         * Array Map: 
         *  [
         *      title: String, 
         *      institution: String, 
         *      date: String,
         *      location: String,
         *      note: String, Null,
         *      list: Array
         *  ]
         */
        education: [
            [
                'Certification',
                'School',
                '2021 - 2021',
                'School Location',
                "An optional note", [
                    'list item one',
                    'list item two',
                    'list item three',
                ],
            ],
            [
                'Certification',
                'School',
                '2021 - 2021',
                'School Location',
                "An optional note", [
                    'list item one',
                    'list item two',
                    'list item three',
                ],
            ],
            [
                'Certification',
                'School',
                '2021 - 2021',
                'School Location',
                "An optional note", [
                    'list item one',
                    'list item two',
                    'list item three',
                ],
            ],
        ]
    }
}