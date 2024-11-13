import { Link, Text } from '@radix-ui/themes';
import nav from '../data/nav'


export const Nav = () => {
  return (
    <>
      <Link
        href={nav.git}
        target='_blank'
      >
        <Text
          mt={'6'}
          align={'center'}
          as='p'
          size={'8'}
        >
          {nav.title}
        </Text>
      </Link>
      <Link
        href="https://torme.dev"
        target='_blank'
      >
        <Text
          mt={'1'}
          align={'center'}
          as='p'
          size={'2'}
        >
          {nav.author}
        </Text>
      </Link>
      <Link
        href={nav.author_git}
        target='_blank'
      >
        <Text
          mt={'1'}
          align={'center'}
          as='p'
          size={'2'}
        >
         Github
        </Text>
      </Link>
    </>
  );
};
