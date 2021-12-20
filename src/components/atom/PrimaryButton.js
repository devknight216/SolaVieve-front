import Button from '@mui/material/Button';

const PrimaryButton = function (props) {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        color: 'white',
        borderRadius: 9999,
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: '1em',
        padding: '14px 20px',
        ...(props.sx || {}),
      }}
    />
  );
};

export default PrimaryButton;
