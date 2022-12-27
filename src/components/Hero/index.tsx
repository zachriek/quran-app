import { motion } from 'framer-motion';
import { Container, Title, Button, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import heroImage from '../../assets/images/heroImage.json';
import useStyles from './styles';

const Hero = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.container}>
      <div className={classes.inner}>
        <motion.div className={classes.content} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.5 }} exit={{ opacity: 0, y: 100 }}>
          <Title className={classes.title}>
            Learn <span className={classes.highlight}>Quran</span> Everyday
          </Title>
          <Text color="dimmed" mt="md" className={classes.text}>
            The Quran is the central religious text of Islam. Muslims believe the Qur'an is the book of divine guidance and direction for mankind.
          </Text>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button radius="xl" size="md" color="green" mt={30} className={classes.control} onClick={() => navigate('/surah')}>
              Get started
              <IconArrowRight />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 3 }} exit={{ opacity: 0, y: -100 }}>
          <Lottie animationData={heroImage} loop={true} className={classes.image} />
        </motion.div>
      </div>
    </Container>
  );
};

export default Hero;
