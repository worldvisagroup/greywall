import { Html, Head, Body, Container, Section, Text, Heading } from '@react-email/components';

const ContactFormEmailTemplate = ({ name, phoneNumber, projectType, propertyName, budget }) => {
  return (
    <Html>
      <Head />
      <Body style={{ margin: 0, padding: 0, backgroundColor: '#f4f4f9' }}>
        <Container
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Section
            style={{
              backgroundColor: '#ff7f50',
              color: '#fff',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '8px 8px 0 0',
            }}
          >
            <Heading style={{ margin: 0 }}>New Contact Form Submission</Heading>
          </Section>

          <Section style={{ padding: '20px' }}>
            <Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Phone Number:</strong> {phoneNumber}
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Project Type:</strong> {projectType}
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Property Name:</strong> {propertyName}
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Budget:</strong> {budget} Lac
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>Thank you!</Text>
          </Section>

          <Section
            style={{
              textAlign: 'center',
              marginTop: '20px',
              fontSize: '14px',
              color: '#777',
              paddingBottom: '20px',
            }}
          >
            <Text>&copy; 2025 Your Interior Design Business. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmailTemplate;
