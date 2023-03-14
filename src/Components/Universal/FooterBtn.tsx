import React from 'react';
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import {
  CreditCard,
  BuildingBank,
  Repeat,
  ReceiptRefund,
  Receipt,
  ReceiptTax,
  Report,
  CashBanknote,
  Container,
  Coin,
} from 'tabler-icons-react';

const mockdata = [
  { title: 'Product Overview', icon: CreditCard, color: 'violet' },
  { title: 'Demo MyNext4+', icon: BuildingBank, color: 'indigo' },
  { title: 'Pricing', icon: BuildingBank, color: 'indigo' },
  

];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '18px',
 
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

export default function FooterGrid() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder mb={50} ml="xl" radius="md" 
    className={classes.card}>
   
        <Text className={classes.title}>Facilitate the college counseling process with MyNext4+  </Text>
        <Text mt={10} mb={40} sx={{fontSize: '14px'}}> We want to increase student oppourtunity nationwide.
        Start using MyNext4 for your school system today. </Text>
      <SimpleGrid cols={3} mt="xl">
        {items}
      </SimpleGrid>
    </Card>
    
  );
}