const supabaseUrl = 'https://bavacuaqbbwnqbrcldsj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdmFjdWFxYmJ3bnFicmNsZHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4ODc2MjMsImV4cCI6MjEwNjQ2MzYyM30.2KTBo_y89dexhQUq70VECQvl03iho2_Bx06qDu3IETc';

// Inisialisasi koneksi Supabase
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log("Supabase Client Berhasil Diinisialisasi");
