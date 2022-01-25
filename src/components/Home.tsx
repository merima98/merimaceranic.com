import {
  Box,
  Button,
  Image,
  Center,
  Text,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import { siLinkedin, siInstagram } from "simple-icons/icons";
import { Mail } from "react-feather";

import SimpleIcon from "./SimpleIcon";
import { PROFILE } from "../lib/constants";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/merima-ceranic/",
    icon: <SimpleIcon size={16} path={siLinkedin.path} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/merii__lu/",
    icon: <SimpleIcon size={16} path={siInstagram.path} />,
  },
];

function Home() {
  return (
    <>
      <Center>
        <Box>
          <Center>
            <Image
              height="120px"
              width="120px"
              borderRadius="full"
              src="profile.jpg"
              alt=""
              mb="2"
            />
          </Center>
          <Box textAlign={"center"} mb={4}>
            <Text>{PROFILE.NAME}</Text>
            <Text>{PROFILE.TAGLINE}</Text>
            <Text>{PROFILE.LOCATION}</Text>
          </Box>
          <Wrap>
            <WrapItem>
              <Link href={PROFILE.CTA_BUTTON_LINK}>
                <Button leftIcon={<Mail size={16} />}>Mail</Button>
              </Link>
            </WrapItem>
            {LINKS.map((item) => {
              return (
                <WrapItem key={item.href}>
                  <Link href={item.href} isExternal>
                    <Button leftIcon={item.icon}>{item.label}</Button>
                  </Link>
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
      </Center>
    </>
  );
}

export default Home;
