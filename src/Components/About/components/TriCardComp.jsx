import React from "react";
import "../About.css";
import { Paper, Card, Image, Avatar, Text } from "@mantine/core";
import { School, Cash } from 'tabler-icons-react';
import { Target, HandStop, Bow, BuildingBank, Calculator, MoodSadSquint, PencilMinus, ArrowDownCircle, FileCertificate} from 'tabler-icons-react';
function TriCardComp() {
        return (
    <div className='tri-cards-container'>
                    <Paper shadow='md' sx={{position: 'relative', width: '420px', height: '580px'}}>
                    <Card sx={{margin: 0, padding: 0, width: '420px', height: '580px'}} shadow="sm" radius="md" withBorder>
        <Card.Section sx={{height: '70px'}}>
           <Image width='420px' sx={{ position: 'absolute', backgroundSize: 'cover', width: 260, height: 80}} height={100} src='https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        </Card.Section>
        <Avatar size={50} color="green" radius="md" style={{position: 'absolute', left: '75%', marginTop: 6, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Cash style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'absolute', left: '74.4%', top: '24.1%'}}> High Salary </p>
            <div style={{marginTop: 42,  marginBottom: 15, display: 'flex', alignItems: 'center'}}>
            <h3 style={{ marginBottom: 0, marginTop: 5, marginLeft: 5, fontSize: '24px'}}> Chemistry </h3>
           
         
      </div>
     
        <Text sx={{textAlign: 'center', marginTop: 6}} size="md" color="dimmed">
       Chemistry is challenging for any student. It's an essential for most as it is a core class, but achieving an A will take a lot of work according to most.
  </Text>
  <h4 style={{fontSize: '18px', marginTop: '12px', marginBottom: 0, textAlign: 'center'}}> Careers to Colleges </h4>
  <Card.Section sx={{position: 'relative', borderRadius: '3px', marginTop: 14,  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar mt={0} color="yellow" style={{width: '58px', height: '74px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                GT
      </Avatar>
      <p style={{marginTop: 10}}> Georgia Tech </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="indigo" style={{width: '58px', height: '74px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               D
      </Avatar>
      <p style={{marginTop: 10}}> Duke </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="blue" style={{width: '58px', height: '74px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              M
      </Avatar>
      <p style={{marginTop: 10}}> Michigan </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="red" style={{width: '58px', height: '74px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              +
      </Avatar>
      <p style={{marginTop: 10}}> More </p>
      </div>
        </Card.Section>
        <h4 style={{fontSize: '18px', marginTop: '16px', marginBottom: 0, textAlign: 'center'}}> Career Characteristics </h4>
        <Card.Section sx={{position: 'relative', borderRadius: '3px', marginTop: 20,  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar mt={0} color="orange" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <School width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Extra Edu </p>
      </div>
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="red" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Bow width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Competitive </p>
      </div>
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="indigo" style={{width: '44px', height: '54px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HandStop width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Hands On </p>
      </div>
        </Card.Section>
    </Card>
                    </Paper>
                    <Card sx={{margin: 0, padding: 0,position: 'relative', width: '420px', left: 65, bottom: 500, height: '580px'}} shadow="sm" radius="md" withBorder>
        <Card.Section sx={{height: '70px'}}>
           <Image width='420px' sx={{ position: 'absolute', backgroundSize: 'cover', width: 260, height: 80}} height={100} src='https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80' />
        </Card.Section>
        <Avatar size={50} color="green" radius="md" style={{position: 'absolute', left: '75%', marginTop: 6, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Cash style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'absolute', left: '74.4%', top: '24.1%'}}> High Salary </p>
            <div style={{marginTop: 42,  marginBottom: 15, display: 'flex', alignItems: 'center'}}>
            <h3 style={{ marginBottom: 0, marginTop: 5, marginLeft: 5, fontSize: '24px'}}> Indiana </h3>
           
         
      </div>
     
        <Text sx={{textAlign: 'center', marginTop: 6}} size="md" color="dimmed">
        A fantastic college for anyone seeking a challenge, Indiana is a great school for any student. Most apply as an alternative, but acceptance to such a school is still impressive.
  </Text>
  <h4 style={{fontSize: '18px', marginTop: '12px', marginBottom: 0, textAlign: 'center'}}> Careers to Colleges </h4>
  <Card.Section sx={{position: 'relative', borderRadius: '3px', marginTop: 14,  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar mt={0} color="yellow" style={{width: '58px', height: '74px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                GT
      </Avatar>
      <p style={{marginTop: 10}}> Georgia Tech </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="indigo" style={{width: '58px', height: '74px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               D
      </Avatar>
      <p style={{marginTop: 10}}> Duke </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="blue" style={{width: '58px', height: '74px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              M
      </Avatar>
      <p style={{marginTop: 10}}> Michigan </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="red" style={{width: '58px', height: '74px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              +
      </Avatar>
      <p style={{marginTop: 10}}> More </p>
      </div>
        </Card.Section>
        <h4 style={{fontSize: '18px', marginTop: '16px', marginBottom: 0, textAlign: 'center'}}> Career Characteristics </h4>
        <Card.Section sx={{position: 'relative', borderRadius: '3px', marginTop: 20,  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar mt={0} color="orange" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <School width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Extra Edu </p>
      </div>
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="red" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Bow width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Competitive </p>
      </div>
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="indigo" style={{width: '44px', height: '54px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HandStop width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Hands On </p>
      </div>
        </Card.Section>
    </Card>
               

                    <Card sx={{margin: 0, padding: 0, width: '420px', height: '580px',  left: 130, bottom: 1000}} shadow="sm" radius="md" withBorder>
        <Card.Section sx={{height: '70px'}}>
           <Image width='420px' sx={{ position: 'absolute', backgroundSize: 'cover', width: 260, height: 80}} height={100} src='https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
        </Card.Section>
        <Avatar size={50} color="green" radius="md" style={{position: 'absolute', left: '75%', marginTop: 6, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Cash style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'absolute', left: '74.4%', top: '24.1%'}}> High Salary </p>
            <div style={{marginTop: 42,  marginBottom: 15, display: 'flex', alignItems: 'center'}}>
            <h3 style={{ marginBottom: 0, marginTop: 5, marginLeft: 5, fontSize: '24px'}}> Electrical Engineer </h3>
           
         
      </div>
     
        <Text sx={{textAlign: 'center', marginTop: 6}} size="md" color="dimmed">
        EE is an exciting and physically demanding career that challenges any individual who takes on the task. EE is a high-paying and high-demand job in today's time, and requires at least a Bachelors degree. 
  </Text>
  <h4 style={{fontSize: '18px', marginTop: '12px', marginBottom: 0, textAlign: 'center'}}> Careers to Colleges </h4>
  <Card.Section sx={{position: 'relative', borderRadius: '3px', marginTop: 14,  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar mt={0} color="yellow" style={{width: '58px', height: '74px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                GT
      </Avatar>
      <p style={{marginTop: 10}}> Georgia Tech </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="indigo" style={{width: '58px', height: '74px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               D
      </Avatar>
      <p style={{marginTop: 10}}> Duke </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="blue" style={{width: '58px', height: '74px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              M
      </Avatar>
      <p style={{marginTop: 10}}> Michigan </p>
      </div>
      <div style={{margin: 5,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="red" style={{width: '58px', height: '74px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              +
      </Avatar>
      <p style={{marginTop: 10}}> More </p>
      </div>
        </Card.Section>
        <h4 style={{fontSize: '18px', marginTop: '16px', marginBottom: 0, textAlign: 'center'}}> Career Characteristics </h4>
        <Card.Section sx={{position: 'relative', borderRadius: '3px', marginTop: 20,  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Avatar mt={0} color="orange" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <School width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Extra Edu </p>
      </div>
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="red" style={{width: '44px', height: '54px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Bow width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Competitive </p>
      </div>
      <div style={{margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="indigo" style={{width: '44px', height: '54px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HandStop width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Hands On </p>
      </div>
        </Card.Section>
    </Card>
    </div>
        )
}

export default TriCardComp;