import {
    Button,
    Flex,
    Box,
    Typography,
    Divider,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
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
                width: '100%',
                maxWidth: 1000,
                margin: '32px auto',
                border: '1px solid #e3e5ed',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
              }}
            >
              {/* Header */}
              <Flex justifyContent="space-between" alignItems="flex-start" marginBottom={4} style={{ borderBottom: '1px solid #eee', paddingBottom: 24 }}>
                <Box style={{ maxWidth: '50%' }}>
                  <Typography variant="alpha" fontWeight="bold" textColor="primary700" style={{ marginBottom: 8 }}>
                    ACME Corporation
                  </Typography>
                  <Box style={{ display: 'grid', gap: 4 }}>
                    <Typography variant="pi" textColor="neutral600">
                      123 Business Street
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      Tech City, TC 12345
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      United Kingdom
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      VAT: GB123456789
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      Phone: +44 1234 567890
                    </Typography>
                    <Typography variant="pi" textColor="neutral600">
                      Email: sales@acme.com
                    </Typography>
                  </Box>
                </Box>
                <Box style={{ textAlign: 'right', maxWidth: '50%' }}>
                  <Typography variant="beta" fontWeight="bold" textColor="primary600" style={{ letterSpacing: 2, marginBottom: 8 }}>
                    INVOICE
                  </Typography>
                  <Box style={{ display: 'grid', gap: 4 }}>
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
                </Box>
              </Flex>

              {/* Recipient Info */}
              <Box
                background="neutral100"
                hasRadius
                padding={4}
                marginBottom={4}
                style={{
                  borderLeft: '4px solid #3498db',
                  marginTop: 24,
                }}
              >
                <Typography variant="omega" fontWeight="bold" textColor="primary700" style={{ marginBottom: 16 }}>
                  BILL TO:
                </Typography>
                <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <Box>
                    <Box style={{ marginBottom: 12 }}>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>Full Name:</Typography>
                      <Typography>John Smith</Typography>
                    </Box>
                    <Box style={{ marginBottom: 12 }}>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>Email:</Typography>
                      <Typography>john.smith@techsolutions.com</Typography>
                    </Box>
                    <Box>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>Phone:</Typography>
                      <Typography>+44 1234 567890</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box style={{ marginBottom: 12 }}>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>Address:</Typography>
                      <Typography>456 Client Avenue</Typography>
                      <Typography>Business District</Typography>
                      <Typography>London</Typography>
                    </Box>
                    <Box style={{ marginBottom: 12 }}>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>Country:</Typography>
                      <Typography>United Kingdom</Typography>
                    </Box>
                    <Box>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>Postal Code:</Typography>
                      <Typography>SW1A 1AA</Typography>
                    </Box>
                    <Box style={{ marginTop: 12 }}>
                      <Typography fontWeight="semiBold" style={{ marginBottom: 4 }}>VAT Number:</Typography>
                      <Typography>GB987654321</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider style={{ margin: '24px 0' }} />

              {/* Items Table */}
              <Box marginBottom={4} style={{ width: '100%' }} background="neutral100" hasRadius>
                <Table colCount={6} rowCount={5} style={{ marginTop: 8, width: '100%' }}>
                  <Thead>
                    <Tr>
                      <Th style={{ width: '8%' }}>SL No</Th>
                      <Th style={{ width: '40%' }}>Title</Th>
                      <Th style={{ width: '8%' }}>Qty</Th>
                      <Th style={{ width: '12%' }}>Price</Th>
                      <Th style={{ width: '12%' }}>Tax</Th>
                      <Th style={{ width: '20%' }}>Total Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>Enterprise Software License (Annual)</Td>
                      <Td>5</Td>
                      <Td>£1,200.00</Td>
                      <Td>20% VAT</Td>
                      <Td>£6,000.00</Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>Premium Support Package</Td>
                      <Td>5</Td>
                      <Td>£300.00</Td>
                      <Td>20% VAT</Td>
                      <Td>£1,500.00</Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>Custom Module Development</Td>
                      <Td>1</Td>
                      <Td>£2,500.00</Td>
                      <Td>20% VAT</Td>
                      <Td>£2,500.00</Td>
                    </Tr>
                    <Tr>
                      <Td>4</Td>
                      <Td>Onsite Training Session</Td>
                      <Td>2</Td>
                      <Td>£750.00</Td>
                      <Td>0% VAT</Td>
                      <Td>£1,500.00</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              {/* Totals Section */}
              <Box style={{ width: '100%', marginTop: 16, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Box style={{ minWidth: 320 }}>
                  <Flex justifyContent="space-between" alignItems="center" style={{ marginBottom: 8 }}>
                    <Typography fontWeight="semiBold">Subtotal:</Typography>
                    <Typography>£11,500.00</Typography>
                  </Flex>
                  <Flex justifyContent="space-between" alignItems="center" style={{ marginBottom: 8 }}>
                    <Typography fontWeight="semiBold">VAT (20%):</Typography>
                    <Typography>£2,000.00</Typography>
                  </Flex>
                  <Divider style={{ margin: '8px 0' }} />
                  <Flex justifyContent="space-between" alignItems="center">
                    <Typography fontWeight="bold" textColor="primary700">Total:</Typography>
                    <Typography fontWeight="bold" textColor="primary700">£13,500.00</Typography>
                  </Flex>
                </Box>
              </Box>
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
  