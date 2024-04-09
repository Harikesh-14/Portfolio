import React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ReactFormEmailProp = {
  message: string
  senderEmail: string,
}

function ContactFormEmail({ message, senderEmail }: ReactFormEmailProp) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body className='bg-gray-100 !text-black'>
          <Container>
            <Section className='flex flex-col justify-center items-center bg-white border border-black/10 my-10 px-10 py-0 rounded-md'>
              <Text className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                You received the following messages from the contact form
              </Text>
              <Text>{message}</Text>
              <Button
                className="w-[8rem] bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`mailto:${senderEmail}`}
              >
                Reply
              </Button>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail