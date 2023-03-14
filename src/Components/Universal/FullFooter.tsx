import React from 'react';
import { Anchor,Image, createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import LogoNoText from "../Universal/Images/MyNext4Icon.png"

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingLeft: 280,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: 500,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
      <div className={classes.groups}>{groups}</div>
        <div className={classes.logo}>
            <Container sx={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
         <Image width="24px" src={LogoNoText} />
          <Text sx={{fontWeight: 600}}ml={4}> MyNext4 </Text>


          </Container>
    
          <Text mt="6px"size="xs" color="dimmed" className={classes.description}>
           Complement your academic counseling today. </Text>
          <Group mt="30px" sx={{display: 'flex', justifyContent:'center'}} spacing={0} className={classes.social} noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
        </div>
       
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © Copyright 2022 MyNext4 Inc. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
        <Anchor<'a'>
      color="dimmed"
      ml="10px"
      mr="10px"
      href=""
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      User End Agreement
    </Anchor>

    <Text sx={{color: 'gray'}}> | </Text>
           
    <Anchor<'a'>
      color="dimmed"
      ml="10px"
      mr="10px"
      href=""
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      Terms of Service
    </Anchor>
    <Text sx={{color: 'gray'}}> | </Text>
    <Anchor<'a'>
      color="dimmed"
      ml="10px"
      mr="10px"
      href=""
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      Privacy Policy
    </Anchor>
        </Group>
      </Container>
    </footer>
  );
}