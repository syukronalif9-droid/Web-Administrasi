import psycopg2

# --- GANTI BAGIAN [PASSWORD_BARU_ANDA] DENGAN PASSWORD DATABASE ANDA ---
DB_URL = "postgresql://postgres.bavacuaqbbwnqbrcldsj:[PASSWORD_BARU_ANDA]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

def tambah_kolom():
    try:
        print("Menghubungkan ke database Supabase...")
        conn = psycopg2.connect(DB_URL)
        cur = conn.cursor()
        
        print("Menambahkan kolom Remarks ke tabel master_employee...")
        # Perintah SQL untuk menambahkan kolom jika belum ada
        cur.execute('ALTER TABLE master_employee ADD COLUMN IF NOT EXISTS "Remarks" VARCHAR(255);')
            
        conn.commit()
        cur.close()
        print("Selesai! Kolom Remarks berhasil ditambahkan ke Supabase!")
        
    except Exception as error:
        print("Gagal menambahkan kolom. Pastikan password Anda sudah benar.")
        print("Error detail:", error)
    finally:
        if 'conn' in locals() and conn is not None:
            conn.close()

if __name__ == '__main__':
    tambah_kolom()
