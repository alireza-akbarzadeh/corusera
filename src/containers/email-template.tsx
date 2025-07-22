import * as React from 'react';
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Hr,
    Button,
} from '@react-email/components';

interface EmailTemplateProps {
    firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>Welcome to our platform, {firstName}!</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={{ marginBottom: '32px' }}>
                        <Heading as="h1" style={heading}>
                            Welcome, {firstName} 👋
                        </Heading>
                        <Text style={paragraph}>
                            We're excited to have you on board! Here are a few things to help you get started:
                        </Text>
                        <ul style={list}>
                            <li>Explore your dashboard</li>
                            <li>Set up your profile</li>
                            <li>Connect with our community</li>
                        </ul>
                        <Button
                            style={button}
                            href="https://yourdomain.com/start"
                        >
                            Get Started
                        </Button>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        If you have any questions, feel free to reach out to us at support@yourdomain.com.
                        <br />
                        — The YourCompany Team
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

// Styles
const main = {
    backgroundColor: '#f4f4f5',
    padding: '40px 0',
};

const container = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '40px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
};

const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '1.5',
};

const list = {
    paddingLeft: '20px',
    fontSize: '16px',
};

const button = {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '24px',
};

const hr = {
    borderTop: '1px solid #eaeaea',
    margin: '32px 0',
};

const footer = {
    fontSize: '14px',
    color: '#6b7280',
};

