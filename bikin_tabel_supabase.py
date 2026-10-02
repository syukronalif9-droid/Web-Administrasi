import psycopg2

# --- GANTI BAGIAN [PASSWORD_BARU_ANDA] DENGAN PASSWORD DATABASE ANDA (JANGAN DI-COMMIT KE GIT) ---
DB_URL = "postgresql://postgres.bavacuaqbbwnqbrcldsj:[PASSWORD_BARU_ANDA]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

def create_tables():
    commands = (
        """
        CREATE TABLE IF NOT EXISTS master_employee (
            "Pers.No." VARCHAR(255) PRIMARY KEY,
            "Full Name" VARCHAR(255),
            "Area" VARCHAR(255),
            "Bagian" VARCHAR(255),
            "Double Check" VARCHAR(255),
            ">1 Name" VARCHAR(255)
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS work_days (
            "Index" VARCHAR(255),
            "Nama" VARCHAR(255),
            "Hari Kerja" VARCHAR(50),
            "Sakit" VARCHAR(50),
            "Izin" VARCHAR(50),
            "Alpa" VARCHAR(50),
            "CT" VARCHAR(50),
            "Area" VARCHAR(255),
            "Bagian" VARCHAR(255)
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS framsys (
            "KIT TK" VARCHAR(255),
            "Nama TK" VARCHAR(255),
            "Date Shift" VARCHAR(255),
            "Time In" VARCHAR(255),
            "Time Out" VARCHAR(255),
            "Durasi (Jam)" VARCHAR(255)
        )
        """
    )
    
    conn = None
    try:
        print("Menghubungkan ke database Supabase...")
        conn = psycopg2.connect(DB_URL)
        cur = conn.cursor()
        
        print("Membuat tabel master_employee, work_days, dan framsys...")
        for command in commands:
            cur.execute(command)
            
        cur.close()
        conn.commit()
        print("Selesai! Tabel berhasil dibuat di Supabase!")
        
    except (Exception, psycopg2.DatabaseError) as error:
        print("Gagal membuat tabel. Pastikan password Anda sudah benar.")
        print("Error detail:", error)
    finally:
        if conn is not None:
            conn.close()

if __name__ == '__main__':
    create_tables()
