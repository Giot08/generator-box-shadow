import PropTypes from 'prop-types';
import { Text } from '@radix-ui/themes';

export const Output = ({ data }) => {
  return (
    <>
      <Text variant='classic'>
        .box {"{ \n"}
        <br />
        {"    "}{data}
        <br />
        {"}"}
      </Text>
    </>
  );
};

Output.propTypes = {
  data: PropTypes.string.isRequired,
};
