import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from 'phosphor-react';
import { Form } from "./styles";

export function ClaimUsernameForm() {
  return (
    <div>
      <Form as="form">
        <TextInput  size="sm" prefix="ignite.com/"  placeholder="Seu usuário" />
        <Button size="sm" type="submit">
          Reservar usuário
          <ArrowRight />
        </Button>
      </Form>
    </div>
  )
}