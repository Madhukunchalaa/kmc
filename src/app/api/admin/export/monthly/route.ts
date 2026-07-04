import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import { requireAdmin } from '@/lib/adminGuard';
import { connectMongoose } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Booking } from '@/models/Booking';

// ── Brand colours (no # prefix for ExcelJS) ──
const C = {
  darkBrown:    '1C0A02',
  midBrown:     '2D1B0E',
  gold:         'C8956C',
  goldLight:    'E8C99A',
  goldDeep:     'A0622A',
  cream:        'F5EDD8',
  creamLight:   'FAF6F1',
  white:        'FFFFFF',
  green:        '2E7D32',
  greenBg:      'E8F5E9',
  orange:       'E65100',
  orangeBg:     'FFF3E0',
  red:          'C62828',
  redBg:        'FFEBEE',
  purple:       '6A1B9A',
  purpleBg:     'F3E5F5',
  headerText:   'FFFFFF',
  subHeader:    'F5EDD8',
};

type CellValue = string | number | null;

function applyHeaderStyle(cell: ExcelJS.Cell, bg = C.darkBrown, fg = C.white) {
  cell.font = { bold: true, color: { argb: 'FF' + fg }, size: 11, name: 'Calibri' };
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + bg } };
  cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  cell.border = {
    top:    { style: 'medium', color: { argb: 'FF' + C.gold } },
    left:   { style: 'medium', color: { argb: 'FF' + C.gold } },
    bottom: { style: 'medium', color: { argb: 'FF' + C.gold } },
    right:  { style: 'medium', color: { argb: 'FF' + C.gold } },
  };
}

function applyDataCell(cell: ExcelJS.Cell, isEven: boolean, align: ExcelJS.Alignment['horizontal'] = 'left') {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + (isEven ? C.creamLight : C.white) } };
  cell.font = { size: 10, name: 'Calibri', color: { argb: 'FF' + C.midBrown } };
  cell.alignment = { horizontal: align, vertical: 'middle' };
  cell.border = {
    top:    { style: 'thin', color: { argb: 'FFE0D0C0' } },
    left:   { style: 'thin', color: { argb: 'FFE0D0C0' } },
    bottom: { style: 'thin', color: { argb: 'FFE0D0C0' } },
    right:  { style: 'thin', color: { argb: 'FFE0D0C0' } },
  };
}

function statusStyle(status: string): { bg: string; fg: string } {
  const s = (status || '').toLowerCase();
  if (s === 'paid' || s === 'completed' || s === 'approved') return { bg: C.greenBg, fg: C.green };
  if (s === 'pending') return { bg: C.orangeBg, fg: C.orange };
  if (s === 'failed' || s === 'cancelled' || s === 'rejected') return { bg: C.redBg, fg: C.red };
  return { bg: C.purpleBg, fg: C.purple };
}

