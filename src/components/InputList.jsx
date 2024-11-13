import PropTypes from 'prop-types';
import { Input, ColorPicker } from './';

export const InputList = ({ inputData, handleInputData }) => {
  return (
    <>
      {inputData.map((item, index) => (
        <Input
          key={index}
          item={item}
          setValue={handleInputData}
        />
      ))}
      <ColorPicker
        setValue={handleInputData}
      />      
    </>
  );
};


InputList.propTypes = {
  inputData: PropTypes.array.isRequired,
  handleInputData: PropTypes.func.isRequired
}