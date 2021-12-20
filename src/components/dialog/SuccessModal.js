import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PrimaryButton from '../atom/PrimaryButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: 741,
  },
  '& .MuiDialogContent-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
    color: '#979797',
  },
}));

const SuccessModal = function ({ open, handleClose }) {
  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogContent>
        <div style={{ padding: 24 }}>
          <img src="/phone.png" alt="success" />
        </div>
        <div style={{ marginTop: 48 }}>Thank you for your message!</div>
        <div style={{ marginTop: 10 }}>We will be in contact soon.</div>
        <div style={{ marginTop: 80, marginBottom: 8 }}>
          <PrimaryButton onClick={handleClose} sx={{ padding: '17px 29px' }}>
            Close
          </PrimaryButton>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default SuccessModal;
