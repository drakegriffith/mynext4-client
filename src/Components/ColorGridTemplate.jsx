import React from 'react';
import {  Container,createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import {
  CalendarEvent,
  Notebook,
  Backpack,
  School,
  Package,
  User,
  ChefHat,
  Map,
  AddressBook,

  Coin,
} from 'tabler-icons-react';
import '../Styles/Landing.css'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
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
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export default function ColorGridTemplate(props) {
  const { classes, theme } = useStyles();

  const items = props.data.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container pl="120px" pt={70} className={classes.tools}>
      <Card withBorder ml="xl" radius="md" 
      className={classes.card}>
        <Group position="apart">
          <Text className={classes.title}>{props.title}</Text>
          <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
            + 5 other tools
          </Anchor>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
      <Container  className="resourcebox"> </Container>
    </Container>

    
  );
}