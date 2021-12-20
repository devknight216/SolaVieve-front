import { styled } from '@mui/material/styles';

const CommentContainer = styled('div')(() => ({
  maxWidth: 864,
  width: '100%',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
  borderRadius: 9,
  padding: 16,
  '& textarea': {
    border: 'none',
    width: '100%',
    height: 159,
    outline: 'none',
    resize: 'none',
    fontSize: '1.125rem',
    fontFamily: 'Montserrat',
  },
  '& textarea::placeholder': {
    color: '#C8C8C8',
    fontSize: '1.125rem',
    fontFamily: 'Montserrat',
  },
}));

const Comment = function ({ onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <CommentContainer>
      <textarea placeholder="Type your comment here..." onChange={handleChange} />
    </CommentContainer>
  );
};

export default Comment;
