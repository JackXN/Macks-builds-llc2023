import React from 'react'
import {Box,  Button} from '@chakra-ui/react';
const Buttons = () => {
  return (
    <Box sx={styles.buttonContainer}>
    <Button
    bg='#D9C05B'
    color='white'
    >Our Services</Button>
    <Button
    color='#D9C05B'
    bg='none'            
    >Our Projects
    </Button>
</Box>
  )
}

const styles = { 

    buttonContainer: {
        mt: ['50px'],
        // alignItems: 'center',
        // display: 'flex',
        // textAlign: 'center',
        

        Button: {
            margin: '10px 10px',
            fontFamily: ''
        }
    }
}

export default Buttons
