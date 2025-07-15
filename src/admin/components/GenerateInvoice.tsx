import {
    Alert,
    Button,
    Field,
    IconButton,
    Textarea,
    Flex,
    Box,
    Typography,
    Grid,
    GridItem,
    Divider,
    Stack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TFooter,
    RawTable,
    RawThead,
    RawTr,
    RawTh,
    RawTd,
    RawTbody,
  } from "@strapi/design-system";
  import React, { useState } from "react";
  import { unstable_useContentManagerContext as useContentManagerContext } from "@strapi/strapi/admin";
  import { Modal } from "@strapi/design-system";
  import { File } from "@strapi/icons";
  
  interface GenerateInvoiceButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
  }
  
  const GenerateInvoiceButton: React.FC<GenerateInvoiceButtonProps> = () => {
    const { model } = useContentManagerContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    if (model !== "api::order.order") return null;
  
    return (
      <>
        <Modal.Root
          open={isOpen}
          defaultOpen={false}
          onOpenChange={() => setIsOpen(!isOpen)}
        >
          <Modal.Trigger onClick={() => setIsOpen(true)}>
            <Button style={{ width: '100%' }} startIcon={<File />}>Generate Invoice</Button>
          </Modal.Trigger>
          <Modal.Content style={{ width: '100vw', height: '100vh', maxWidth: '100vw', maxHeight: '100vh', padding: 0, margin: 0, borderRadius: 0 }}>
            <Modal.Header>
              <Modal.Title>Generate Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                height: 'calc(100vh - 120px)',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f6f6f9',
                overflowY: 'auto',
              }}
            >
              <Box
                background="neutral0"
                hasRadius
                shadow="tableShadow"
                padding={7}
                style={{
                  width: '100vw',
                  height: '100vh',
                  margin: '0 auto',
                  border: '1px solid #e3e5ed',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {/* Header */}
                <Flex justifyContent="space-between" alignItems="flex-start" marginBottom={6} style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
                  <Box>
                    <Typography variant="alpha" fontWeight="bold" textColor="primary700">
                      ACME Corporation
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      123 Business Street<br />
                      Tech City, TC 12345<br />
                      United Kingdom
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      VAT: GB123456789<br />
                      Phone: +44 1234 567890<br />
                      Email: sales@acme.com
                    </Typography>
                  </Box>
                  <Box style={{ textAlign: 'right' }}>
                    <Typography variant="beta" fontWeight="bold" textColor="primary600" style={{ letterSpacing: 2 }}>
                      INVOICE
                    </Typography>
                    <Typography variant="pi" textColor="neutral800">
                      <b>Invoice #: INV-2023-105</b>
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      Date Issued: <b>15 November 2023</b>
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      Due Date: <b>30 November 2023</b>
                    </Typography>
                  </Box>
                </Flex>
  
                {/* Recipient Info */}
                <Box
                  background="neutral100"
                  hasRadius
                  padding={4}
                  marginBottom={6}
                  style={{
                    borderLeft: '4px solid #3498db',
                    marginTop: 24,
                  }}
                >
                  <Typography variant="omega" fontWeight="bold" textColor="primary700" style={{ marginBottom: 8 }}>
                    BILL TO:
                  </Typography>
                  <Flex gap={6} wrap="wrap">
                    <Box minWidth={220}>
                      <Typography fontWeight="semiBold">Full Name:</Typography>
                      <Typography>John Smith</Typography>
                      <Typography fontWeight="semiBold" style={{ marginTop: 8 }}>Email:</Typography>
                      <Typography>john.smith@techsolutions.com</Typography>
                      <Typography fontWeight="semiBold" style={{ marginTop: 8 }}>Phone:</Typography>
                      <Typography>+44 1234 567890</Typography>
                    </Box>
                    <Box minWidth={220}>
                      <Typography fontWeight="semiBold">Address Line 1:</Typography>
                      <Typography>456 Client Avenue</Typography>
                      <Typography fontWeight="semiBold" style={{ marginTop: 8 }}>Address Line 2:</Typography>
                      <Typography>Business District</Typography>
                      <Typography fontWeight="semiBold" style={{ marginTop: 8 }}>City:</Typography>
                      <Typography>London</Typography>
                    </Box>
                    <Box minWidth={220}>
                      <Typography fontWeight="semiBold">Country:</Typography>
                      <Typography>United Kingdom</Typography>
                      <Typography fontWeight="semiBold" style={{ marginTop: 8 }}>Postal Code:</Typography>
                      <Typography>SW1A 1AA</Typography>
                      <Typography fontWeight="semiBold" style={{ marginTop: 8 }}>VAT Number:</Typography>
                      <Typography>GB987654321</Typography>
                    </Box>
                  </Flex>
                </Box>
  
                {/* Items Table */}
                <Box marginBottom={6} style={{ width: '100%' }}>
                  <RawTable colCount={6} rowCount={5} style={{ 
                    borderRadius: 8, 
                    overflow: 'hidden', 
                    marginTop: 8,
                    width: '100%',
                    tableLayout: 'fixed'
                  }}>
                    <RawThead>
                      <RawTr>
                        <RawTh style={{ width: '8%', textAlign: 'left' }}>SL No</RawTh>
                        <RawTh style={{ width: '40%', textAlign: 'left' }}>Title</RawTh>
                        <RawTh style={{ width: '8%', textAlign: 'left' }}>Qty</RawTh>
                        <RawTh style={{ width: '12%', textAlign: 'left' }}>Price</RawTh>
                        <RawTh style={{ width: '12%', textAlign: 'left' }}>Tax</RawTh>
                        <RawTh style={{ width: '20%', textAlign: 'left' }}>Total Price</RawTh>
                      </RawTr>
                    </RawThead>
                    <RawTbody>
                      <RawTr>
                        <RawTd style={{ textAlign: 'left' }}>1</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>Enterprise Software License (Annual)</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>5</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£1,200.00</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>20% VAT</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£6,000.00</RawTd>
                      </RawTr>
                      <RawTr>
                        <RawTd style={{ textAlign: 'left' }}>2</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>Premium Support Package</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>5</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£300.00</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>20% VAT</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£1,500.00</RawTd>
                      </RawTr>
                      <RawTr>
                        <RawTd style={{ textAlign: 'left' }}>3</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>Custom Module Development</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>1</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£2,500.00</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>20% VAT</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£2,500.00</RawTd>
                      </RawTr>
                      <RawTr>
                        <RawTd style={{ textAlign: 'left' }}>4</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>Onsite Training Session</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>2</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£750.00</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>0% VAT</RawTd>
                        <RawTd style={{ textAlign: 'left' }}>£1,500.00</RawTd>
                      </RawTr>
                    </RawTbody>
                  </RawTable>
                </Box>
  
                {/* Totals */}
               
  
           
              </Box>
            </Modal.Body>
            <Modal.Footer style={{ width: '100%' }}>
              <Flex justifyContent="flex-end" gap={2} style={{ width: '100%' }}>
                <Modal.Close>
                  <Button variant="tertiary" onClick={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                </Modal.Close>
                <Button variant="default" onClick={() => { /* TODO: Generate invoice logic */ }}>
                  Generate
                </Button>
              </Flex>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Root>
      </>
    );
  };
  
  export default GenerateInvoiceButton;
  