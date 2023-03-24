import {
    AppShell,
    Navbar,
    Header,
    Text,
    Group,
    Code,
    ScrollArea,
    Image,
    createStyles,
    MediaQuery,
    Burger,
    useMantineTheme,
    Autocomplete
  } from '@mantine/core';

const styleSheet = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
    },
  },
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0,
    },
  
    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.md,
        textAlign: 'center',
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: 28,
          textAlign: 'left',
        },
      },
  
    links: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
    },
  
    search: {
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
  
    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },
      tools: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.fn.smallerThan('lg')]: {
          marginLeft: 0,
          paddingLeft: 0,
          justifyContent: 'space-around',
          flexDirection: 'column'
      },
      },
    
      title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.md,
        textAlign: 'center',
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: 28,
          textAlign: 'left',
        },
      },
    
      cards: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
      }
    },
    
    stepPlan: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      [theme.fn.smallerThan('sm')]: {
          flexDirection: 'column',
    },
    },
    likedList: {
      width: '115px;',
      [theme.fn.smallerThan('lg')]: {
        width: '105px',
      },
      [theme.fn.smallerThan('md')]: {
        width: '70px',
      
  },
    },
    teambox: {
      alignItems: 'center',
      display: 'grid',
      marginTop: '15px',
      gridTemplateRows: '160px 160px ',
      gridTemplateColumns: '320px 320px 320px',
      justifyContent: 'center',
      paddingLeft: '100px',
      [theme.fn.smallerThan('lg')]: {
        paddingLeft: '0px',
        marginLeft: '80px',
        gridTemplateColumns: '320px 320px',
      },
      [theme.fn.smallerThan('md')]: {
          display: 'none',
  
        
      },
    },
    subtitle: {
      display: 'flex',
      flexDirection: 'column',
      
    
    }, 
  }));

  export default styleSheet;