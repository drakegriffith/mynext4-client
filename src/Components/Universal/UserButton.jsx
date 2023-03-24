import React from 'react';
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
  },
}));


export function UserButton(props) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...props.others}>
      <Group>
        <Avatar src={props.image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {props.name}
          </Text>

          <Text color="dimmed" size="xs">
            {props.email}
          </Text>
        </div>

       
      </Group>
    </UnstyledButton>
  );
}