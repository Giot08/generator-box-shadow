import { Theme, Flex, Box, Container } from '@radix-ui/themes';
import { Output, InputList, Nav } from './components/';
import useData from './hooks/useData';
import { useEffect, useState } from 'react';

function App() {
  const { inputData, handleInputData, shadow } = useData();
  const [shadowValue, setShadowValue] = useState('');

  useEffect(() => {
    const content = shadow.replace('box-shadow: ', '').replace(';', '');
    setShadowValue(content);
  }, [shadow]);

  return (
    <Theme
      accentColor='orange'
      grayColor='sage'
      appearance='light'
      radius='full'
      scaling='95%'
    >
      <Container
        size={window.screen.width > 520 ? '2' : '1'}
      >
        <Nav />
        <Flex
          className='container'
          align={'center'}
          justify={'center'}
          gap={'6'}
          my={'8'}
          direction={window.screen.width > 520 ? 'row' : 'column-reverse'}
        >
          <Box>
            <InputList
              inputData={inputData}
              handleInputData={handleInputData}
            />
          </Box>
          <Flex
            className='box-result-container'
            align={'center'}
            justify={'center'}
            style={{ boxShadow: shadowValue }}
          >
            <Box
            className='box-result'
            >
              <Output data={shadow}></Output>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Theme>
  );
}

export default App;
