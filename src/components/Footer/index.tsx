import { Container, Group, ActionIcon, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const Footer = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={3} size="1.5rem" className={classes.title} onClick={() => navigate('/')}>
          QURAN <span className={classes.highlight}>app</span>
        </Title>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <a className={classes.anchor} href="https://github.com/zachriek" target="_blank" rel="noreferrer noopener">
              <IconBrandGithub size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a className={classes.anchor} href="https://www.youtube.com/channel/UCFbzQWPGA17_gKzotx207jQ" target="_blank" rel="noreferrer noopener">
              <IconBrandYoutube size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a className={classes.anchor} href="https://www.instagram.com/zachriek/" target="_blank" rel="noreferrer noopener">
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
