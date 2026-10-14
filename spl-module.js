/**
 * SPL Digitalization Module (Surat Perintah Lembur)
 * Based on Master Employee1.csv Hierarchy
 */

const SPL_MASTER_DATA = [
    // TRAFFIC
    { area: "Traffic", location: "Way Lunik", persNo: "7339", name: "Sakri", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Way Lunik", persNo: "10041846", name: "Fedriyan Hertanto", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Way Lunik", persNo: "90074507", name: "Ryanto Fransiskus Sirait", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Way Lunik", persNo: "90074534", name: "Andriyanto", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Way Lunik", persNo: "10027886", name: "Agus Rianto", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Way Lunik", persNo: "90095961", name: "Atang Sanjaya", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Way Lunik", persNo: "85044272", name: "Dear Rizky Ramadhan Sinaga", kasieNo: "209113", kasieName: "Nur Tri Ayatullah, S.T", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    
    { area: "Traffic", location: "Tangerang", persNo: "82011025", name: "Andika Saputra", kasieNo: "10036097", kasieName: "Muhammad Syaili Alfian", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Tangerang", persNo: "82011026", name: "Iil Ismail", kasieNo: "10036097", kasieName: "Muhammad Syaili Alfian", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Tangerang", persNo: "82011040", name: "Evan Egy Mahendra", kasieNo: "10036097", kasieName: "Muhammad Syaili Alfian", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Tangerang", persNo: "82011016", name: "Bagus Eko Bramantyo", kasieNo: "10036097", kasieName: "Muhammad Syaili Alfian", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    
    { area: "Traffic", location: "Terbanggi", persNo: "90101516", name: "Reri Erico", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90101545", name: "Ilham Aziz Rachmadi", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90101543", name: "Adi Saputra", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90101550", name: "Wahyudin", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90101657", name: "Sukamto", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90101708", name: "Jauhari Masa", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "82011017", name: "Sapuan Hadi", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "82011027", name: "Adina Lubis", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "82011010", name: "Tri Puji Santoso", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "82011014", name: "Slamet Suwito", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "82011034", name: "Deka Arisandi", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "82011037", name: "Dwi Putra Jaya", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90114624", name: "M Riski Farudin", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90114121", name: "Tommy Pangestoe", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90114710", name: "Mega Candra", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90114899", name: "Rivaldo", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Traffic", location: "Terbanggi", persNo: "90123354", name: "Sopyan", kasieNo: "2100", kasieName: "Budi Kurnianto", kabagNo: "10039299", kabagName: "Andriyanto", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // GEN. ADM
    { area: "Gen. Adm", location: "Central", persNo: "7318", name: "Sri Ngatun", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Gen. Adm", location: "Central", persNo: "90101538", name: "Edi Prayoga", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Gen. Adm", location: "Central", persNo: "90101534", name: "Joni Saputra", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Gen. Adm", location: "Central", persNo: "90101539", name: "Gusti Madewan Se", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Gen. Adm", location: "Central", persNo: "90101699", name: "Ahmad Novaldi", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Gen. Adm", location: "Central", persNo: "90101706", name: "Rieffed Gilang Nugroho", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Gen. Adm", location: "Central", persNo: "1905", name: "Mei Ida Astuti", kasieNo: "3234", kasieName: "Sri Indah", kabagNo: "3152137", kabagName: "Setiawan", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // INV. CONTROL
    { area: "Inv. Control", location: "Central", persNo: "90101544", name: "Bibit Pranoto", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "Central", persNo: "90101670", name: "Dwi Prasetyo Budi", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "Central", persNo: "10030966", name: "Jesi Raka Siwi", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "Central", persNo: "10034005", name: "Jellycia Gunawan", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "Central", persNo: "10035642", name: "Anggi Dwi Satriawan", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "Central", persNo: "10036116", name: "Nur Rahman", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "Central", persNo: "10040065", name: "Aliifah Rohmadoni", kasieNo: "3050803", kasieName: "Eko Febriyanto", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "PG3", persNo: "7315", name: "Supiyanto", kasieNo: "10039294", kasieName: "Edoardus Garindio Gardo Polo", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Inv. Control", location: "PG4", persNo: "90101063", name: "Heru Pangestu", kasieNo: "10042577", kasieName: "Ardi ferdiansyah", kabagNo: "5292", kabagName: "Puji Triananto, S.P", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // SPPT, LUBR & OTHER M
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "4818", name: "Sumiyati", kasieNo: "4525", kasieName: "Suranto", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101535", name: "Ariansyah Rizal", kasieNo: "4525", kasieName: "Suranto", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101537", name: "Deni Herlangga", kasieNo: "4525", kasieName: "Suranto", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90122074", name: "Angga Aditya Nugraha", kasieNo: "4525", kasieName: "Suranto", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "2115", name: "Budi Teguh Santoso", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101541", name: "Dimas Nugroho", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101517", name: "Rahmat Gunawan", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101542", name: "Rivaldo Ariel Fernandez Aditia S", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101536", name: "Arreza Bagus Wijaya", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101549", name: "Triyantoni Rosid", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101568", name: "Richardo Ariansyah", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90101569", name: "Yohana Setiawan", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90115231", name: "Muhammad Ikhwan Adis Setiawan", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90122791", name: "Damar Dwi Bimandika", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "Sppt, Lubr & Other M", location: "Central", persNo: "90123339", name: "Muhammad Sidiq Wicaksono", kasieNo: "10007205", kasieName: "Oktomi Rachman", kabagNo: "3050800", kabagName: "Robin Dangin", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // PG1
    { area: "PG1", location: "Central", persNo: "2199", name: "K. Supriadi", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "4820", name: "Wahyu Lestari", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "10013290", name: "Andris Hermawan", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90101513", name: "Muamar Roihan Saputra", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "82011021", name: "Jumanto", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "82011022", name: "Hengky Tirtanto", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90114589", name: "M. Wildan Shihabbi", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90101553", name: "M. Yunus", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90101504", name: "Yasir", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90101554", name: "Mulyono", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90101556", name: "Yadi Hari Yahya", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90121221", name: "Wendiy Rian Pratama", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "Central", persNo: "90112244", name: "Debi Ferdian", kasieNo: "7321", kasieName: "Imawan Susanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM1B", persNo: "82012003", name: "Grisna Irawan", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM1B", persNo: "90108727", name: "Ari Prasetiyo H P", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM1A", persNo: "82012002", name: "Bayun Sumirat", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM1A", persNo: "82011019", name: "Taufik Hidayat", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM1A", persNo: "82012004", name: "Mei Supriyadi", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM2", persNo: "90109032", name: "M. Anas Prayogi", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM2", persNo: "90108736", name: "Erlinda Nurlia Putri", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG1", location: "FM2", persNo: "82012005", name: "Hendro", kasieNo: "3432", kasieName: "Slamet Hardiyanto", kabagNo: "4808", kabagName: "Mulyadi", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // PG2
    { area: "PG2", location: "FM3A", persNo: "90119845", name: "Retno Evani Sari", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM3A", persNo: "90119846", name: "Putra Sanopa", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM3A", persNo: "90119844", name: "Dimas Andri Prihatna Jaya", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM3B", persNo: "90119837", name: "Ferry Anggara Pratama", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM3B", persNo: "90119838", name: "J. Agus Susanto", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM3B", persNo: "90119836", name: "Nur Kholik", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM4", persNo: "90119828", name: "Rahmadi Saputro", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM4", persNo: "82012006", name: "Feri Irawan", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "FM4", persNo: "90119827", name: "Agus Arizal", kasieNo: "4816", kasieName: "Martinus Tukijan", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "OP1", persNo: "5347", name: "Mustakim", kasieNo: "2685", kasieName: "Mei Hartati", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "OP1", persNo: "7322", name: "M. Agus Pranoto", kasieNo: "2685", kasieName: "Mei Hartati", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "OP1", persNo: "90101567", name: "Diah Ayu Agustin", kasieNo: "2685", kasieName: "Mei Hartati", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "OP1", persNo: "90101667", name: "Muhammad Alif Mumin", kasieNo: "2685", kasieName: "Mei Hartati", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG2", location: "OP1", persNo: "90120084", name: "Fedli Ciccelo Ardhana Ramadhan", kasieNo: "2685", kasieName: "Mei Hartati", kabagNo: "10031743", kabagName: "Junaidi Anwar", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // PG3
    { area: "PG3", location: "AGR1, GDP3", persNo: "7326", name: "Agus Sri Susanto", kasieNo: "2539", kasieName: "Rabudin", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR1, GDP3", persNo: "90108544", name: "Risky Nur Annisa", kasieNo: "2539", kasieName: "Rabudin", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR1, GDP3", persNo: "90108540", name: "Licardo Naperzon", kasieNo: "2539", kasieName: "Rabudin", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "7320", name: "Rosidi", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "7325", name: "Sarifudin", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "7328", name: "Multiono", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "90108523", name: "Manore Sinulingga", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "90108530", name: "Yansori", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "90108533", name: "M Ilham Wahid", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "90108534", name: "Paskal Apriyandi Sinulingga", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "90074529", name: "Hariawan Eko Prabowo", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "AGR2, AGR3", persNo: "90108560", name: "Andi Pramantia", kasieNo: "2914", kasieName: "Suwardi", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "FM5, FM6", persNo: "10013279", name: "Pahrijal", kasieNo: "10032643", kasieName: "Asep Saputra", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "FM5, FM6", persNo: "90108498", name: "Muhyidin", kasieNo: "10032643", kasieName: "Asep Saputra", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "FM5, FM6", persNo: "82012007", name: "Nila Puspita Eka Sari", kasieNo: "10032643", kasieName: "Asep Saputra", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "FM5, FM6", persNo: "90108525", name: "Ripipan Juanda", kasieNo: "10032643", kasieName: "Asep Saputra", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG3", location: "FM5, FM6", persNo: "90108529", name: "Agung Wasisto Utomo", kasieNo: "10032643", kasieName: "Asep Saputra", kabagNo: "1956", kabagName: "Sujiman", mgrNo: "5078", mgrName: "Wawan Kurniawan" },

    // PG4
    { area: "PG4", location: "Adm. Umum", persNo: "3060842", name: "Pujiatun", kasieNo: "3020620", kasieName: "Purwanto", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Packaging Material", persNo: "3152035", name: "Iwan Yuswana", kasieNo: "10034013", kasieName: "Ikhsan Taufiq", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Packaging Material", persNo: "90101072", name: "Aries setiawan", kasieNo: "10034013", kasieName: "Ikhsan Taufiq", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Packaging Material", persNo: "90101073", name: "Agus susanto", kasieNo: "10034013", kasieName: "Ikhsan Taufiq", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Packaging Material", persNo: "90101074", name: "Karyanto", kasieNo: "10034013", kasieName: "Ikhsan Taufiq", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "3070869", name: "Aris Susilo", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "3152037", name: "Sutiyono", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "3152048", name: "Sarwono", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "3152136", name: "Andi Kusdiyarto", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "90101094", name: "Basuki Rahmad", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "90101096", name: "Erick Setiawan", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Sparepart", persNo: "90101097", name: "Nasib riyanto", kasieNo: "3970501", kasieName: "Suprayitno", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "3000714", name: "Ernawan", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "3060859", name: "Mustamar", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "3130962", name: "Bambang Hermanto", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "90101065", name: "Molani", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "90101066", name: "Memed", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "90101067", name: "Efendi", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "90101068", name: "Dian Abdul Kholik", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "90101069", name: "Alex Suryono", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" },
    { area: "PG4", location: "Support Material", persNo: "90101070", name: "Nasrulloh", kasieNo: "3080901", kasieName: "Suhendi", kabagNo: "10027916", kabagName: "Muhammad Rafly Anggara Putra Wibowo", mgrNo: "5078", mgrName: "Wawan Kurniawan" }
];

// Initialize default sample SPL if empty
function getStoredSplList() {
    const raw = localStorage.getItem('DIGITAL_SPL_DATA');
    if (!raw) {
        const sampleData = [
            {
                id: 'SPL-2026-001',
                splNo: 'SPL/WH/2026/04/001',
                date: '2026-04-12',
                startTime: '17:00',
                endTime: '21:00',
                duration: 4,
                area: 'Traffic',
                location: 'Way Lunik',
                employees: [{ persNo: '7339', name: 'Sakri' }, { persNo: '10041846', name: 'Fedriyan Hertanto' }],
                reason: 'Loading kontainer ekspor mendesak kapal malam',
                kasie: { no: '209113', name: 'Nur Tri Ayatullah, S.T', status: 'approved', date: '2026-04-12 16:30' },
                kabag: { no: '10039299', name: 'Andriyanto', status: 'approved', date: '2026-04-12 16:45' },
                manager: { no: '5078', name: 'Wawan Kurniawan', status: 'pending', date: null },
                finalStatus: 'Menunggu Manager'
            },
            {
                id: 'SPL-2026-002',
                splNo: 'SPL/WH/2026/04/002',
                date: '2026-04-13',
                startTime: '16:30',
                endTime: '19:30',
                duration: 3,
                area: 'Inv. Control',
                location: 'Central',
                employees: [{ persNo: '90101544', name: 'Bibit Pranoto' }],
                reason: 'Stock opname akhir pekan material high-turnover',
                kasie: { no: '3050803', name: 'Eko Febriyanto', status: 'approved', date: '2026-04-13 15:00' },
                kabag: { no: '5292', name: 'Puji Triananto, S.P', status: 'approved', date: '2026-04-13 15:30' },
                manager: { no: '5078', name: 'Wawan Kurniawan', status: 'approved', date: '2026-04-13 16:00' },
                finalStatus: 'Disetujui'
            }
        ];
        localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(sampleData));
        return sampleData;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        return [];
    }
}

function saveSplList(list) {
    localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(list));
}

// ========================================================
// ROLE VERIFICATION & ACCESS CONTROL BASED ON PERS.NO
// ========================================================
function getEmployeeRoleByPersNo(inputPersNo) {
    if (!inputPersNo) {
        return {
            persNo: '',
            name: 'Belum Login / Guest',
            role: 'GUEST',
            title: 'Tamu / Umum',
            canCreateSpl: false,
            canApproveSpl: false,
            area: '',
            location: ''
        };
    }

    const cleanNo = String(inputPersNo).trim();

    // 1. Cek Manager Warehouse (Approver 2 Final)
    const mgrMatch = SPL_MASTER_DATA.find(d => String(d.mgrNo).trim() === cleanNo);
    if (mgrMatch || cleanNo === '5078') {
        return {
            persNo: cleanNo,
            name: mgrMatch ? mgrMatch.mgrName : 'Wawan Kurniawan',
            role: 'MANAGER',
            title: 'Manager Warehouse',
            canCreateSpl: true,
            canApproveSpl: true,
            approvalLevel: 2,
            area: 'Semua Area Warehouse',
            location: 'Semua Lokasi'
        };
    }

    // 2. Cek Kepala Bagian / Kabag (Approver 1)
    if (cleanNo === '3152137') {
        return {
            persNo: '3152137',
            name: 'Setiawan',
            role: 'KABAG',
            title: 'Kepala Bagian (Kabag)',
            canCreateSpl: true,
            canApproveSpl: true,
            approvalLevel: 1,
            area: 'Gen. Adm',
            location: 'Central'
        };
    }

    const kabagMatch = SPL_MASTER_DATA.find(d => String(d.kabagNo).trim() === cleanNo);
    if (kabagMatch) {
        return {
            persNo: cleanNo,
            name: kabagMatch.kabagName,
            role: 'KABAG',
            title: 'Kepala Bagian (Kabag)',
            canCreateSpl: true,
            canApproveSpl: true,
            approvalLevel: 1,
            area: kabagMatch.area,
            location: kabagMatch.location
        };
    }

    // 3. Cek Kepala Seksi / Kasie (Create SPL)
    const kasieMatch = SPL_MASTER_DATA.find(d => String(d.kasieNo).trim() === cleanNo);
    if (kasieMatch) {
        return {
            persNo: cleanNo,
            name: kasieMatch.kasieName,
            role: 'KASIE',
            title: 'Kepala Seksi (Kasie)',
            canCreateSpl: true,
            canApproveSpl: false,
            approvalLevel: 0,
            area: kasieMatch.area,
            location: kasieMatch.location
        };
    }

    // 4. Cek Member Team / Operator / Staff
    const memberMatch = SPL_MASTER_DATA.find(d => String(d.persNo).trim() === cleanNo);
    if (memberMatch) {
        return {
            persNo: cleanNo,
            name: memberMatch.name,
            role: 'MEMBER',
            title: 'Member Team / Staff',
            canCreateSpl: false,
            canApproveSpl: false,
            area: memberMatch.area,
            location: memberMatch.location
        };
    }

    // Default Unknown Staff
    return {
        persNo: cleanNo,
        name: 'Staff Karyawan (' + cleanNo + ')',
        role: 'STAFF',
        title: 'Staff Biasa',
        canCreateSpl: false,
        canApproveSpl: false,
        area: '',
        location: ''
    };
}

function getCurrentUserSession() {
    const savedNo = localStorage.getItem('SPL_CURRENT_USER_PERS_NO');
    if (!savedNo) {
        return null; // Belum verifikasi
    }
    return getEmployeeRoleByPersNo(savedNo);
}

function performSplVerification(explicitNik) {
    const inputField = document.getElementById('spl-verify-nik-input');
    if (explicitNik && inputField) {
        inputField.value = explicitNik;
    }
    let persNo = explicitNik || (inputField ? inputField.value.trim() : '');

    const errorBox = document.getElementById('spl-verify-error-box');
    const errorMsg = document.getElementById('spl-verify-error-msg');

    if (!persNo) {
        alert('Mohon masukkan NIK / Pers.No Anda untuk verifikasi!');
        if (inputField) inputField.focus();
        return;
    }

    const employee = getEmployeeRoleByPersNo(persNo);

    if (employee.canCreateSpl) {
        // Berhasil Terverifikasi sebagai Kasie, Kabag, atau Manager
        localStorage.setItem('SPL_CURRENT_USER_PERS_NO', employee.persNo);
        if (errorBox) errorBox.style.display = 'none';
        updateSplAccessControlUI();

        // Otomatis refresh opsi Bagian dan Lokasi sesuai otoritas user
        populateSplAreas();

        // Tampilkan pesan sukses jelas
        alert(`✅ Verifikasi Berhasil!\n\nNama: ${employee.name}\nJabatan: ${employee.title}\nNIK: ${employee.persNo}\nBagian: ${employee.area || 'Warehouse'}\n\nDaftar nama karyawan bawahan langsung ditampilkan di bawah.`);
    } else {
        // Gagal / Ditolak karena level Staff atau Member Team
        localStorage.removeItem('SPL_CURRENT_USER_PERS_NO');
        alert(`Akses Pembuatan Ditolak!\nNIK ${employee.persNo} (${employee.name}) terdaftar sebagai ${employee.title}.\nPembuatan SPL khusus level Kepala Seksi, Kepala Bagian, atau Manager.`);
        updateSplAccessControlUI();
    }
}

function quickSelectCreator(nik) {
    const inputField = document.getElementById('spl-verify-nik-input');
    if (inputField) inputField.value = nik;
    performSplVerification(nik);
}

function resetSplVerification() {
    localStorage.removeItem('SPL_CURRENT_USER_PERS_NO');
    const inputField = document.getElementById('spl-verify-nik-input');
    if (inputField) inputField.value = '';
    const errorBox = document.getElementById('spl-verify-error-box');
    if (errorBox) errorBox.style.display = 'none';
    updateSplAccessControlUI();
}

function setCurrentUserSession(persNo) {
    if (!persNo) {
        resetSplVerification();
    } else {
        performSplVerification(persNo);
    }
}

function updateSplAccessControlUI() {
    const user = getCurrentUserSession();

    // DOM Elements
    const formElem = document.getElementById('form-create-spl');
    const statusBox = document.getElementById('spl-creator-active-status');
    const activeName = document.getElementById('spl-creator-active-name');
    const activeRole = document.getElementById('spl-creator-active-role');
    const inputField = document.getElementById('spl-verify-nik-input');

    if (formElem) formElem.style.display = 'flex';

    if (user && user.canCreateSpl) {
        if (statusBox) statusBox.style.display = 'block';
        if (activeName) activeName.textContent = user.name;
        if (activeRole) activeRole.textContent = `${user.title} (NIK: ${user.persNo})`;
        if (inputField) inputField.value = user.persNo;
    } else {
        if (statusBox) statusBox.style.display = 'none';
    }
}

// Module Initializer
function initSplModule() {
    populateSplAreas();
    setupSplTimeCalculator();
    generateNextSplNumber();
    renderSplHistoryList();
    updateSplAccessControlUI();

    // Default date to today
    const dateInput = document.getElementById('spl-date');
    if (dateInput && !dateInput.value) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
}

function populateSplAreas() {
    const areaSelect = document.getElementById('spl-area-select');
    if (!areaSelect) return;

    const user = getCurrentUserSession();
    let areas = [...new Set(SPL_MASTER_DATA.map(d => d.area))].filter(Boolean);

    // Jika pembuat adalah Kabag atau Kasie, batasi pilihan hanya bagian miliknya
    if (user && user.area && user.role !== 'MANAGER' && user.area !== 'Semua Area Warehouse') {
        areas = [user.area];
    }

    areaSelect.innerHTML = '<option value="">-- Pilih Bagian --</option>';
    areas.forEach(area => {
        const opt = document.createElement('option');
        opt.value = area;
        opt.textContent = area;
        areaSelect.appendChild(opt);
    });

    // Otomatis pilih jika hanya 1 bagian
    if (areas.length === 1) {
        areaSelect.value = areas[0];
        onSplAreaChange();
    }
}

function onSplAreaChange() {
    const area = document.getElementById('spl-area-select').value;
    const locSelect = document.getElementById('spl-location-select');
    const empContainer = document.getElementById('spl-employee-list-container');
    
    locSelect.innerHTML = '<option value="">-- Pilih Lokasi --</option>';
    empContainer.innerHTML = '<div style="color: #94a3b8; font-size: 0.8rem; font-style: italic;">Pilih Area & Lokasi terlebih dahulu</div>';
    resetApproverInfo();

    if (!area) return;

    const filtered = SPL_MASTER_DATA.filter(d => d.area === area);
    const locations = [...new Set(filtered.map(d => d.location))];

    locations.forEach(loc => {
        const opt = document.createElement('option');
        opt.value = loc;
        opt.textContent = loc;
        locSelect.appendChild(opt);
    });

    // Auto-select location dan LANGSUNG render daftar karyawan bawahan
    const user = getCurrentUserSession();
    if (user && user.location && locations.includes(user.location)) {
        locSelect.value = user.location;
    } else if (locations.length > 0) {
        locSelect.value = locations[0];
    }
    
    // Panggil onSplLocationChange langsung agar nama karyawan tidak tertahan!
    if (locSelect.value) {
        onSplLocationChange();
    }
}

function onSplLocationChange() {
    const areaSelect = document.getElementById('spl-area-select');
    const locSelect = document.getElementById('spl-location-select');
    const empContainer = document.getElementById('spl-employee-list-container');
    
    if (!empContainer) return;
    
    const area = areaSelect ? areaSelect.value : '';
    const location = locSelect ? locSelect.value : '';

    if (!area || !location) {
        empContainer.innerHTML = '<div style="color: #94a3b8; font-size: 0.8rem; font-style: italic; text-align: center; padding: 12px;">Pilih Area & Lokasi terlebih dahulu</div>';
        resetApproverInfo();
        return;
    }

    const user = getCurrentUserSession();
    let members = SPL_MASTER_DATA.filter(d => 
        String(d.area).trim().toLowerCase() === String(area).trim().toLowerCase() && 
        String(d.location).trim().toLowerCase() === String(location).trim().toLowerCase()
    );

    // Jika yang membuat adalah Kabag, hanya tampilkan karyawan yang kabagNo-nya sama dengan Kabag tersebut
    if (user && user.role === 'KABAG' && user.persNo) {
        const kabagSubordinates = members.filter(d => String(d.kabagNo).trim() === String(user.persNo).trim());
        if (kabagSubordinates.length > 0) {
            members = kabagSubordinates;
        }
    }
    // Jika yang membuat adalah Kasie, hanya tampilkan karyawan di bawah Kasie tersebut
    else if (user && user.role === 'KASIE' && user.persNo) {
        const kasieSubordinates = members.filter(d => String(d.kasieNo).trim() === String(user.persNo).trim());
        if (kasieSubordinates.length > 0) {
            members = kasieSubordinates;
        }
    }

    if (members.length === 0) {
        empContainer.innerHTML = '<div style="color: #ef4444; font-size: 0.8rem; text-align: center; padding: 12px;">Tidak ada karyawan bawahan yang terdaftar untuk pejabat ini</div>';
        resetApproverInfo();
        return;
    }

    // Render Employee Checkboxes TERLEBIH DAHULU agar tampilan selalu muncul
    empContainer.innerHTML = '';
    members.forEach((m, idx) => {
        const item = document.createElement('label');
        item.style.cssText = 'display: flex; align-items: center; gap: 10px; padding: 9px 14px; background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 10px; font-size: 0.92rem; cursor: pointer; transition: all 0.15s; user-select: none; margin-bottom: 4px;';
        item.onmouseenter = () => item.style.background = '#f1f5f9';
        item.onmouseleave = () => item.style.background = '#ffffff';
        
        item.innerHTML = `
            <input type="checkbox" name="spl_emp_check" value="${m.persNo}|${m.name}" style="width: 18px; height: 18px; accent-color: #18181b; cursor: pointer;">
            <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <strong style="color: #0f172a; font-size: 0.92rem;">${m.name}</strong> 
                <span style="color: #475569; font-size: 0.82rem; margin-left: 6px; font-weight: 500;">(NIK: ${m.persNo})</span>
            </div>
        `;
        empContainer.appendChild(item);
    });

    // Set Approvers from the first matching member in this location
    try {
        const ref = members[0];
        setApproverInfo(ref.kasieName, ref.kasieNo, ref.kabagName, ref.kabagNo, ref.mgrName, ref.mgrNo);
    } catch (err) {
        console.warn('Error setting approver info:', err);
    }
}

// ========================================================
// EMAIL NOTIFICATION SERVICE (APPROVER 1 & 2)
// ========================================================
// Tabel Pemetaan Email Asli Para Approver (Bisa diisi akun Gmail / email nyata mereka)
// Key: NIK / Pers.No dari masing-masing Kabag & Manager
const DEFAULT_APPROVER_REAL_EMAILS = {
    '5078': '',                      // Wawan Kurniawan (Manager Warehouse)
    '10039299': '',                  // Andriyanto (Kabag Traffic)
    '3152137': '93setiawan@gmail.com', // Setiawan (Kabag Packaging) - Email Nyata
    '5292': '',                      // Puji Triananto (Kabag Inv. Control)
    '3050800': '',                   // Robin Dangin (Kabag Material WH)
    '4808': '',                      // Mulyadi (Kabag Finished Goods)
    '10031743': '',                  // Junaidi Anwar (Kabag Fertilizer WH)
    '1956': '',                      // Sujiman (Kabag Sparepart WH)
    '10027916': ''                   // M. Rafly Anggara (Kabag General WH)
};

function getApproverEmailByPersNo(persNo, fullName) {
    if (!persNo && !fullName) return '';
    
    // 1. Cek apakah ada email kustom yang disimpan user di LocalStorage
    let customMap = {};
    try {
        customMap = JSON.parse(localStorage.getItem('SPL_CUSTOM_APPROVER_EMAILS') || '{}');
    } catch(e) {}

    const cleanNo = String(persNo || '').trim();
    if (cleanNo && customMap[cleanNo]) {
        return customMap[cleanNo]; // Gunakan email nyata yang diinputkan user!
    }

    // 2. Cek default mapping
    if (cleanNo && DEFAULT_APPROVER_REAL_EMAILS[cleanNo]) {
        return DEFAULT_APPROVER_REAL_EMAILS[cleanNo];
    }

    // 3. Fallback: generate otomatis nama@ggf.com
    return generateCorporateEmail(fullName);
}

function generateCorporateEmail(fullName) {
    if (!fullName || fullName === '-' || fullName.trim() === '') return '';
    // Hapus gelar seperti S.T, S.P, dll
    let clean = fullName.replace(/,.*$/, '').trim();
    // Ubah ke huruf kecil dan format nama depan.nama belakang
    let parts = clean.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'approver@ggf.com';
    if (parts.length === 1) return `${parts[0]}@ggf.com`;
    return `${parts.join('.')}@ggf.com`;
}

function getEmailJsConfig() {
    const raw = localStorage.getItem('SPL_EMAILJS_CONFIG');
    if (raw) {
        try { return JSON.parse(raw); } catch (e) {}
    }
    return {
        serviceId: 'service_ggqdruv',
        templateId: 'template_o5mvd66',
        publicKey: '',
        enabled: true
    };
}

function saveEmailJsConfig(cfg) {
    localStorage.setItem('SPL_EMAILJS_CONFIG', JSON.stringify(cfg));
}

async function dispatchSplEmailNotification(spl) {
    const cfg = getEmailJsConfig();
    const kabagEmail = spl.kabag.email;
    const mgrEmail = spl.manager.email;

    // Jika dibuka dari file lokal (file:///), gunakan alamat Vercel agar link di Gmail bisa langsung diklik
    let baseUrl = window.location.origin + window.location.pathname.replace('dashboard.html', '');
    if (window.location.protocol === 'file:') {
        baseUrl = 'https://genadm.vercel.app/';
    }

    const encodedNo = encodeURIComponent(spl.splNo);
    const encodedKabag = encodeURIComponent(spl.kabag.name);
    const encodedMgr = encodeURIComponent(spl.manager.name);
    const encodedArea = encodeURIComponent(spl.area || '');

    const kabagApproveUrl = `${baseUrl}approve.html?id=${encodeURIComponent(spl.id)}&spl_no=${encodedNo}&approver=${encodedKabag}&area=${encodedArea}&role=kabag&action=approve`;
    const kabagRejectUrl = `${baseUrl}approve.html?id=${encodeURIComponent(spl.id)}&spl_no=${encodedNo}&approver=${encodedKabag}&area=${encodedArea}&role=kabag&action=reject`;
    const mgrApproveUrl = `${baseUrl}approve.html?id=${encodeURIComponent(spl.id)}&spl_no=${encodedNo}&approver=${encodedMgr}&area=${encodedArea}&role=manager&action=approve`;
    const mgrRejectUrl = `${baseUrl}approve.html?id=${encodeURIComponent(spl.id)}&spl_no=${encodedNo}&approver=${encodedMgr}&area=${encodedArea}&role=manager&action=reject`;

    const emailParams = {
        spl_no: spl.splNo,
        to_kabag_name: spl.kabag.name,
        to_kabag_email: kabagEmail,
        to_manager_name: spl.manager.name,
        to_manager_email: mgrEmail,
        creator_name: spl.kasie.name,
        creator_nik: spl.kasie.no,
        wh_area: spl.area,
        bagian: spl.area,
        wh_location: spl.location,
        lokasi: spl.location,
        overtime_date: spl.date,
        overtime_time: `${spl.startTime} s/d ${spl.endTime} (${spl.duration} Jam)`,
        employee_count: spl.employees.length,
        employee_list: spl.employees.map((e, idx) => `${idx + 1}. ${e.name} (${e.persNo})`).join('\n'),
        reason: spl.reason,
        app_url: window.location.href,
        kabag_approve_url: kabagApproveUrl,
        kabag_reject_url: kabagRejectUrl,
        manager_approve_url: mgrApproveUrl,
        manager_reject_url: mgrRejectUrl,
        email_subject: `[Pengajuan SPL Baru] ${spl.splNo} - Bagian: ${spl.area}`,
        clean_spl_no: spl.splNo
    };

    // If EmailJS SDK is loaded and public key is configured, send via API
    let apiStatus = 'SIMULASI';
    if (window.emailjs && cfg.publicKey) {
        try {
            window.emailjs.init({ publicKey: cfg.publicKey });
            const sendResult = await window.emailjs.send(cfg.serviceId, cfg.templateId, emailParams);
            console.log('EmailJS Notification Sent:', sendResult.status, sendResult.text);
            apiStatus = 'SUKSES TERKIRIM API';
        } catch (e) {
            console.error('EmailJS direct call error:', e);
            alert(`⚠️ Catatan Email: Pengiriman email gagal via API EmailJS.\nPenyebab: ${e?.text || e?.message || JSON.stringify(e)}\n\nPastikan Service ID & Template ID sudah sesuai.`);
            apiStatus = 'GAGAL: ' + (e?.text || e?.message || 'Error');
        }
    } else if (!cfg.publicKey) {
        alert('⚠️ Perhatian: Public Key EmailJS belum tersimpan di browser Anda.\nSilakan buka tab "Slide 2" -> "Tes & Pengaturan Email" untuk menyimpan Public Key Anda.');
    }

    return {
        sentAt: new Date().toLocaleString('id-ID'),
        status: apiStatus,
        subject: `[Pengajuan SPL Baru] ${spl.splNo} - ${spl.area}`,
        recipients: [
            { role: 'Approver 1 (Kabag)', name: spl.kabag.name, email: kabagEmail },
            { role: 'Approver 2 (Manager)', name: spl.manager.name, email: mgrEmail }
        ]
    };
}

function setApproverInfo(kasieName, kasieNo, kabagName, kabagNo, mgrName, mgrNo) {
    const user = getCurrentUserSession();
    const kasieEmail = getApproverEmailByPersNo(kasieNo, kasieName);
    const kabagEmail = getApproverEmailByPersNo(kabagNo, kabagName);
    const mgrEmail = getApproverEmailByPersNo(mgrNo || '5078', mgrName || 'Wawan Kurniawan');

    const kasieNameEl = document.getElementById('spl-app-kasie-name');
    const kasieNoEl = document.getElementById('spl-app-kasie-no');
    const kabagNameEl = document.getElementById('spl-app-kabag-name');
    const kabagNoEl = document.getElementById('spl-app-kabag-no');
    const mgrNameEl = document.getElementById('spl-app-mgr-name');
    const mgrNoEl = document.getElementById('spl-app-mgr-no');

    if (!kasieNameEl || !kabagNameEl || !mgrNameEl) return;

    if (user && user.role === 'KABAG') {
        // Jika yang membuat adalah Kabag langsung (seperti Setiawan)
        kasieNameEl.textContent = `${user.name} (Kabag - Pembuat Langsung)`;
        kasieNoEl.innerHTML = `NIK: ${user.persNo} • <span style="color:#16a34a; font-weight:600;">✓ Otomatis Disetujui</span>`;

        kabagNameEl.textContent = `${user.name} (Disetujui Sendiri)`;
        kabagNoEl.innerHTML = `NIK: ${user.persNo} • <span style="color:#16a34a; font-weight:600;">✓ Approver 1 Selesai</span>`;

        mgrNameEl.textContent = mgrName || 'Wawan Kurniawan';
        mgrNoEl.innerHTML = mgrNo ? `NIK: ${mgrNo} • <span style="color:#0284c7;">✉ ${mgrEmail}</span> <span style="color:#f59e0b; font-weight:600;">(Menunggu Approval)</span>` : `NIK: 5078 • <span style="color:#0284c7;">✉ ${mgrEmail}</span> <span style="color:#f59e0b; font-weight:600;">(Menunggu Approval)</span>`;
    } else {
        kasieNameEl.textContent = kasieName || '-';
        kasieNoEl.textContent = kasieNo ? `NIK: ${kasieNo}` : '';
        
        kabagNameEl.textContent = kabagName || '-';
        kabagNoEl.innerHTML = kabagNo ? `NIK: ${kabagNo} • <span style="color:#0284c7;">✉ ${kabagEmail}</span>` : '';

        mgrNameEl.textContent = mgrName || 'Wawan Kurniawan';
        mgrNoEl.innerHTML = mgrNo ? `NIK: ${mgrNo} • <span style="color:#0284c7;">✉ ${mgrEmail}</span>` : `NIK: 5078 • <span style="color:#0284c7;">✉ ${mgrEmail}</span>`;
    }
}

function resetApproverInfo() {
    setApproverInfo('-', '', '-', '', '-', '');
}

function setupSplTimeCalculator() {
    const startInput = document.getElementById('spl-start-time');
    const endInput = document.getElementById('spl-end-time');
    const durationDisplay = document.getElementById('spl-calc-duration');

    function calc() {
        if (!startInput || !endInput || !durationDisplay) return;
        const start = startInput.value;
        const end = endInput.value;
        if (!start || !end) {
            durationDisplay.textContent = '0 Jam';
            return;
        }

        const [sH, sM] = start.split(':').map(Number);
        const [eH, eM] = end.split(':').map(Number);

        let startMinutes = sH * 60 + sM;
        let endMinutes = eH * 60 + eM;

        if (endMinutes < startMinutes) {
            endMinutes += 24 * 60; // Next day
        }

        const diffMinutes = endMinutes - startMinutes;
        const hours = (diffMinutes / 60).toFixed(1);
        durationDisplay.textContent = `${hours.replace('.0', '')} Jam (${diffMinutes} menit)`;
    }

    if (startInput && endInput) {
        startInput.addEventListener('change', calc);
        endInput.addEventListener('change', calc);
    }
}

function generateNextSplNumber() {
    const list = getStoredSplList();
    const count = list.length + 1;
    const year = new Date().getFullYear();
    const padded = String(count).padStart(3, '0');
    const noField = document.getElementById('spl-doc-no');
    if (noField) {
        noField.value = `SPL/WH/${year}/04/${padded}`;
    }
}

// Submit Form Action
async function handleSplSubmit(e) {
    if (e) e.preventDefault();

    const splNo = document.getElementById('spl-doc-no').value;
    const date = document.getElementById('spl-date').value;
    const startTime = document.getElementById('spl-start-time').value;
    const endTime = document.getElementById('spl-end-time').value;
    const area = document.getElementById('spl-area-select').value;
    const location = document.getElementById('spl-location-select').value;
    const reason = document.getElementById('spl-reason').value.trim();

    // Check selected employees
    const checkboxes = document.querySelectorAll('input[name="spl_emp_check"]:checked');
    const selectedEmps = Array.from(checkboxes).map(cb => {
        const [persNo, name] = cb.value.split('|');
        return { persNo, name };
    });

    if (!date || !startTime || !endTime) {
        alert('Mohon lengkapi tanggal dan jam lembur!');
        return;
    }

    if (!area || !location) {
        alert('Mohon pilih WH Area dan Lokasi!');
        return;
    }

    if (selectedEmps.length === 0) {
        alert('Pilih minimal 1 orang karyawan yang ditugaskan lembur!');
        return;
    }

    if (!reason) {
        alert('Mohon isi uraian pekerjaan / alasan lembur!');
        return;
    }

    // Approver details
    const kasieName = document.getElementById('spl-app-kasie-name').textContent;
    const kasieNo = document.getElementById('spl-app-kasie-no').textContent.replace('NIK: ', '').split('•')[0].trim();
    const kabagName = document.getElementById('spl-app-kabag-name').textContent;
    const kabagNo = document.getElementById('spl-app-kabag-no').textContent.replace('NIK: ', '').split('•')[0].trim();
    const mgrName = document.getElementById('spl-app-mgr-name').textContent;
    const mgrNo = document.getElementById('spl-app-mgr-no').textContent.replace('NIK: ', '').split('•')[0].trim();

    const kasieEmail = getApproverEmailByPersNo(kasieNo, kasieName);
    const kabagEmail = getApproverEmailByPersNo(kabagNo, kabagName);
    const mgrEmail = getApproverEmailByPersNo(mgrNo || '5078', mgrName || 'Wawan Kurniawan');

    // Calculate duration
    const [sH, sM] = startTime.split(':').map(Number);
    const [eH, eM] = endTime.split(':').map(Number);
    let startMin = sH * 60 + sM;
    let endMin = eH * 60 + eM;
    if (endMin < startMin) endMin += 24 * 60;
    const durationHours = parseFloat(((endMin - startMin) / 60).toFixed(1));

    // Periksa role user saat submit
    const currentUser = getCurrentUserSession();
    const isKabagCreator = currentUser && currentUser.role === 'KABAG';

    const newSpl = {
        id: 'SPL-' + Date.now(),
        splNo: splNo,
        date: date,
        startTime: startTime,
        endTime: endTime,
        duration: durationHours,
        area: area,
        location: location,
        employees: selectedEmps,
        reason: reason,
        kasie: { 
            no: isKabagCreator ? currentUser.persNo : kasieNo, 
            name: isKabagCreator ? currentUser.name : kasieName, 
            email: isKabagCreator ? getApproverEmailByPersNo(currentUser.persNo, currentUser.name) : kasieEmail, 
            status: 'approved', 
            date: new Date().toLocaleString('id-ID') 
        },
        kabag: { 
            no: isKabagCreator ? currentUser.persNo : kabagNo, 
            name: isKabagCreator ? currentUser.name : kabagName, 
            email: isKabagCreator ? getApproverEmailByPersNo(currentUser.persNo, currentUser.name) : kabagEmail, 
            status: isKabagCreator ? 'approved' : 'pending', 
            date: isKabagCreator ? new Date().toLocaleString('id-ID') : null 
        },
        manager: { no: mgrNo, name: mgrName, email: mgrEmail, status: 'pending', date: null },
        finalStatus: isKabagCreator ? 'Menunggu Manager' : 'Menunggu Kabag'
    };

    // Auto-dispatch Email Notification to Approver 1 & Approver 2
    const emailResult = await dispatchSplEmailNotification(newSpl);
    newSpl.emailNotification = emailResult;

    const list = getStoredSplList();
    list.unshift(newSpl);
    saveSplList(list);

    // Sync ke Supabase (jika client tersedia)
    if (window.supabaseClient) {
        window.supabaseClient.from('digital_spl').upsert({
            id: newSpl.id,
            spl_no: newSpl.splNo,
            data: newSpl,
            final_status: newSpl.finalStatus,
            updated_at: new Date().toISOString()
        }).then(() => {}).catch(() => {});
    }

    if (isKabagCreator) {
        alert(`Surat Perintah Lembur (${splNo}) berhasil diajukan oleh Kabag (${currentUser.name})!\n\nStatus: Langsung disetujui Kabag & diteruskan ke Manager.\n\n📧 NOTIFIKASI EMAIL TERKIRIM KE:\n• Approver 2 (Manager) : ${mgrEmail} (${mgrName})`);
    } else {
        alert(`Surat Perintah Lembur (${splNo}) berhasil diajukan!\n\n📧 NOTIFIKASI EMAIL OTOMATIS TERKIRIM KE:\n1. Approver 1 (Kabag)    : ${kabagEmail} (${kabagName})\n2. Approver 2 (Manager) : ${mgrEmail} (${mgrName})`);
    }

    // Reset Form
    document.getElementById('spl-reason').value = '';
    document.querySelectorAll('input[name="spl_emp_check"]').forEach(cb => cb.checked = false);
    generateNextSplNumber();

    // Re-render Slide 2 and switch tab
    renderSplHistoryList();
    switchCustomSlide(2);
}

// Render Slide 2 SPL History & Tracking
async function renderSplHistoryList(filterStatus = 'all') {
    const container = document.getElementById('spl-history-container');
    const badgeCount = document.getElementById('spl-pending-badge');
    if (!container) return;

    let list = getStoredSplList();

    // Cek update status dari Supabase jika ada approval dari link email
    let supabaseUpdated = false;
    if (window.supabaseClient) {
        try {
            const { data, error } = await window.supabaseClient.from('digital_spl').select('*').limit(50);
            if (data && data.length) {
                let changed = false;
                data.forEach(remote => {
                    let localItem = list.find(s => s.id === remote.id || s.splNo === remote.spl_no);
                    if (localItem) {
                        if (remote.final_status && localItem.finalStatus !== remote.final_status) {
                            localItem.finalStatus = remote.final_status;
                            changed = true;
                            supabaseUpdated = true;
                        }
                        if (remote.kabag) { localItem.kabag = remote.kabag; changed = true; }
                        if (remote.manager) { localItem.manager = remote.manager; changed = true; }
                    } else if (remote.data) {
                        // Tambahkan data dari cloud jika belum ada di lokal
                        list.unshift(remote.data);
                        changed = true;
                        supabaseUpdated = true;
                    }
                });
                if (changed) {
                    saveSplList(list);
                }
            }
        } catch(e) {
            console.warn('Supabase sync notice:', e);
        }
    }
    return supabaseUpdated;
}

async function manualRefreshSpl() {
    const btn = document.getElementById('btn-spl-refresh');
    if (btn) {
        btn.textContent = '⏳ Memuat...';
        btn.style.opacity = '0.7';
    }
    try {
        const hasUpdate = await renderSplHistoryList();
        if (btn) {
            btn.textContent = hasUpdate ? '✅ Data Terupdate!' : '✓ Sudah Terbaru';
            setTimeout(() => {
                btn.textContent = '🔄 Segarkan Data';
                btn.style.opacity = '1';
            }, 1500);
        }
    } catch (e) {
        if (btn) {
            btn.textContent = '🔄 Segarkan Data';
            btn.style.opacity = '1';
        }
    }
}
    
    // Update pending count
    const pendingCount = list.filter(item => item.finalStatus !== 'Disetujui' && item.finalStatus !== 'Ditolak').length;
    if (badgeCount) {
        badgeCount.textContent = pendingCount;
        badgeCount.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    let filtered = list;
    if (filterStatus === 'pending') {
        filtered = list.filter(item => item.finalStatus.includes('Menunggu'));
    } else if (filterStatus === 'approved') {
        filtered = list.filter(item => item.finalStatus === 'Disetujui');
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 30px 10px; color: #94a3b8;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 8px; opacity: 0.7;">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <div style="font-size: 0.9rem; font-weight: 500;">Belum ada Surat Perintah Lembur</div>
                <div style="font-size: 0.78rem;">Buat pengajuan baru di Slide 1</div>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.style.cssText = 'background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); font-family: "Inter", sans-serif;';

        const isApproved = item.finalStatus === 'Disetujui';
        const statusBg = isApproved ? '#dcfce7' : '#fef3c7';
        const statusColor = isApproved ? '#15803d' : '#b45309';

        const empNames = item.employees.map(e => e.name).join(', ');

        const emailInfo = item.emailNotification ? `
            <div style="margin-top: 8px; font-size: 0.82rem; color: #0369a1; background: #f0f9ff; border: 1px solid #bae6fd; padding: 6px 12px; border-radius: 8px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1rem;">✉</span>
                <span><strong>Email Notifikasi:</strong> ${item.kabag.email} & ${item.manager.email}</span>
            </div>
        ` : '';

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <div>
                    <span style="font-weight: 700; font-size: 1.05rem; color: #0f172a;">${item.splNo}</span>
                    <div style="font-size: 0.82rem; color: #64748b; margin-top: 2px;">${item.area} • ${item.location} • ${item.date}</div>
                </div>
                <span style="background: ${statusBg}; color: ${statusColor}; font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: 99px;">
                    ${item.finalStatus}
                </span>
            </div>

            <div style="font-size: 0.88rem; color: #334155; margin-bottom: 12px; background: #f8fafc; padding: 12px 14px; border-radius: 12px; border: 1px solid #f1f5f9; line-height: 1.5;">
                <div><strong>Karyawan (${item.employees.length}):</strong> ${empNames}</div>
                <div style="margin-top: 4px;"><strong>Waktu:</strong> ${item.startTime} - ${item.endTime} (${item.duration} Jam)</div>
                <div style="margin-top: 4px; color: #64748b; font-style: italic;">"${item.reason}"</div>
                ${emailInfo}
            </div>

            <!-- Approval Stepper -->
            <div style="display: flex; align-items: center; justify-content: space-between; margin: 14px 0 12px; padding: 12px 14px; background: #ffffff; border: 1.5px dashed #cbd5e1; border-radius: 12px; font-size: 0.8rem;">
                <!-- Kasie Step -->
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: #16a34a; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-bottom: 4px;">✓</div>
                    <span style="font-weight: 700; color: #0f172a;">Kasie (Created)</span>
                    <span style="color: #64748b; font-size: 0.75rem;">${item.kasie.name.split(',')[0]}</span>
                </div>
                <div style="height: 3px; background: ${item.kabag.status === 'approved' ? '#16a34a' : '#cbd5e1'}; flex: 0.6;"></div>

                <!-- Kabag Step -->
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: ${item.kabag.status === 'approved' ? '#16a34a' : '#f59e0b'}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-bottom: 4px;">
                        ${item.kabag.status === 'approved' ? '✓' : '⌛'}
                    </div>
                    <span style="font-weight: 700; color: #0f172a;">Kabag</span>
                    <span style="color: #64748b; font-size: 0.75rem;">${item.kabag.name.split(',')[0]}</span>
                </div>
                <div style="height: 3px; background: ${item.manager.status === 'approved' ? '#16a34a' : '#cbd5e1'}; flex: 0.6;"></div>

                <!-- Manager Step -->
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1;">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: ${item.manager.status === 'approved' ? '#16a34a' : (item.kabag.status === 'approved' ? '#f59e0b' : '#cbd5e1')}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-bottom: 4px;">
                        ${item.manager.status === 'approved' ? '✓' : (item.kabag.status === 'approved' ? '⌛' : '○')}
                    </div>
                    <span style="font-weight: 700; color: #0f172a;">Manager</span>
                    <span style="color: #64748b; font-size: 0.75rem;">${item.manager.name}</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 10px; justify-content: flex-end; align-items: center; margin-top: 10px; border-top: 1px solid #f1f5f9; padding-top: 10px;">
                ${item.finalStatus !== 'Disetujui' ? `
                    <button onclick="simulateApproveSpl('${item.id}')" style="background: #18181b; color: #ffffff; border: none; padding: 8px 16px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                        <span>✓ Setujui (Simulasi)</span>
                    </button>
                ` : ''}

                <button onclick="printSplDocument('${item.id}')" style="background: #f1f5f9; color: #0f172a; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    <span>Cetak SPL</span>
                </button>

                <button onclick="deleteSpl('${item.id}')" title="Hapus SPL" style="background: transparent; color: #ef4444; border: none; padding: 8px 10px; border-radius: 8px; font-size: 0.85rem; cursor: pointer;">
                    ✕
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Interactive Simulation Approval
function simulateApproveSpl(id) {
    const list = getStoredSplList();
    const item = list.find(s => s.id === id);
    if (!item) return;

    if (item.kabag.status === 'pending') {
        item.kabag.status = 'approved';
        item.kabag.date = new Date().toLocaleString('id-ID');
        item.finalStatus = 'Menunggu Manager';
        alert(`SPL ${item.splNo} berhasil disetujui oleh Kepala Bagian (${item.kabag.name}). Menunggu persetujuan Manager (${item.manager.name})`);
    } else if (item.manager.status === 'pending') {
        item.manager.status = 'approved';
        item.manager.date = new Date().toLocaleString('id-ID');
        item.finalStatus = 'Disetujui';
        alert(`SPL ${item.splNo} TELAH SELESAI DISETUJUI oleh Manager (${item.manager.name})! Siap dicetak/diarsipkan.`);
    }

    saveSplList(list);
    renderSplHistoryList();
}

function deleteSpl(id) {
    if (!confirm('Yakin ingin menghapus dokumen SPL ini?')) return;
    let list = getStoredSplList();
    list = list.filter(s => s.id !== id);
    saveSplList(list);
    renderSplHistoryList();
}

// Print / View Official SPL Document Format
function printSplDocument(id) {
    const list = getStoredSplList();
    const item = list.find(s => s.id === id);
    if (!item) return;

    const printWindow = window.open('', '_blank', 'width=850,height=900');
    if (!printWindow) {
        alert('Izinkan popup browser untuk mencetak SPL!');
        return;
    }

    const employeeRows = item.employees.map((e, idx) => `
        <tr>
            <td style="border: 1px solid #333; padding: 6px 10px; text-align: center;">${idx + 1}</td>
            <td style="border: 1px solid #333; padding: 6px 10px; text-align: center;">${e.persNo}</td>
            <td style="border: 1px solid #333; padding: 6px 10px;">${e.name}</td>
            <td style="border: 1px solid #333; padding: 6px 10px; text-align: center;">${item.area} / ${item.location}</td>
            <td style="border: 1px solid #333; padding: 6px 10px; text-align: center;">${item.startTime} - ${item.endTime}</td>
            <td style="border: 1px solid #333; padding: 6px 10px; text-align: center;">${item.duration} Jam</td>
        </tr>
    `).join('');

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cetak ${item.splNo}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 30px; color: #111; line-height: 1.4; font-size: 13px; }
                .header-table { width: 100%; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 16px; }
                .title { text-align: center; font-size: 18px; font-weight: bold; text-decoration: underline; margin-bottom: 4px; }
                .subtitle { text-align: center; font-size: 13px; margin-bottom: 20px; font-weight: 500; }
                .meta-table { width: 100%; margin-bottom: 16px; border-collapse: collapse; }
                .meta-table td { padding: 4px 6px; }
                .emp-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                .emp-table th { border: 1px solid #333; background: #f0f0f0; padding: 8px 6px; font-size: 12px; }
                .sign-table { width: 100%; margin-top: 30px; text-align: center; border-collapse: collapse; }
                .sign-table td { width: 33.3%; padding: 6px; vertical-align: top; }
                .stamp { color: #16a34a; font-weight: bold; border: 2px solid #16a34a; display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; transform: rotate(-5deg); margin: 6px 0; }
                @media print {
                    button { display: none; }
                }
            </style>
        </head>
        <body>
            <table class="header-table">
                <tr>
                    <td style="font-size: 18px; font-weight: bold; letter-spacing: 0.5px;">PT GREAT GIANT PINEAPPLE</td>
                    <td style="text-align: right; font-size: 12px; color: #555;">WAREHOUSE & LOGISTICS DIVISION</td>
                </tr>
            </table>

            <div class="title">SURAT PERINTAH LEMBUR (SPL)</div>
            <div class="subtitle">Nomor: <strong>${item.splNo}</strong></div>

            <table class="meta-table">
                <tr>
                    <td style="width: 140px;"><strong>WH Area (Sub-Dept)</strong></td>
                    <td style="width: 10px;">:</td>
                    <td>${item.area}</td>
                    <td style="width: 120px;"><strong>Tanggal Lembur</strong></td>
                    <td style="width: 10px;">:</td>
                    <td>${item.date}</td>
                </tr>
                <tr>
                    <td><strong>Lokasi Kerja</strong></td>
                    <td>:</td>
                    <td>${item.location}</td>
                    <td><strong>Jam Kerja Lembur</strong></td>
                    <td>:</td>
                    <td>${item.startTime} s/d ${item.endTime} (${item.duration} Jam)</td>
                </tr>
                <tr>
                    <td><strong>Uraian Pekerjaan</strong></td>
                    <td>:</td>
                    <td colspan="4">${item.reason}</td>
                </tr>
            </table>

            <div style="font-weight: bold; margin-bottom: 8px;">Daftar Karyawan yang Ditugaskan:</div>
            <table class="emp-table">
                <thead>
                    <tr>
                        <th style="width: 35px;">No</th>
                        <th style="width: 100px;">NIK / Pers.No</th>
                        <th>Nama Karyawan</th>
                        <th style="width: 150px;">Area / Lokasi</th>
                        <th style="width: 120px;">Jam Lembur</th>
                        <th style="width: 80px;">Durasi</th>
                    </tr>
                </thead>
                <tbody>
                    ${employeeRows}
                </tbody>
            </table>

            <!-- Tanda Tangan Hierarki Approval -->
            <table class="sign-table">
                <tr>
                    <td>
                        <div>Dibuat Oleh:</div>
                        <div style="font-weight: 600; font-size: 12px; margin-top: 2px;">Kepala Seksi (Kasie)</div>
                        <div style="height: 60px; display: flex; align-items: center; justify-content: center;">
                            <div class="stamp">DIGITALLY SIGNED<br><span style="font-size: 9px;">${item.kasie.date || ''}</span></div>
                        </div>
                        <div style="font-weight: bold; text-decoration: underline;">${item.kasie.name}</div>
                        <div style="font-size: 11px; color: #555;">NIK: ${item.kasie.no}</div>
                    </td>
                    <td>
                        <div>Disetujui Oleh (1):</div>
                        <div style="font-weight: 600; font-size: 12px; margin-top: 2px;">Kepala Bagian (Kabag)</div>
                        <div style="height: 60px; display: flex; align-items: center; justify-content: center;">
                            ${item.kabag.status === 'approved' ? `
                                <div class="stamp">DIGITALLY SIGNED<br><span style="font-size: 9px;">${item.kabag.date || ''}</span></div>
                            ` : '<div style="color: #999; font-style: italic;">[Menunggu Approval]</div>'}
                        </div>
                        <div style="font-weight: bold; text-decoration: underline;">${item.kabag.name}</div>
                        <div style="font-size: 11px; color: #555;">NIK: ${item.kabag.no}</div>
                    </td>
                    <td>
                        <div>Disetujui Oleh (2):</div>
                        <div style="font-weight: 600; font-size: 12px; margin-top: 2px;">Manager Warehouse</div>
                        <div style="height: 60px; display: flex; align-items: center; justify-content: center;">
                            ${item.manager.status === 'approved' ? `
                                <div class="stamp">DIGITALLY SIGNED<br><span style="font-size: 9px;">${item.manager.date || ''}</span></div>
                            ` : '<div style="color: #999; font-style: italic;">[Menunggu Approval]</div>'}
                        </div>
                        <div style="font-weight: bold; text-decoration: underline;">${item.manager.name}</div>
                        <div style="font-size: 11px; color: #555;">NIK: ${item.manager.no}</div>
                    </td>
                </tr>
            </table>

            <div style="margin-top: 30px; text-align: center;">
                <button onclick="window.print()" style="padding: 10px 24px; font-size: 14px; font-weight: bold; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer;">
                    🖨️ Cetak / Simpan PDF
                </button>
            </div>
        </body>
        </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

// ========================================================
// EMAIL TESTING & CONFIGURATION MODAL
// ========================================================
function openSplEmailConfigModal() {
    const cfg = getEmailJsConfig();
    const existingModal = document.getElementById('spl-email-config-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'spl-email-config-modal';
    modal.style.cssText = 'position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(4px); z-index: 10005; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: "Inter", sans-serif;';

    modal.innerHTML = `
        <div style="background: #ffffff; max-width: 540px; width: 100%; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid #e2e8f0; overflow: hidden;">
            <div style="padding: 20px 24px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fafafa;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.4rem;">⚙️</span>
                    <div>
                        <h4 style="margin: 0; font-size: 1.05rem; font-weight: 700; color: #0f172a;">Pengaturan & Tes Email Otomatis</h4>
                        <p style="margin: 2px 0 0; font-size: 0.75rem; color: #64748b;">Koneksi Notifikasi Email Approver 1 (Kabag) & 2 (Manager)</p>
                    </div>
                </div>
                <button onclick="document.getElementById('spl-email-config-modal').remove()" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: #94a3b8;">✕</button>
            </div>

            <div style="padding: 24px; display: flex; flex-direction: column; gap: 14px; font-size: 0.85rem;">
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 12px 14px; color: #166534; font-size: 0.82rem; line-height: 1.5;">
                    <strong>ℹ️ Status Email:</strong> Sistem otomatis memetakan nama Approver ke format <code>@ggf.com</code>. Untuk menghubungkan ke Gmail/Inbox asli secara langsung dari web, gunakan akun <strong>EmailJS (Gratis)</strong>.
                </div>

                <div>
                    <label style="display: block; font-weight: 700; color: #334155; margin-bottom: 4px;">Service ID (EmailJS)</label>
                    <input type="text" id="cfg-service-id" value="${cfg.serviceId || 'service_ggf_spl'}" placeholder="Contoh: service_abc123" style="width: 100%; box-sizing: border-box; padding: 9px 12px; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem;">
                </div>

                <div>
                    <label style="display: block; font-weight: 700; color: #334155; margin-bottom: 4px;">Template ID (EmailJS)</label>
                    <input type="text" id="cfg-template-id" value="${cfg.templateId || 'template_spl_approval'}" placeholder="Contoh: template_xyz789" style="width: 100%; box-sizing: border-box; padding: 9px 12px; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem;">
                </div>

                <div>
                    <label style="display: block; font-weight: 700; color: #334155; margin-bottom: 4px;">Public Key (EmailJS Account)</label>
                    <input type="text" id="cfg-public-key" value="${cfg.publicKey || ''}" placeholder="Masukkan Public Key EmailJS Anda..." style="width: 100%; box-sizing: border-box; padding: 9px 12px; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem;">
                    <div style="font-size: 0.72rem; color: #64748b; margin-top: 4px;">Dapatkan gratis di menu <em>Account → API Keys</em> pada situs emailjs.com</div>
                </div>

                <!-- Accordion / Form Input Email Nyata Tiap Approver -->
                <div style="border-top: 1px solid #f1f5f9; padding-top: 14px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <label style="font-weight: 700; color: #334155; font-size: 0.88rem;">📋 Alamat Email Asli Para Approver (Gmail/Korporat):</label>
                    </div>
                    <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 10px;">
                        Masukkan alamat email nyata (Gmail/Outlook/dsb). Jika dikosongkan, sistem otomatis memakai format default <code>@ggf.com</code>.
                    </p>

                    <div style="max-height: 180px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px;">
                        <!-- Manager -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Wawan Kurniawan (Manager Warehouse)</span>
                                <span style="color: #64748b;">NIK: 5078</span>
                            </div>
                            <input type="email" id="approver-email-5078" class="custom-approver-input" data-persno="5078" placeholder="Contoh: wawan.kurniawan@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Traffic -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Andriyanto (Kabag Traffic)</span>
                                <span style="color: #64748b;">NIK: 10039299</span>
                            </div>
                            <input type="email" id="approver-email-10039299" class="custom-approver-input" data-persno="10039299" placeholder="Contoh: andriyanto@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Packaging -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Setiawan (Kabag Packaging)</span>
                                <span style="color: #64748b;">NIK: 3152137</span>
                            </div>
                            <input type="email" id="approver-email-3152137" class="custom-approver-input" data-persno="3152137" placeholder="Contoh: setiawan@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Inv Control -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Puji Triananto, S.P (Kabag Inv. Control)</span>
                                <span style="color: #64748b;">NIK: 5292</span>
                            </div>
                            <input type="email" id="approver-email-5292" class="custom-approver-input" data-persno="5292" placeholder="Contoh: puji.triananto@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Material WH -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Robin Dangin (Kabag Material WH)</span>
                                <span style="color: #64748b;">NIK: 3050800</span>
                            </div>
                            <input type="email" id="approver-email-3050800" class="custom-approver-input" data-persno="3050800" placeholder="Contoh: robin.dangin@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Finished Goods -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Mulyadi (Kabag Finished Goods)</span>
                                <span style="color: #64748b;">NIK: 4808</span>
                            </div>
                            <input type="email" id="approver-email-4808" class="custom-approver-input" data-persno="4808" placeholder="Contoh: mulyadi@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Fertilizer WH -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Junaidi Anwar (Kabag Fertilizer WH)</span>
                                <span style="color: #64748b;">NIK: 10031743</span>
                            </div>
                            <input type="email" id="approver-email-10031743" class="custom-approver-input" data-persno="10031743" placeholder="Contoh: junaidi.anwar@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag Sparepart WH -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Sujiman (Kabag Sparepart WH)</span>
                                <span style="color: #64748b;">NIK: 1956</span>
                            </div>
                            <input type="email" id="approver-email-1956" class="custom-approver-input" data-persno="1956" placeholder="Contoh: sujiman@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>

                        <!-- Kabag General WH -->
                        <div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">
                                <span>Muhammad Rafly Anggara (Kabag General WH)</span>
                                <span style="color: #64748b;">NIK: 10027916</span>
                            </div>
                            <input type="email" id="approver-email-10027916" class="custom-approver-input" data-persno="10027916" placeholder="Contoh: rafly@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
                        </div>
                    </div>
                </div>

                <div style="border-top: 1px solid #f1f5f9; padding-top: 12px;">
                    <label style="display: block; font-weight: 700; color: #334155; margin-bottom: 4px;">Tes Kirim ke Email Anda Sendiri:</label>
                    <div style="display: flex; gap: 8px;">
                        <input type="email" id="cfg-test-email" placeholder="Masukkan alamat email Anda (cth: email@gmail.com)" style="flex: 1; padding: 9px 12px; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 0.85rem;">
                        <button type="button" onclick="runDirectEmailTest()" style="background: #0284c7; color: white; border: none; padding: 9px 14px; border-radius: 8px; font-weight: 600; cursor: pointer; white-space: nowrap;">
                            🚀 Kirim Tes
                        </button>
                    </div>
                </div>

                <div id="cfg-test-status" style="display: none; padding: 10px; border-radius: 8px; font-size: 0.8rem;"></div>
            </div>

            <div style="padding: 14px 24px; background: #fafafa; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 10px;">
                <button onclick="previewSampleEmailContent()" style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #0f172a; padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 0.82rem; cursor: pointer;">
                    👁️ Lihat Format Email & Link Approval
                </button>
                <button onclick="saveSplEmailConfig()" style="background: #18181b; color: white; border: none; padding: 8px 18px; border-radius: 8px; font-weight: 600; font-size: 0.82rem; cursor: pointer;">
                    Simpan Pengaturan
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Populate existing custom approver emails with fallback to defaults
    try {
        const customMap = JSON.parse(localStorage.getItem('SPL_CUSTOM_APPROVER_EMAILS') || '{}');
        document.querySelectorAll('.custom-approver-input').forEach(input => {
            const pNo = input.dataset.persno;
            if (customMap[pNo]) {
                input.value = customMap[pNo];
            } else if (DEFAULT_APPROVER_REAL_EMAILS[pNo]) {
                input.value = DEFAULT_APPROVER_REAL_EMAILS[pNo];
            }
        });
    } catch(e) {}
}

function saveSplEmailConfig() {
    const serviceId = document.getElementById('cfg-service-id').value.trim();
    const templateId = document.getElementById('cfg-template-id').value.trim();
    const publicKey = document.getElementById('cfg-public-key').value.trim();

    // Simpan Akun EmailJS
    saveEmailJsConfig({
        serviceId: serviceId || 'service_ggf_spl',
        templateId: templateId || 'template_spl_approval',
        publicKey: publicKey,
        enabled: true
    });

    // Simpan Email Asli Para Approver (Gmail/Korporat nyata)
    const customMap = {};
    document.querySelectorAll('.custom-approver-input').forEach(input => {
        const persNo = input.dataset.persno;
        const val = input.value.trim();
        if (persNo && val) {
            customMap[persNo] = val;
        }
    });
    localStorage.setItem('SPL_CUSTOM_APPROVER_EMAILS', JSON.stringify(customMap));

    alert('Pengaturan Email & Alamat Email Asli Approver berhasil disimpan!');
    const modal = document.getElementById('spl-email-config-modal');
    if (modal) modal.remove();

    // Refresh status tampilan form jika sedang dibuka
    const areaSelect = document.getElementById('spl-area-select');
    if (areaSelect && areaSelect.value) {
        onSplLocationChange();
    }
}

function previewSampleEmailContent() {
    openEmailTemplateGuideModal();
}

function openEmailTemplateGuideModal() {
    const existing = document.getElementById('spl-email-template-modal');
    if (existing) existing.remove();

    const templateHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
    .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    .header { background: #18181b; color: #ffffff; padding: 24px; text-align: center; }
    .header h2 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.3px; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 24px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; }
    .info-table td { padding: 8px 10px; border-bottom: 1px solid #f1f5f9; }
    .info-table td.lbl { width: 35%; color: #64748b; font-weight: 600; }
    .info-table td.val { color: #0f172a; font-weight: 700; }
    .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 14px; margin-bottom: 20px; font-size: 13px; }
    .btn-approve { display: block; width: 100%; box-sizing: border-box; background-color: #16a34a; color: #ffffff !important; text-decoration: none; padding: 14px 20px; border-radius: 10px; font-weight: 700; font-size: 14px; text-align: center; margin-bottom: 10px; }
    .btn-reject { display: block; width: 100%; box-sizing: border-box; background-color: #dc2626; color: #ffffff !important; text-decoration: none; padding: 14px 20px; border-radius: 10px; font-weight: 700; font-size: 14px; text-align: center; }
    .footer { text-align: center; padding: 16px; background: #fafafa; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>Pemberitahuan Surat Perintah Lembur (SPL)</h2>
      <p>Digitalisasi & Alur Persetujuan Warehouse</p>
    </div>
    
    <div class="content">
      <p style="font-size: 14px; margin-top: 0;">Halo Bapak/Ibu <strong>{{to_kabag_name}}</strong> / <strong>{{to_manager_name}}</strong>,</p>
      <p style="font-size: 14px; color: #475569;">Telah diajukan permohonan lembur baru yang memerlukan persetujuan Anda:</p>
      
      <table class="info-table">
        <tr><td class="lbl">No. SPL</td><td class="val">{{{clean_spl_no}}}</td></tr>
        <tr><td class="lbl">Pembuat SPL</td><td class="val">{{creator_name}} (NIK: {{creator_nik}})</td></tr>
        <tr><td class="lbl">Bagian & Lokasi</td><td class="val">{{wh_area}} - {{wh_location}}</td></tr>
        <tr><td class="lbl">Tanggal Lembur</td><td class="val">{{overtime_date}}</td></tr>
        <tr><td class="lbl">Waktu Lembur</td><td class="val">{{overtime_time}}</td></tr>
        <tr><td class="lbl">Jml Karyawan</td><td class="val">{{employee_count}} Orang</td></tr>
      </table>

      <div class="box">
        <strong style="color: #334155;">Daftar Karyawan Ditugaskan:</strong>
        <pre style="margin: 6px 0 0; font-family: inherit; font-size: 13px; white-space: pre-wrap; color: #0f172a;">{{employee_list}}</pre>
      </div>

      <div class="box">
        <strong style="color: #334155;">Alasan / Uraian Pekerjaan:</strong>
        <p style="margin: 6px 0 0; color: #0f172a;">{{reason}}</p>
      </div>

      <div style="margin-top: 25px; text-align: center;">
        <p style="font-weight: 700; font-size: 12px; color: #64748b; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 12px;">ONE-CLICK APPROVAL</p>
        <a href="{{kabag_approve_url}}" class="btn-approve">✓ APPROVE</a>
        <a href="{{kabag_reject_url}}" class="btn-reject">✕ REJECT</a>
      </div>
    </div>

    <div class="footer">
      Pesan otomatis sistem Digital SPL Warehouse • PT Great Giant Foods
    </div>
  </div>
</body>
</html>`;

    const guideModal = document.createElement('div');
    guideModal.id = 'spl-email-template-modal';
    guideModal.style.cssText = 'position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(4px); z-index: 10005; display: flex; align-items: center; justify-content: center; padding: 18px; font-family: "Inter", sans-serif;';

    guideModal.innerHTML = `
        <div style="background: #ffffff; max-width: 620px; width: 100%; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3); border: 1px solid #e2e8f0; overflow: hidden; display: flex; flex-direction: column; max-height: 90vh;">
            <div style="padding: 16px 22px; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; background: #fafafa;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 1.3rem;">📋</span>
                    <h4 style="margin: 0; font-size: 1rem; font-weight: 700; color: #0f172a;">Template Email Siap Pakai untuk EmailJS</h4>
                </div>
                <button onclick="document.getElementById('spl-email-template-modal').remove()" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: #94a3b8;">✕</button>
            </div>

            <div style="padding: 18px 22px; overflow-y: auto; font-size: 0.85rem; display: flex; flex-direction: column; gap: 14px;">
                <div style="background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 10px; padding: 12px; color: #0369a1; font-size: 0.8rem; line-height: 1.5;">
                    <strong>Cara Pakai:</strong><br>
                    1. Klik tombol hijau <strong>"📋 Salin Template HTML"</strong> di bawah.<br>
                    2. Buka dashboard <a href="https://dashboard.emailjs.com/" target="_blank" style="color: #0284c7; font-weight: 700;">EmailJS</a> &rarr; <strong>Email Templates</strong> &rarr; Buka Template Anda.<br>
                    3. Pada kolom <strong>Subject</strong>, ketik: <code style="background: #ffffff; padding: 2px 6px; border-radius: 4px; font-weight: bold;">{{{email_subject}}}</code><br>
                    4. Klik tombol <strong>&lt;/&gt; (Source Code / HTML)</strong> pada body email di EmailJS, hapus isinya, lalu <strong>Paste (Ctrl + V)</strong>.<br>
                    5. Klik <strong>Save</strong>. Selesai!
                </div>

                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-weight: 700; color: #334155; font-size: 0.82rem;">Subject Email (Gunakan 3 kurung kurawal agar rapi tanpa &#x2F;):</span>
                        <button type="button" onclick="navigator.clipboard.writeText('{{{email_subject}}}'); alert('Subject disalin!');" style="background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; padding: 3px 8px; font-size: 0.72rem; cursor: pointer; font-weight: 600;">Salin Subject</button>
                    </div>
                    <input type="text" readonly value="{{{email_subject}}}" style="width: 100%; box-sizing: border-box; padding: 8px 10px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; font-weight: 700; color: #0f172a;">
                </div>

                <div>
                    <span style="font-weight: 700; color: #334155; font-size: 0.82rem; display: block; margin-bottom: 6px;">Kode HTML Template Email (Sudah tombol APPROVE & REJECT):</span>
                    <textarea id="spl-template-code-box" readonly rows="8" style="width: 100%; box-sizing: border-box; padding: 10px; font-family: monospace; font-size: 0.75rem; border: 1.5px solid #cbd5e1; border-radius: 10px; background: #f8fafc; color: #334155; resize: none;">${templateHtml.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
                </div>
            </div>

            <div style="padding: 14px 22px; background: #fafafa; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; gap: 10px;">
                <button onclick="document.getElementById('spl-email-template-modal').remove()" style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; padding: 8px 16px; border-radius: 8px; font-weight: 600; font-size: 0.82rem; cursor: pointer;">
                    Tutup
                </button>
                <button type="button" id="btn-copy-tpl" onclick="copySplTemplateToClipboard()" style="background: #16a34a; color: white; border: none; padding: 8px 20px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                    <span>📋 Salin Template HTML</span>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(guideModal);

    window.copySplTemplateToClipboard = function() {
        navigator.clipboard.writeText(templateHtml).then(() => {
            const btn = document.getElementById('btn-copy-tpl');
            if (btn) {
                btn.innerHTML = '<span>✓ Berhasil Disalin!</span>';
                btn.style.background = '#15803d';
                setTimeout(() => {
                    btn.innerHTML = '<span>📋 Salin Template HTML</span>';
                    btn.style.background = '#16a34a';
                }, 2000);
            }
            alert('Template HTML berhasil disalin ke clipboard! Silakan buka EmailJS dan Paste (Ctrl + V).');
        }).catch(() => {
            const box = document.getElementById('spl-template-code-box');
            if (box) {
                box.select();
                document.execCommand('copy');
                alert('Template HTML berhasil disalin!');
            }
        });
    };
}

async function runDirectEmailTest() {
    const testEmail = document.getElementById('cfg-test-email').value.trim();
    const statusBox = document.getElementById('cfg-test-status');
    const serviceId = document.getElementById('cfg-service-id').value.trim();
    const templateId = document.getElementById('cfg-template-id').value.trim();
    const publicKey = document.getElementById('cfg-public-key').value.trim();

    if (!testEmail) {
        alert('Masukkan alamat email tujuan pengujian terlebih dahulu!');
        return;
    }

    statusBox.style.display = 'block';
    statusBox.style.background = '#e0f2fe';
    statusBox.style.color = '#0369a1';
    statusBox.textContent = '⏳ Mengirim email pengujian...';

    let baseUrl = window.location.origin + window.location.pathname.replace('dashboard.html', '');
    if (window.location.protocol === 'file:') {
        baseUrl = 'https://genadm.vercel.app/';
    }
    const sampleApproveUrl = `${baseUrl}approve.html?id=SPL-TEST-EMAIL&spl_no=SPL%2FWH%2F2026%2F04%2FTEST&approver=Test%20Approver&role=kabag&action=approve`;
    const sampleRejectUrl = `${baseUrl}approve.html?id=SPL-TEST-EMAIL&spl_no=SPL%2FWH%2F2026%2F04%2FTEST&approver=Test%20Approver&role=kabag&action=reject`;

    if (window.emailjs && publicKey) {
        try {
            window.emailjs.init({ publicKey: publicKey });
            await window.emailjs.send(serviceId, templateId, {
                spl_no: 'SPL/WH/2026/04/TEST',
                to_kabag_email: testEmail,
                to_kabag_name: 'Test Approver',
                to_manager_email: testEmail,
                to_manager_name: 'Test Manager',
                creator_name: 'Nur Tri Ayatullah, S.T',
                creator_nik: '209113',
                wh_area: 'Packaging',
                bagian: 'Packaging',
                wh_location: 'Central',
                lokasi: 'Central',
                overtime_date: new Date().toLocaleDateString('id-ID'),
                overtime_time: '17:00 s/d 21:00 (4 Jam)',
                employee_count: 2,
                employee_list: '1. Sakri (7339)\n2. Fedriyan Hertanto (10041846)',
                reason: 'Pengujian koneksi email otomatis Surat Perintah Lembur',
                kabag_approve_url: sampleApproveUrl,
                kabag_reject_url: sampleRejectUrl,
                email_subject: '[Pengajuan SPL Baru] SPL/WH/2026/04/TEST - Bagian: Packaging',
                clean_spl_no: 'SPL/WH/2026/04/TEST'
            });

            statusBox.style.background = '#f0fdf4';
            statusBox.style.color = '#166534';
            statusBox.innerHTML = `✅ <strong>Berhasil Terkirim!</strong> Silakan periksa inbox email <code>${testEmail}</code> (dan folder Spam jika belum muncul).`;
            return;
        } catch (err) {
            statusBox.style.background = '#fef2f2';
            statusBox.style.color = '#991b1b';
            statusBox.innerHTML = `⚠️ Gagal kirim API EmailJS: ${err?.text || err?.message || JSON.stringify(err)}. Pastikan Service ID & Template ID valid.`;
            return;
        }
    }

    // Jika belum isi Public Key, simulasikan pengiriman sukses secara lokal
    setTimeout(() => {
        statusBox.style.background = '#f0fdf4';
        statusBox.style.color = '#166534';
        statusBox.innerHTML = `
            ✅ <strong>Simulasi Email Berhasil!</strong><br>
            Sistem telah menyiapkan parameter email ke: <code>${testEmail}</code><br>
            Untuk pengiriman ke kotak masuk asli, cukup masukkan <strong>Public Key EmailJS</strong> Anda di form atas.
        `;
    }, 600);
}

// Expose globals for HTML
window.initSplModule = initSplModule;
window.onSplAreaChange = onSplAreaChange;
window.onSplLocationChange = onSplLocationChange;
window.handleSplSubmit = handleSplSubmit;
window.renderSplHistoryList = renderSplHistoryList;
window.simulateApproveSpl = simulateApproveSpl;
window.deleteSpl = deleteSpl;
window.printSplDocument = printSplDocument;
window.getEmployeeRoleByPersNo = getEmployeeRoleByPersNo;
window.getCurrentUserSession = getCurrentUserSession;
window.setCurrentUserSession = setCurrentUserSession;
window.updateSplAccessControlUI = updateSplAccessControlUI;
window.populateSplAreas = populateSplAreas;
window.performSplVerification = performSplVerification;
window.resetSplVerification = resetSplVerification;
window.quickSelectCreator = quickSelectCreator;
window.openSplEmailConfigModal = openSplEmailConfigModal;
window.saveSplEmailConfig = saveSplEmailConfig;
window.testSendSplEmail = testSendSplEmail;
window.previewSampleEmailContent = previewSampleEmailContent;
window.runDirectEmailTest = runDirectEmailTest;
window.manualRefreshSpl = manualRefreshSpl;

