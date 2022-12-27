import { motion } from 'framer-motion';
import { Title, Text, Card, SimpleGrid, Container } from '@mantine/core';
import { IconUser, IconSearch, IconVolume } from '@tabler/icons';
import useStyles from './styles';

const featuresData = [
  {
    title: 'Sleek & User Friendly',
    description: 'The app is been designed with responsive and user friendly approach in mind',
    icon: IconUser,
  },
  {
    title: 'Recitation',
    description: 'Listen to Audio recitation',
    icon: IconVolume,
  },
  {
    title: 'Smart Search',
    description: 'Highly advanced search that enables to Search anything in Quran',
    icon: IconSearch,
  },
];

const Features = () => {
  const { classes } = useStyles();

  const features = featuresData.map((feature) => (
    <motion.div key={feature.title} whileHover={{ scale: 0.95 }}>
      <Card shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color="green" />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    </motion.div>
  ));

  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Our Features
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        This unique and informative Quran app provides a lot of useful features.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
