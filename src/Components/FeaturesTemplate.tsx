import React from 'react';
import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import { Icon as TablerIcon } from 'tabler-icons-react';

import styleSheet from './StyleSheet'

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}


export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <Container mb={20} >
      <ThemeIcon variant="light" mb={7} size={50} radius={40}>
        <Icon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 10 }}>{title}</Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </Container>
  );
}

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data: FeatureProps[];
}

export default function FeaturesTemplate({ title, description, data }: FeaturesGridProps) {
  const { classes } = styleSheet();
  const theme = useMantineTheme();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Text size="md" className={classes.description}>
          {description}
        </Text>
    
      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
