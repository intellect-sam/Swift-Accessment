import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const ReusableButton: React.FC<CustomButtonProps> = ({
  isLoading,
  children,
  ...rest
}) => {
  return (
    <Button
      isLoading={isLoading}
      className="bg-button"
      colorScheme="green"
      type="submit"
      w="100%"
      mt={5}
      py={6}
      {...rest}>
      {children}
    </Button>
  );
};

export default ReusableButton;

// interface CustomButtonProps extends ButtonProps {
//   isLoading: boolean;
//   disabled: boolean;
// }

// const ReusableButton: React.FC<CustomButtonProps> = ({
//   isLoading,
//   disabled,
//   children,
//   ...rest
// }) => {
//   const buttonStyle = disabled
//     ? { backgroundColor: '#cccccc' } // Change this to the color you want
//     : {};

//   return (
//     <Button
//       isLoading={isLoading}
//       className="bg-button"
//       colorScheme="green"
//       type="submit"
//       w="100%"
//       mt={5}
//       py={6}
//       style={buttonStyle}
//       {...rest}>
//       {children}
//     </Button>
//   );
// };

// export default ReusableButton;
