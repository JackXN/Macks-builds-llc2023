"use client";
import React from 'react';
import CountUp from 'react-countup';
import {Box, Flex,Text,Spacer} from '@chakra-ui/react';

const Counter = () => {
  return (
   <>
<Box sx={styles.container}>

  
<Box sx={styles.counterBox}>
  <Box sx={styles.count}>
  <CountUp end={10} duration={5}/> 
  +
  </Box>
  <Box sx={styles.countText}>
    Years <br/> Of Experience
  </Box>
</Box>


<Spacer/>


<Box sx={styles.counterBox}>
  <Box sx={styles.count}>
  <CountUp end={50} duration={5}/>
  +
  </Box>
<Box sx={styles.countText}>
  Projects <br/> Completed
  </Box>
</Box>

</Box>
   </>
  )
}





const styles = {
container: {
color: 'orange',
padding: '30px',
position: 'relative',
top:['5rem'],

display: 'flex',
flexDirection: 'row',

},
counterBox: {
  display: 'flex',
  flexDirection: 'column',

},
count: {
  fontSize: '50px',
  color: '#D9C05A',
  fontFamily: 'Lato',
  fontWeight: 'bold'
},
countText:{
  color:'gray',
  fontFamily: 'Lato',
  fontWeight: 'bold'
}
}


export default Counter