export async function GET(req: Request) {
  const g = await requireAdmin();
  if (!g.ok) return g.res;

  const { searchParams } = new URL(req.url);
  const month = parseInt(searchParams.get('month') || '0', 10);
  const year  = parseInt(searchParams.get('year')  || '0', 10);

  if (!month || !year || month < 1 || month > 12) {
    return NextResponse.json({ ok: false, reason: 'Provide valid month (1-12) and year' }, { status: 400 });
  }

  const start = new Date(year, month - 1, 1);
  const end   = new Date(year, month, 1);

  await connectMongoose();
  const [orders, bookings] = await Promise.all([
    Order.find({ createdAt: { $gte: start, $lt: end } }).lean(),
    Booking.find({ createdAt: { $gte: start, $lt: end } }).lean(),
  ]);

  const paidOrders    = orders.filter((o) => o.paymentStatus === 'paid');
  const paidBookings  = bookings.filter((b) => b.paymentStatus === 'paid');
  const orderRevenue  = paidOrders.reduce((s, o) => s + (o.total || o.subtotal || 0), 0);
  const bookingRevenue = paidBookings.reduce((s, b) => s + (b.servicePrice || 0), 0);
  const totalRevenue  = orderRevenue + bookingRevenue;
  const monthName     = start.toLocaleString('default', { month: 'long' });

  const wb = new ExcelJS.Workbook();
  wb.creator  = 'KrissMaagiic Crystals';
  wb.lastModifiedBy = 'Admin';
  wb.created  = new Date();

  /* ═══════════════════════════════════
     SHEET 1 — SUMMARY
  ═══════════════════════════════════ */
  const ws1 = wb.addWorksheet('Summary', { properties: { tabColor: { argb: 'FF' + C.gold } } });
  ws1.columns = [{ width: 32 }, { width: 18 }, { width: 22 }];

  // Title row (merged)
  ws1.mergeCells('A1:C1');
  const titleCell = ws1.getCell('A1');
  titleCell.value = '✦  KrissMaagiic Crystals — Monthly Report  ✦';
  titleCell.font  = { bold: true, size: 16, color: { argb: 'FF' + C.goldLight }, name: 'Calibri' };
  titleCell.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.darkBrown } };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  ws1.getRow(1).height = 38;

  // Period row
  ws1.mergeCells('A2:C2');
  const periodCell = ws1.getCell('A2');
  periodCell.value = `${monthName} ${year}`;
  periodCell.font  = { bold: true, size: 12, color: { argb: 'FF' + C.midBrown }, name: 'Calibri' };
  periodCell.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.cream } };
  periodCell.alignment = { horizontal: 'center', vertical: 'middle' };
  ws1.getRow(2).height = 24;

  // Blank spacer
  ws1.getRow(3).height = 8;

  // Column headers
  const headers1 = ['Metric', 'Count', 'Revenue (₹)'];
  ws1.getRow(4).height = 26;
  headers1.forEach((h, i) => {
    const cell = ws1.getRow(4).getCell(i + 1);
    cell.value = h;
    applyHeaderStyle(cell, C.gold, C.darkBrown);
  });

  // Data rows
  const summaryRows: [string, CellValue, CellValue][] = [
    ['Total Orders',    orders.length,          ''],
    ['Paid Orders',     paidOrders.length,      orderRevenue],
    ['Total Bookings',  bookings.length,         ''],
    ['Paid Bookings',   paidBookings.length,     bookingRevenue],
  ];
  summaryRows.forEach((row, ri) => {
    const exRow = ws1.getRow(5 + ri);
    exRow.height = 22;
    row.forEach((val, ci) => {
      const cell = exRow.getCell(ci + 1);
      cell.value = val === '' ? null : val;
      applyDataCell(cell, ri % 2 === 0, ci === 0 ? 'left' : 'center');
    });
  });

  // Total revenue row (highlighted)
  const totalRow = ws1.getRow(9);
  totalRow.height = 26;
  const totLabels: CellValue[] = ['✦  Total Revenue', '', totalRevenue];
  totLabels.forEach((val, ci) => {
    const cell = totalRow.getCell(ci + 1);
    cell.value = val === '' ? null : val;
    cell.font  = { bold: true, size: 12, color: { argb: 'FF' + C.white }, name: 'Calibri' };
    cell.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.goldDeep } };
    cell.alignment = { horizontal: ci === 0 ? 'left' : 'center', vertical: 'middle' };
    cell.border = {
      top:    { style: 'medium', color: { argb: 'FF' + C.gold } },
      bottom: { style: 'medium', color: { argb: 'FF' + C.gold } },
      left:   { style: 'thin',   color: { argb: 'FF' + C.gold } },
      right:  { style: 'thin',   color: { argb: 'FF' + C.gold } },
    };
  });
  // Number format for revenue cell
  totalRow.getCell(3).numFmt = '₹#,##0.00';
  ws1.getRow(6).getCell(3).numFmt = '₹#,##0.00';
  ws1.getRow(8).getCell(3).numFmt = '₹#,##0.00';

  // Spacer + stats box
  ws1.getRow(10).height = 12;
  ws1.mergeCells('A11:C11');
  const footerCell = ws1.getCell('A11');
  footerCell.value = `Generated on ${new Date().toLocaleString('en-IN')}  |  KrissMaagiic Crystals Admin`;
  footerCell.font  = { italic: true, size: 9, color: { argb: 'FF' + C.goldDeep }, name: 'Calibri' };
  footerCell.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.cream } };
  footerCell.alignment = { horizontal: 'center' };

  /* ═══════════════════════════════════
     SHEET 2 — PRODUCTS
  ═══════════════════════════════════ */
  const ws2 = wb.addWorksheet('Products', { properties: { tabColor: { argb: 'FF4CAF50' } } });
  ws2.columns = [
    { width: 18 }, { width: 13 }, { width: 22 }, { width: 28 },
    { width: 15 }, { width: 30 }, { width: 7  }, { width: 13 },
    { width: 13 }, { width: 14 }, { width: 15 },
  ];

  // Title
  ws2.mergeCells('A1:K1');
  const p1 = ws2.getCell('A1');
  p1.value = `KrissMaagiic — Product Orders  |  ${monthName} ${year}`;
  p1.font  = { bold: true, size: 13, color: { argb: 'FF' + C.goldLight }, name: 'Calibri' };
  p1.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.darkBrown } };
  p1.alignment = { horizontal: 'center', vertical: 'middle' };
  ws2.getRow(1).height = 30;

  // Headers
  const prodHeaders = ['Order #', 'Date', 'Customer', 'Email', 'Phone', 'Product', 'Qty', 'Unit Price', 'Line Total', 'Order Status', 'Payment'];
  ws2.getRow(2).height = 24;
  prodHeaders.forEach((h, i) => {
    const cell = ws2.getRow(2).getCell(i + 1);
    cell.value = h;
    applyHeaderStyle(cell, C.midBrown, C.goldLight);
  });
  ws2.views = [{ state: 'frozen', ySplit: 2 }];

  // Data
  let rowIdx2 = 3;
  for (const o of orders) {
    const date = new Date(o.createdAt).toLocaleDateString('en-IN');
    for (const item of o.items || []) {
      const isEven = (rowIdx2 % 2 === 0);
      const row = ws2.getRow(rowIdx2);
      row.height = 20;
      const vals: CellValue[] = [
        o.orderNumber, date,
        o.customer?.name || '', o.customer?.email || '', o.customer?.phone || '',
        item.name, item.qty, item.price, item.lineTotal,
        o.status, o.paymentStatus,
      ];
      vals.forEach((v, ci) => {
        const cell = row.getCell(ci + 1);
        cell.value = v;
        applyDataCell(cell, isEven, ci >= 6 ? 'center' : 'left');
        // Status colouring
        if (ci === 9 || ci === 10) {
          const sc = statusStyle(String(v));
          cell.font = { bold: true, size: 10, color: { argb: 'FF' + sc.fg }, name: 'Calibri' };
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + sc.bg } };
        }
        // Price format
        if (ci === 7 || ci === 8) cell.numFmt = '₹#,##0.00';
      });
      rowIdx2++;
    }
  }

  // Products total row
  if (rowIdx2 > 3) {
    const totRow2 = ws2.getRow(rowIdx2);
    totRow2.height = 22;
    const tv: CellValue[] = ['TOTAL', '', '', '', '', `${orders.length} order(s)`, '', '', orderRevenue, '', ''];
    tv.forEach((v, ci) => {
      const cell = totRow2.getCell(ci + 1);
      cell.value = v === '' ? null : v;
      cell.font  = { bold: true, size: 10, color: { argb: 'FF' + C.white }, name: 'Calibri' };
      cell.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.gold } };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (ci === 8) cell.numFmt = '₹#,##0.00';
    });
  }

  /* ═══════════════════════════════════
     SHEET 3 — SERVICES
  ═══════════════════════════════════ */
  const ws3 = wb.addWorksheet('Services', { properties: { tabColor: { argb: 'FFC8956C' } } });
  ws3.columns = [
    { width: 18 }, { width: 13 }, { width: 22 }, { width: 28 },
    { width: 15 }, { width: 30 }, { width: 14 }, { width: 12 },
    { width: 13 }, { width: 14 }, { width: 13 },
  ];

  // Title
  ws3.mergeCells('A1:K1');
  const s1 = ws3.getCell('A1');
  s1.value = `KrissMaagiic — Service Bookings  |  ${monthName} ${year}`;
  s1.font  = { bold: true, size: 13, color: { argb: 'FF' + C.goldLight }, name: 'Calibri' };
  s1.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.darkBrown } };
  s1.alignment = { horizontal: 'center', vertical: 'middle' };
  ws3.getRow(1).height = 30;

  // Headers
  const svcHeaders = ['Booking #', 'Date', 'Customer', 'Email', 'Phone', 'Service', 'Booked Date', 'Time Slot', 'Price (₹)', 'Status', 'Payment'];
  ws3.getRow(2).height = 24;
  svcHeaders.forEach((h, i) => {
    const cell = ws3.getRow(2).getCell(i + 1);
    cell.value = h;
    applyHeaderStyle(cell, C.goldDeep, C.white);
  });
  ws3.views = [{ state: 'frozen', ySplit: 2 }];

  // Data
  let rowIdx3 = 3;
  for (const b of bookings) {
    const isEven = (rowIdx3 % 2 === 0);
    const row = ws3.getRow(rowIdx3);
    row.height = 20;
    const vals: CellValue[] = [
      b.bookingNumber,
      new Date(b.createdAt).toLocaleDateString('en-IN'),
      b.customer?.name || '', b.customer?.email || '', b.customer?.phone || '',
      b.serviceTitle, b.date, b.timeSlot,
      b.servicePrice || 0,
      b.status, b.paymentStatus,
    ];
    vals.forEach((v, ci) => {
      const cell = row.getCell(ci + 1);
      cell.value = v;
      applyDataCell(cell, isEven, ci >= 6 ? 'center' : 'left');
      if (ci === 9 || ci === 10) {
        const sc = statusStyle(String(v));
        cell.font = { bold: true, size: 10, color: { argb: 'FF' + sc.fg }, name: 'Calibri' };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + sc.bg } };
      }
      if (ci === 8) cell.numFmt = '₹#,##0.00';
    });
    rowIdx3++;
  }

  // Services total row
  if (rowIdx3 > 3) {
    const totRow3 = ws3.getRow(rowIdx3);
    totRow3.height = 22;
    const tv: CellValue[] = ['TOTAL', '', '', '', '', `${bookings.length} booking(s)`, '', '', bookingRevenue, '', ''];
    tv.forEach((v, ci) => {
      const cell = totRow3.getCell(ci + 1);
      cell.value = v === '' ? null : v;
      cell.font  = { bold: true, size: 10, color: { argb: 'FF' + C.darkBrown }, name: 'Calibri' };
      cell.fill  = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + C.goldLight } };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      if (ci === 8) cell.numFmt = '₹#,##0.00';
    });
  }

  // ── Output ──
  const buf = await wb.xlsx.writeBuffer();
  const uint8 = new Uint8Array(buf);

  return new NextResponse(uint8, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="krissmaagiic-${year}-${String(month).padStart(2, '0')}.xlsx"`,
    },
  });
}
