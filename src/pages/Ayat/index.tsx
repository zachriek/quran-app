import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Container, Divider, Flex, Grid, Text, Title } from '@mantine/core';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { IconPlayerPlay } from '@tabler/icons';
import useStyles from './styles';

const Ayat = () => {
  const { alafasyAyat, englishAyat, indonesianAyat }: any = useLoaderData();
  const [isPlaySound, setIsPlaySound] = useState<boolean>(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const playSoundHandler = (url: any) => {
    const audio = new Audio(url);
    setIsPlaySound(true);
    audio.play();
    audio.addEventListener('ended', () => setIsPlaySound(false));
  };

  return (
    <Container className={classes.container}>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.5 }} exit={{ opacity: 0, y: 100 }}>
        <Title order={2} className={classes.heading}>
          Surah {englishAyat?.englishName}
        </Title>
        <Title order={3} className={classes.subHeading}>
          - {englishAyat?.numberOfAyahs} Ayat -
        </Title>
      </motion.div>

      {alafasyAyat?.ayahs?.map((item: any, index: any) => (
        <motion.div key={item?.numberInSurah} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.5 * (index + 2) }} exit={{ opacity: 0, y: -100 }}>
          <Grid mt={50} align="center">
            <Grid.Col span={2}>
              <Title order={5} color="green">
                {item?.numberInSurah}
              </Title>
            </Grid.Col>
            <Grid.Col span={10} sx={{ textAlign: 'right' }}>
              <Title order={3} mb={16} sx={{ lineHeight: '3.4rem' }}>
                {item?.text}
              </Title>
              <Text color={theme.colors.gray[6]}>{indonesianAyat?.ayahs[index]?.text}</Text>
            </Grid.Col>
          </Grid>
          <Flex justify="end" mt={30}>
            <Button leftIcon={<IconPlayerPlay size={14} />} color="green" radius="sm" size="xs" onClick={() => playSoundHandler(item?.audio)} disabled={isPlaySound}>
              Play
            </Button>
          </Flex>
          <Divider my="lg" />
        </motion.div>
      ))}
      <Flex justify="end" mt={50}>
        <Button variant="light" color="green" onClick={() => navigate('/surah')}>
          Back to Surah List
        </Button>
      </Flex>
    </Container>
  );
};

export const ayatLoader = async ({ params }: any) => {
  const { noSurah } = params;
  const response = await fetch(`https://api.alquran.cloud/v1/surah/${noSurah}/editions/ar.alafasy,en.transliteration,id.indonesian`);
  const { data } = await response.json();

  return { alafasyAyat: data[0], englishAyat: data[1], indonesianAyat: data[2] };
};

export default Ayat;
