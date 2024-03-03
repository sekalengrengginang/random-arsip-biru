import { Card, Stack, Heading, CardBody, Image, Text,Divider } from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from "react";
export default function StudentCard() {
  const [student, setStudent] = useState([]);
  const [studentName, setStudentname] = useState([]);
  async function getStudent() {
    try {
      const res = await axios.get('https://api-blue-archive.vercel.app/api/character/random');
      setStudent(res.data.data[0])
      setStudentname(res.data.data[0].names)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getStudent();
  }, [])
  return (
    <>
      <Card
        boxShadow='dark-lg'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'>
        <Image
          objectFit='cover'
          src={student.photoUrl}
          alt='Foto Siswa'
        />
        <CardBody >
        <Heading  fontSize='5xl' style={{textAlign:"center"}}>{studentName.firstName} {studentName.lastName}</Heading>
          <Stack  spacing='3'>

            <Divider />
            <Text fontSize='md'>
              {student.birthday}
            </Text>
            <Text fontSize='md'>
              {student.age}
            </Text>
            <Text fontSize='md'>
              {student.school}
            </Text>
            <Divider />
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
