import PropTypes from 'prop-types';
import { Text } from '@radix-ui/themes';

export const Output = ({ data }) => {
  return (
    <>
      <Text variant='classic'>
        .box {"{ "}{data}{" }"}
      </Text>
    </>
  );
};

Output.propTypes = {
  data: PropTypes.string.isRequired,
};
