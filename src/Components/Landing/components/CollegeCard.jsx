import React from 'react';
import './ComponentsSheet.css';
import { Avatar } from '@mantine/core';
import { Target, BuildingBank, Calculator, MoodSadSquint, PencilMinus, ArrowDownCircle, FileCertificate} from 'tabler-icons-react';
import { Paper, Card, Image, Group, Text} from '@mantine/core';


function CollegeCard() {
    return (
        <Card sx={{margin: 0, padding: 0, width: 260, height: 340}} shadow="sm" radius="md" withBorder>
            <Card.Section sx={{height: '70px'}}>
               <Image width={260} sx={{ position: 'absolute', width: '100%', backgroundSize: 'cover', width: 260, height: 80}} height={100} src='https://images.unsplash.com/photo-1598058921517-81a452bc7cce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
            </Card.Section>
            <Avatar color="red" radius="md" style={{position: 'absolute', left: '75%', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Target style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'absolute', left: '76.5%', top: '35%'}}> Target </p>
            <div style={{marginTop: 42,  marginBottom: 10, display: 'flex', alignItems: 'center'}}>
            <h3 style={{ marginBottom: 0, marginRight: 44, fontSize: '16px'}}> Purdue University </h3>
           
         
      </div>
            <Text sx={{textAlign: 'center', marginTop: 10}} size="xs" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway.
      </Text>
      <Card.Section sx={{position: 'absolute', left: '22%',   borderRadius: '3px', marginTop: 20, width: '180px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} >
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="yellow" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FileCertificate width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Top Tier </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="blue" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <PencilMinus width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Extra Essays </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="pink" style={{width: '44px', height: '54px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ArrowDownCircle width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Low % </p>
      </div>
        </Card.Section>
        </Card>
    )
}

export default CollegeCard;