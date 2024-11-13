import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@radix-ui/themes';
import { Sketch } from '@uiw/react-color';

export const ColorPicker = ({ setValue }) => {
  const [hex, setHex] = useState('#000000');

  return (
    <Box mt={'2'}>
      <Text mb={'2'} as='p'>Color</Text>
      <Sketch
        id='Color'
        style={{ backgroundColor: '#ffffff' }}
        color={hex}
        onChange={(color) => {
          setValue(color.rgba, 'color');
          setHex(color.hex);
        }}
      />
    </Box>
  );
};

ColorPicker.propTypes = {
  setValue: PropTypes.func.isRequired,
};
