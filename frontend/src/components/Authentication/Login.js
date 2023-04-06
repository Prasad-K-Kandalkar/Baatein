import { FormControl, FormLabel } from '@chakra-ui/form-control'
import {Input,InputGroup,InputRightElement} from '@chakra-ui/input'
import {VStack} from '@chakra-ui/layout'
import React,{useState} from 'react'
import {Button} from "@chakra-ui/button" 

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    
    
    const postDetails = (pics)=>{

    }
    const submitHandler = ()=>{

    }

  return (
    <VStack spacing="5px">
        
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
            placeholder='Enter Your Email'
            onChange={(e)=>setEmail(e.target.value)}
            >

            </Input>
        </FormControl>
        
        <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>

    </VStack>
  )
}

export default Signup
