import React from 'react';

import { styled } from '@mui/material/styles';

import Rate from '../components/atom/Rate';
import Comment from '../components/atom/Comment';
import PrimaryButton from '../components/atom/PrimaryButton';
import SuccessModal from '../components/dialog/SuccessModal';

const Container = styled('div')(() => ({
  width: '100%',
}));

const Header = styled('div')(() => ({
  height: 101,
  borderBottom: '1px solid #DEDEDE',
  paddingTop: 18,
  paddingLeft: 32,
}));

const Content = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 55,
  width: '100%',
}));

const Title = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: 49,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const Feedback = function () {
  const [experience, setExperience] = React.useState(0);
  const [paymentProcess, setPaymentProcess] = React.useState(0);
  const [customerService, setCustomerService] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const saveReview = () => {
    setOpen(true);
    fetch('http://localhost:5000/api/feedback', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      // eslint-disable-next-line no-undef
      body: JSON.stringify({
        exp: experience,
        payment: paymentProcess,
        service: customerService,
        comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Header>
        <img src="/logo.png" alt="SolaVieve" />
      </Header>
      <Content>
        <Title>Leave a feedback!</Title>
        <Rate
          title="Rate your experience from 0 to 5 stars:"
          value={experience}
          onChange={setExperience}
        />
        <Rate
          title="How satisfied are you with the payment process?"
          value={paymentProcess}
          onChange={setPaymentProcess}
        />
        <Rate
          title="How satisfied are you with our customer service?"
          value={customerService}
          onChange={setCustomerService}
        />
        <span style={{ marginTop: 55, marginBottom: 33 }}>
          Please leave a comment about your experience below:
        </span>
        <Comment value={comment} onChange={setComment} />
        <div style={{ paddingTop: 55, paddingBottom: 45 }}>
          <PrimaryButton onClick={saveReview}>Send feedback</PrimaryButton>
        </div>
      </Content>
      <SuccessModal open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default Feedback;
