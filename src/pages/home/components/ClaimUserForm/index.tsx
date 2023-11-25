import { Button, TextInput, Text } from "@ignite-ui/react";
import { ArrowRight } from 'phosphor-react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormAnnotation } from './styles'

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O nome de usuário deve ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O nome de usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema >;

export function ClaimUsernameForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema ),
    defaultValues: {
      username: '',
    }
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput 
          size="sm" 
          prefix="ignite.com/" 
          placeholder="Seu usuário" 
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar usuário
          <ArrowRight />
        </Button>

      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}