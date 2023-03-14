import React from 'react';
import './ComponentsSheet.css';
import { Avatar } from '@mantine/core';
import { Target, Atom2, Alarm, BookUpload, Calculator, MoodSadSquint, PencilMinus, ArrowDownCircle, FileCertificate} from 'tabler-icons-react';
import { Paper, Card, Image, Group, Text} from '@mantine/core';

function CourseCard() {
    return (
        <Card sx={{margin: 0, padding: 0, width: 260, height: 340}} shadow="sm" radius="md" withBorder>
        <Card.Section sx={{height: '70px'}}>
               <Image width={260} sx={{ position: 'absolute', width: '100%', backgroundSize: 'cover', width: 260, height: 80}} height={100} src='https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />
            </Card.Section>
            <Avatar color="green" radius="md" style={{position: 'absolute', left: '75%', marginTop: 8, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Calculator style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'absolute', left: '77.2%', top: '35.1%'}}> STEM </p>
            <div style={{marginTop: 42,  marginBottom: 10, display: 'flex', alignItems: 'center'}}>
            <h3 style={{ marginBottom: 0, marginRight: 44, fontSize: '16px'}}> AP Calculus </h3>
           
         
      </div>
            <Text sx={{textAlign: 'center', marginTop: 10}} size="xs" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway.
      </Text>
      <Card.Section sx={{position: 'absolute', left: '22%',   borderRadius: '3px', marginTop: 20, width: '180px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} >
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="violet" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BookUpload width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> High Volume </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="orange" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Atom2 width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Crucial Class </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="pink" style={{width: '44px', height: '54px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                3
      </Avatar>
      <p style={{marginTop: 10}}> Average AP </p>
      </div>
        </Card.Section>
        </Card>
    )
}

export default CourseCard;