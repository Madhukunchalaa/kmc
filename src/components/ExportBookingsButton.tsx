'use client';

import * as XLSX from 'xlsx';

export default function ExportBookingsButton({ bookings }: { bookings: any[] }) {
  const handleExport = () => {
    // 1. Format the data for Excel
    const data = bookings.map((b) => {
      // Flatten questions if any
      const answersStr = b.answers ? b.answers.map((a: any) => `${a.question}: ${a.answer}`).join(' | ') : '';
      
      return {
        'Booking Number': b.bookingNumber,
        'Booking Date': new Date(b.date).toLocaleDateString(),
        'Time Slot': b.timeSlot,
        'Status': b.status,
        'Service Title': b.serviceTitle,
        'Service Type': b.serviceType,
        'Customer Name': b.customer.name,
        'Customer Email': b.customer.email,
        'Customer Phone': b.customer.phone,
        'Customer Age': b.customer.age || '',
        'Amount Paid': b.amountPaid,
        'Currency': b.currency,
        'Answers': answersStr,
        'Payment ID': b.razorpayPaymentId || '',
        'Created At': new Date(b.createdAt).toLocaleString(),
      };
    });

    // 2. Create workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookings');

    // 3. Trigger download
    const filename = `KrissMagicc_Bookings_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, filename);
  };

  return (
    <button onClick={handleExport} className="btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: '42px', padding: '0 16px' }}>
      <i className="fa-solid fa-file-excel" style={{ color: '#2ecc71' }}></i>
      Export to Excel
    </button>
  );
}
