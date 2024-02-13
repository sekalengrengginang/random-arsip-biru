import { Card, Stack, Heading, CardBody, Image, Text, Divider, Button } from '@chakra-ui/react'
import axios from "axios";
import {  useState } from "react";
export default function StudentCard() {
  const [student, setStudent] = useState('')
  const getStudent = () => {
    axios.get('https://api-blue-archive.vercel.app/api/character/random')
      .then(res => {
        setStudent(res.data.data[0])
        console.log(res.data.data[0])
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={student.photoUrl}
            alt='arsip biru'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{student.name}</Heading>
            <Text>

            </Text>
            <Text color='blue.600' fontSize='2xl'>
            {student.school}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <Button colorScheme='blue' onClick={getStudent}>Button</Button>
      </Card>
    </>
  )
}
