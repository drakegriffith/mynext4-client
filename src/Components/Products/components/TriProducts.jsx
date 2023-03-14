import React from "react";  
import { Paper, Card, Image, Avatar } from "@mantine/core";
import { Box, Book2 } from 'tabler-icons-react';
     
function TriProducts() {
    return (
        <div className='tri-product-container'>
            <Card id="products-indiv" sx={{width: '30vw', height: '40vh'}}  shadow="sm" radius="md" withBorder>
            <Card.Section sx={{height: '110px'}}>
           <Image width='30vw' sx={{ position: 'absolute', backgroundSize: 'cover', width: 260, height: 80}} height={160} src='https://images.unsplash.com/photo-1645213116705-26ca5e1aea87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzk0NzMyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </Card.Section>
        <h4 style={{fontSize: '20px', position: 'relative', top: '18%', textAlign: 'center', marginRight: 35}}> Individual Plan  </h4> 
            </Card>
            <Card id="products-schools" sx={{width: '35vw', height: '60vh'}}  shadow="sm" radius="md" withBorder>
            <Card.Section sx={{height: '110px'}}>
           <Image width='35vw' sx={{ position: 'absolute', backgroundSize: 'cover', width: '35vw', height: 80}} height={160} src='https://images.unsplash.com/photo-1641483670569-c8c4076b2c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMzk0NzMyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </Card.Section>
        <h4 style={{fontSize: '24px', position: 'relative', top: '11%', textAlign: 'center'}}> Pro Plan (School Systems) </h4> 
            </Card>
            <Card id="products-free" sx={{width: '30vw', height: '40vh'}}  shadow="sm" radius="md" withBorder>
            <Card.Section sx={{height: '110px'}}>
           <Image width='35vw' sx={{ position: 'absolute', backgroundSize: 'cover', width: '35vw', height: 80}} height={160} src='https://images.unsplash.com/photo-1641763773957-35922086117c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMzk0NzMyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </Card.Section>
        <h4 style={{fontSize: '20px', position: 'relative', top: '18%', textAlign: 'center', marginLeft: 45}}> Individual Plan Plus  </h4> 
        <div style={{width: '100%', position: 'relative', top: '18%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Avatar size={40} color="red" radius="md" style={{position: 'relative', marginRight: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'relative', fontSize: '12px' }}> Access to all academic resources. </p>
            </div>
            <div style={{width: '100%', position: 'relative', top: '22%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Avatar size={40} color="yellow" radius="md" style={{position: 'relative', marginRight: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Book2 style={{width: '36px'}} />
            </Avatar>
            <p style={{position: 'relative', fontSize: '12px' }}> Personalized recommendations. </p>
            </div>
            </Card>
        </div>
    )
}

export default TriProducts;