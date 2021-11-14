import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from '@chakra-ui/react'
import { signIn } from 'next-auth/client'

export default function GoogleButton() {
  return (
    <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}
        onClick={() => signIn('google')}
      >
        <Center>
          <Text>Iniciar sesión con Google</Text>
        </Center>
      </Button>
    </Center>
  )
}
