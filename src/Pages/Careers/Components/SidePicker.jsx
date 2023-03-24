import { createStyles, SegmentedControl, ActionIcon } from '@mantine/core';
import React, { useState } from 'react';
import { Send } from 'tabler-icons-react';
import './SidePicker.css';
import { addCareer } from '../../../redux/careers/careerActions';

const useStyles = createStyles((theme) => ({
  root: {
  
  
  },


  active: {
  
  },

  control: {
    border: '0 !important',
  },

  labelActive: {
  
  },
}));

function SidePicker(props) {
  const { classes } = useStyles();
  const [value, setValue] = useState('Favorite');

  const click = () => {
    if (props.type === "career") {
      addCareer(props.id);
    }
  }
  return (

    <div className='side_picker_root'>

    
      <SegmentedControl
        radius="xl"
        size="md"
        data={['Favorite', 'Like', 'Dislike']}
        classNames={classes}
        value={value}
        onChange={setValue}
      />

      <ActionIcon variant='filled'
      className='side_picker_btn'
      onClick={click}>
        <Send size={16}/>
      </ActionIcon>

    </div>
  );
};

export default SidePicker;