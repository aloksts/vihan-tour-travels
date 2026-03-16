"use client";
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "How do I book a car with Vihan Tours & Travels?",
    answer: "You can book a car easily by clicking any 'Book Now' button on our website, which will redirect you to our WhatsApp business account. You can also call us directly."
  },
  {
    question: "What documents are required for renting a car?",
    answer: "You will need a valid driving license, an original government-approved ID card (like Aadhar Card or Passport), and a printed copy of your booking confirmation."
  },
  {
    question: "Are your vehicles sanitized before delivery?",
    answer: "Yes, absolute hygiene is our priority. Every car goes through a rigorous cleaning and sanitization process before being handed over to our customers."
  },
  {
    question: "Do you offer airport or railway station pickup and drop?",
    answer: "Yes, we offer convenient pickup and drop services from Dabolim Airport, Mopa Airport, and major railway stations in Goa like Madgaon and Thivim."
  },
  {
    question: "Is there a limit on kilometers I can drive?",
    answer: "Our standard car rentals come with a generous daily kilometer limit. For unlimited kilometer packages, please inquire directly with our team during booking."
  },
  {
    question: "What happens in case of a breakdown?",
    answer: "We ensure our fleet is well-maintained to avoid breakdowns. However, in the rare event of a mechanical failure, we provide 24/7 roadside assistance and will arrange a replacement vehicle if necessary."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" color="text.primary" fontWeight={800} mb={2}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400}>
            Got questions? We&apos;ve got answers. If you need further assistance, feel free to contact us.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => {
            const panelId = `panel${index}`;
            return (
              <Accordion
                key={index}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                sx={{
                  bgcolor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  backgroundImage: 'none',
                  boxShadow: 'none',
                  borderRadius: '16px !important',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: expanded === panelId ? 'primary.main' : 'divider',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: expanded === panelId ? 'primary.main' : 'text.secondary' }} />}
                  aria-controls={`${panelId}-content`}
                  id={`${panelId}-header`}
                  sx={{
                    px: 3,
                    py: 1,
                    '& .MuiAccordionSummary-content': { my: 1.5 }
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      color: expanded === panelId ? 'primary.main' : 'text.primary',
                      transition: 'color 0.3s ease-in-out'
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
