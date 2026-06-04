import dns from 'dns';

/**
 * Windows often fails Node's querySrv for mongodb+srv (ECONNREFUSED) while
 * nslookup works. Prefer explicit DNS servers before Mongo connects.
 */
const configured = process.env.MONGODB_DNS_SERVERS?.split(',').map((s) => s.trim()).filter(Boolean);

if (configured?.length) {
  dns.setServers(configured);
} else if (process.platform === 'win32' && process.env.MONGODB_URI?.startsWith('mongodb+srv://')) {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
}
