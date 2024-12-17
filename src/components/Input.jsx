import PropTypes from 'prop-types';
import { Box, Flex, Slider, Text, TextField } from '@radix-ui/themes';

export const Input = ({ item, setValue }) => {
  return (
    <>
      <Text
        as='label'
        htmlFor={item.label}
      >
        {item.label}
      </Text>
      <Flex
        align={'center'}
        gap={'3'}
      >
        <Slider
          name={item.label}
          step={2}
          value={[item.value]}
          onValueChange={(value) => {
            setValue(value, item.label);
          }}
          min={item.min}
          max={item.max}
        />
        <Box maxWidth={'52px'}>
          <TextField.Root
            id={item.label}
            value={item.value}
            min={item.min}
            max={item.max}
            radius='small'
            onChange={(event) => {
              setValue(Number(event.target.value), item.label);
            }}
          ></TextField.Root>
        </Box>
      </Flex>
    </>
  );
};

Input.propTypes = {
  item: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
