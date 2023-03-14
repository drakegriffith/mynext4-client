import React from 'react';
import { createStyles, Avatar, Text, Group, Button } from '@mantine/core';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  theme: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    backgroundColor:"transparent",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    border: 'none',
    fontSize: '13px',
    cursor: 'pointer',

    
   },

  links: {
    cursor: 'pointer',
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export default function UserInfoIcons({ avatar, name, title, phone, email }: UserInfoIconsProps) {
  const { classes } = useStyles();
  function handleOnClick() {

  }
  return (
    <div>
        
      <Group noWrap >
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
            {title}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {name}
          </Text>
       

          <a className={classes.links} href="./https://www.linkedin.com/in/drakegriffith8/" target="_parent"><Group noWrap spacing={10} mt={6}>
            <BrandLinkedin size={16} className={classes.icon} />
            <button className={classes.theme} >
              {phone}
            </button>
          </Group></a>

          <a className={classes.links} href="./https://www.linkedin.com/in/drakegriffith8/" target="_parent"><Group noWrap spacing={10} mt={6}>
     
     <BrandGithub size={16} className={classes.icon} />
     <button className={classes.theme} >
       {email}
     </button>
   </Group>
 </a>
        </div>

        
      </Group>

    </div>
  );
}