/**
 * SPL Digitalization Module (Surat Perintah Lembur)
 * Based on Master Employee1.csv Hierarchy
 */

let SPL_MASTER_DATA = [
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

// Load custom employees stored in localStorage
function loadCustomSplEmployees() {
    try {
        const raw = localStorage.getItem('CUSTOM_SPL_EMPLOYEES');
        if (raw) {
            const customEmps = JSON.parse(raw);
            if (Array.isArray(customEmps)) {
                customEmps.forEach(emp => {
                    const cleanNo = String(emp.persNo).trim();
                    const idx = SPL_MASTER_DATA.findIndex(d => String(d.persNo).trim() === cleanNo);
                    if (idx >= 0) {
                        SPL_MASTER_DATA[idx] = { ...SPL_MASTER_DATA[idx], ...emp };
                    } else {
                        SPL_MASTER_DATA.push(emp);
                    }
                });
            }
        }
    } catch (e) {
        console.error('Error loading custom SPL employees:', e);
    }
}
loadCustomSplEmployees();

// Sync a newly added/imported employee into SPL_MASTER_DATA
function syncEmployeeToSplMaster(emp) {
    if (!emp) return;
    const cleanNo = String(emp.persNo || emp['Pers.No.'] || emp.nik || '').trim();
    const cleanName = String(emp.name || emp['Full Name'] || emp.nama || '').trim();
    if (!cleanNo || !cleanName) return;

    const cleanArea = String(emp.area || emp['WH Area'] || emp['Area'] || 'Central').trim();
    const cleanLocation = String(emp.location || emp['Location'] || 'Central').trim();
    
    // Find default manager/kasie/kabag for this area if not provided
    const ref = SPL_MASTER_DATA.find(d => 
        String(d.area).trim().toLowerCase() === cleanArea.toLowerCase()
    ) || SPL_MASTER_DATA[0];

    const record = {
        area: cleanArea,
        location: cleanLocation,
        persNo: cleanNo,
        name: cleanName,
        subgroup: emp.subgroup || emp['Employee Subgroup'] || 'Pelaksana',
        contract: emp.contract || emp['Work Contract'] || 'Permanent',
        costCenter: emp.costCenter || emp['Cost Ctr'] || '',
        kasieNo: emp.kasieNo || (ref ? ref.kasieNo : '209113'),
        kasieName: emp.kasieName || (ref ? ref.kasieName : 'Nur Tri Ayatullah, S.T'),
        kabagNo: emp.kabagNo || (ref ? ref.kabagNo : '10039299'),
        kabagName: emp.kabagName || (ref ? ref.kabagName : 'Andriyanto'),
        mgrNo: emp.mgrNo || (ref ? ref.mgrNo : '5078'),
        mgrName: emp.mgrName || (ref ? ref.mgrName : 'Wawan Kurniawan')
    };

    const idx = SPL_MASTER_DATA.findIndex(d => String(d.persNo).trim() === cleanNo);
    if (idx >= 0) {
        SPL_MASTER_DATA[idx] = { ...SPL_MASTER_DATA[idx], ...record };
    } else {
        SPL_MASTER_DATA.push(record);
    }

    // Persist to localStorage
    try {
        let list = [];
        const raw = localStorage.getItem('CUSTOM_SPL_EMPLOYEES');
        if (raw) list = JSON.parse(raw) || [];
        const lIdx = list.findIndex(d => String(d.persNo).trim() === cleanNo);
        if (lIdx >= 0) {
            list[lIdx] = record;
        } else {
            list.push(record);
        }
        localStorage.setItem('CUSTOM_SPL_EMPLOYEES', JSON.stringify(list));
    } catch (e) {
        console.error('Error persisting custom employee:', e);
    }

    // Refresh SPL dropdowns if initialized
    if (typeof populateSplAreas === 'function') {
        populateSplAreas();
    }
}
window.syncEmployeeToSplMaster = syncEmployeeToSplMaster;
window.SPL_MASTER_DATA = SPL_MASTER_DATA;

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
        let parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            let modified = false;
            parsed.forEach(item => {
                if (item && item.kasie && (String(item.kasie.no).trim() === '5078' || (item.kasie.name && item.kasie.name.includes('Wawan')))) {
                    if (item.kabag && (String(item.kabag.no).trim() === '5078' || item.kabag.name.includes('Wawan'))) {
                        item.creatorRole = 'MANAGER';
                        item.kabag.no = '-';
                        item.kabag.name = '-';
                        item.kabag.status = 'empty';
                        item.kabag.date = null;
                        modified = true;
                    }
                }
            });

            // Sinkronisasi permanen: Pastikan nomor dokumen SPL di dashboard selalu 100% SAMA dengan yang tertera di email pemberitahuan
            parsed.forEach(item => {
                if (item && item.emailNotification && item.emailNotification.subject) {
                    const match = item.emailNotification.subject.match(/SPL\/WH\/\d{4}\/\d{2}\/\d{3}/);
                    if (match && match[0] && item.splNo !== match[0]) {
                        item.splNo = match[0];
                        modified = true;
                    }
                }
                // Pemulihan khusus untuk kasus nomor 017 yang aslinya terkirim ke email 016
                if (item && (item.splNo === 'SPL/WH/2026/10/017' || item.reason === 'asqd')) {
                    if (item.splNo === 'SPL/WH/2026/10/017') {
                        item.splNo = 'SPL/WH/2026/10/016';
                        modified = true;
                    }
                }
            });

            if (modified) {
                localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(parsed));
            }
            return parsed;
        }
        return [];
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

        // Langsung tampilkan daftar bawahan & info Kabag tanpa harus pilih manual
        autoPopulateEmployees();

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

function getTodayYmd() {
    const now = new Date();
    const yStr = now.getFullYear();
    const mStr = String(now.getMonth() + 1).padStart(2, '0');
    const dStr = String(now.getDate()).padStart(2, '0');
    return `${yStr}-${mStr}-${dStr}`;
}

function updateSplDateRestriction(showNotification = false) {
    const user = getCurrentUserSession();
    const dateInput = document.getElementById('spl-date');
    if (!dateInput) return true;

    const todayStr = getTodayYmd();
    const isPrivileged = user && (user.role === 'KABAG' || user.role === 'MANAGER');

    if (isPrivileged) {
        // Kabag & Manager: Bebas tanggal lampau (Dispensasi Wewenang)
        dateInput.removeAttribute('min');
        return true;
    } else {
        // Kasie / Belum Verifikasi: Hanya hari ini atau ke depan
        dateInput.min = todayStr;
        if (dateInput.value && dateInput.value < todayStr) {
            if (showNotification) {
                alert(`⚠️ Batas Pengajuan Terlewat:\n\nSebagai Kepala Seksi (Kasie), Anda hanya dapat mengajukan SPL untuk hari ini (${todayStr}) atau tanggal yang akan datang.\n\nUntuk pengajuan SPL susulan / tanggal yang telah lampau, pembuatan harus dilakukan melalui akun Kepala Bagian (Kabag) atau Manager.`);
            }
            dateInput.value = todayStr;
            generateNextSplNumber();
            return false;
        }
        return true;
    }
}

function onSplDateChange() {
    updateSplDateRestriction(true);
    generateNextSplNumber();
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
        if (statusBox) statusBox.style.display = 'none';
        if (activeName) activeName.textContent = user.name;
        if (activeRole) activeRole.textContent = `${user.title} (NIK: ${user.persNo})`;
        if (inputField) inputField.value = user.persNo;
    } else {
        if (statusBox) statusBox.style.display = 'none';
    }

    updateSplDateRestriction(false);
}

// Module Initializer
function initSplModule() {
    // Default date to today
    const dateInput = document.getElementById('spl-date');
    if (dateInput) {
        if (!dateInput.value) {
            dateInput.value = getTodayYmd();
        }
        dateInput.removeEventListener('change', onSplDateChange);
        dateInput.addEventListener('change', onSplDateChange);
    }

    populateSplAreas();
    setupSplTimeCalculator();
    generateNextSplNumber();
    renderSplHistoryList();
    updateSplAccessControlUI();

    // Jika user sudah terverifikasi sebelumnya, langsung tampilkan bawahan
    const user = getCurrentUserSession();
    if (user && user.canCreateSpl) {
        autoPopulateEmployees();
    }
    updateSplDateRestriction(false);
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

    // Otomatis pilih area pertama dan langsung tampilkan daftar karyawan bawahan
    if (areas.length >= 1) {
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
    let members = [];

    // Manager tetap mengajukan SPL untuk area/lokasi yang dipilih dan membutuhkan Kabag terkait.
    if (user && user.role === 'MANAGER') {
        const areaRef = SPL_MASTER_DATA.find(d =>
            String(d.area).trim().toLowerCase() === String(area).trim().toLowerCase() &&
            String(d.location).trim().toLowerCase() === String(location).trim().toLowerCase()
        );
        members = [{
            persNo: user.persNo || '5078',
            name: user.name || 'Wawan Kurniawan',
            roleBadge: 'Manager',
            area,
            location,
            kabagNo: areaRef ? areaRef.kabagNo : '',
            kabagName: areaRef ? areaRef.kabagName : '',
            kasieNo: user.persNo || '5078',
            kasieName: user.name || 'Wawan Kurniawan',
            mgrNo: user.persNo || '5078',
            mgrName: user.name || 'Wawan Kurniawan'
        }];
    } else {
        members = SPL_MASTER_DATA.filter(d => 
            String(d.area).trim().toLowerCase() === String(area).trim().toLowerCase() && 
            String(d.location).trim().toLowerCase() === String(location).trim().toLowerCase()
        );

        // Simpan referensi data sebelum filter bawahan
        const areaRef = members[0];

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

        // Sertakan juga Kabag terkait di urutan paling atas daftar agar Kabag bisa cuti / mengajukan SPL sendiri
        const refKabagNo = (user && user.role === 'KABAG' && user.persNo) ? user.persNo : (areaRef ? areaRef.kabagNo : (members[0] ? members[0].kabagNo : ''));
        const refKabagName = (user && user.role === 'KABAG' && user.name) ? user.name : (areaRef ? areaRef.kabagName : (members[0] ? members[0].kabagName : ''));
        
        if (refKabagNo && !members.some(m => String(m.persNo).trim() === String(refKabagNo).trim())) {
            members.unshift({
                persNo: refKabagNo,
                name: refKabagName,
                roleBadge: 'Kabag',
                area: area,
                location: location,
                kabagNo: refKabagNo,
                kabagName: refKabagName,
                kasieNo: areaRef ? areaRef.kasieNo : '',
                kasieName: areaRef ? areaRef.kasieName : '',
                mgrNo: areaRef ? areaRef.mgrNo : '5078',
                mgrName: areaRef ? areaRef.mgrName : 'Wawan Kurniawan'
            });
        }
    }

    if (members.length === 0) {
        empContainer.innerHTML = '<div style="color: #ef4444; font-size: 0.8rem; text-align: center; padding: 12px;">Tidak ada karyawan yang terdaftar untuk pejabat/bagian ini</div>';
        resetApproverInfo();
        return;
    }

    // Render Employee Checkboxes TERLEBIH DAHULU agar tampilan selalu muncul
    empContainer.innerHTML = '';

    members.forEach((m, idx) => {
        if (typeof window.createSplEmpCard === 'function') {
            empContainer.appendChild(window.createSplEmpCard(m));
        } else {
            const item = document.createElement('label');
            item.className = 'spl-emp-card';
            item.innerHTML = `
                <input type="checkbox" name="spl_emp_check" value="${m.persNo}|${m.name}" class="spl-emp-checkbox" onchange="if(window.updateSplSelectedCount) window.updateSplSelectedCount();">
                <div class="spl-emp-avatar">👤</div>
                <div style="flex: 1; display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 8px;">
                    <strong class="spl-emp-name">${m.name}</strong> 
                    <span class="spl-emp-nik">NIK: ${m.persNo}</span>
                </div>
            `;
            empContainer.appendChild(item);
        }
    });
    if (window.updateSplSelectedCount) window.updateSplSelectedCount();

    // Set Approvers from the matching member in this location
    try {
        const ref = members.find(m => m.kasieName && m.kabagName) || members[0];
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
// Auto-migrasi email lama di browser user jika masih tersimpan 93setiawan@gmail.com
try {
    const _storedApprovers = JSON.parse(localStorage.getItem('SPL_CUSTOM_APPROVER_EMAILS') || '{}');
    if (_storedApprovers['3152137'] === '93setiawan@gmail.com') {
        _storedApprovers['3152137'] = 'syukronalif9@gmail.com';
        localStorage.setItem('SPL_CUSTOM_APPROVER_EMAILS', JSON.stringify(_storedApprovers));
    }
} catch (e) {}

const DEFAULT_APPROVER_REAL_EMAILS = {
    '5078': '',                      // Wawan Kurniawan (Manager Warehouse)
    '10039299': '',                  // Andriyanto (Kabag Traffic)
    '3152137': 'syukronalif9@gmail.com', // Setiawan (Kabag Packaging) - Email Nyata
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

function getPublicBaseUrl() {
    // URL publik Vercel yang valid dan selalu bisa diakses dari HP & Komputer manapun via Gmail
    const VERCEL_PUBLIC_URL = 'https://genadm.vercel.app/';
    try {
        const hostname = window.location.hostname || '';
        const isLocal = !hostname || 
                        hostname === 'localhost' || 
                        hostname === '127.0.0.1' || 
                        hostname.startsWith('192.168.') || 
                        hostname.startsWith('10.') || 
                        hostname.startsWith('172.') || 
                        window.location.protocol === 'file:' ||
                        window.location.protocol === 'http:';
                        
        if (!isLocal && window.location.protocol === 'https:') {
            let base = window.location.origin + window.location.pathname.replace(/dashboard\.html.*$/, '').replace(/approve\.html.*$/, '');
            if (!base.endsWith('/')) base += '/';
            return base;
        }
    } catch(e) {}
    return VERCEL_PUBLIC_URL;
}

function saveEmailJsConfig(cfg) {
    localStorage.setItem('SPL_EMAILJS_CONFIG', JSON.stringify(cfg));
}

async function dispatchSplEmailNotification(spl) {
    const cfg = getEmailJsConfig();
    const kabagEmail = spl.kabag.email;
    const mgrEmail = spl.manager.email;

    // Selalu gunakan domain publik HTTPS (Vercel) agar tombol di Gmail di HP / Laptop tidak diblokir privasi jaringan lokal
    const baseUrl = getPublicBaseUrl();

    const encodedNo = encodeURIComponent(spl.splNo);
    const encodedKabag = encodeURIComponent(spl.kabag.name);
    const encodedMgr = encodeURIComponent(spl.manager.name);
    const encodedArea = encodeURIComponent(spl.area || '');

    // URL Universal 2 Tombol: Berfungsi langsung untuk Kabag maupun Manager
    const universalApproveUrl = `${baseUrl}approve.html?id=${encodeURIComponent(spl.id)}&spl_no=${encodedNo}&area=${encodedArea}&action=approve`;
    const universalRejectUrl = `${baseUrl}approve.html?id=${encodeURIComponent(spl.id)}&spl_no=${encodedNo}&area=${encodedArea}&action=reject`;

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
        employee_list: spl.employees.map((e, idx) => {
            const timeStr = (e.startTime && e.endTime) ? ` [${e.startTime}-${e.endTime}, ${e.duration} Jam]` : '';
            const rsnStr = (e.reason && e.reason !== spl.reason) ? ` (Alasan: ${e.reason})` : '';
            return `${idx + 1}. ${e.name} (${e.persNo})${timeStr}${rsnStr}`;
        }).join('\n'),
        reason: spl.reason,
        app_url: 'https://genadm.vercel.app/dashboard.html',
        
        // Parameter Utama 2 Tombol (Approve & Reject)
        approve_url: universalApproveUrl,
        reject_url: universalRejectUrl,
        setujui_url: universalApproveUrl,
        tolak_url: universalRejectUrl,
        link_setujui: universalApproveUrl,
        link_tolak: universalRejectUrl,
        url_setujui: universalApproveUrl,
        url_tolak: universalRejectUrl,

        // Parameter Khusus Role (Untuk kompatibilitas template lama)
        kabag_approve_url: kabagApproveUrl,
        kabag_reject_url: kabagRejectUrl,
        manager_approve_url: mgrApproveUrl,
        manager_reject_url: mgrRejectUrl,

        // Versi URL tanpa https://
        approve_url_raw: universalApproveUrl.replace(/^https?:\/\//, ''),
        reject_url_raw: universalRejectUrl.replace(/^https?:\/\//, ''),

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

    if (user && user.role === 'MANAGER') {
        kasieNameEl.textContent = 'Pejabat Pembuat';
        kasieNoEl.innerHTML = `NIK: ${user.persNo} • <span style="color:#64748b; font-weight:600;">Pembuat SPL</span>`;

        kabagNameEl.textContent = kabagName || 'Kabag Terkait';
        kabagNoEl.innerHTML = kabagNo
            ? `NIK: ${kabagNo} • <span style="color:#0284c7;">✉ ${kabagEmail}</span> <span style="color:#f59e0b; font-weight:600;">(Menunggu Approval)</span>`
            : '<span style="color:#ef4444; font-weight:600;">Kabag untuk area ini tidak ditemukan</span>';

        mgrNameEl.textContent = user.name;
        mgrNoEl.innerHTML = `NIK: ${user.persNo} • <span style="color:#0284c7;">✉ ${mgrEmail}</span> <span style="color:#f59e0b; font-weight:600;">(Menunggu Approval)</span>`;
    } else if (user && user.role === 'KABAG') {
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

        // Sinkronkan ke karyawan yang dicentang yang belum diubah manual
        if (typeof window.syncDefaultTimeToCheckedEmployees === 'function') {
            window.syncDefaultTimeToCheckedEmployees();
        }
    }

    if (startInput && endInput) {
        startInput.addEventListener('change', calc);
        endInput.addEventListener('change', calc);
    }
}

function generateNextSplNumber() {
    const list = getStoredSplList();
    const dateInput = document.getElementById('spl-date');
    let targetDate = new Date();
    if (dateInput && dateInput.value) {
        const parts = dateInput.value.split('-');
        if (parts.length === 3) {
            targetDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        }
    }

    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const prefix = `SPL/WH/${year}/${month}/`;

    // Cari nomor urut tertinggi untuk tahun & bulan ini saja (setiap bulan baru otomatis reset kembali ke 1)
    let maxSeq = 0;
    list.forEach(item => {
        if (item && item.splNo && typeof item.splNo === 'string') {
            if (item.splNo.startsWith(prefix)) {
                const parts = item.splNo.split('/');
                const lastPart = parts[parts.length - 1];
                const seq = parseInt(lastPart, 10);
                if (!isNaN(seq) && seq > maxSeq) {
                    maxSeq = seq;
                }
            }
        }
    });

    const nextSeq = maxSeq + 1;
    const padded = String(nextSeq).padStart(3, '0');
    const resultNo = `${prefix}${padded}`;
    const noField = document.getElementById('spl-doc-no');
    if (noField) {
        noField.value = resultNo;
    }
    return resultNo;
}

// Submit Form Action
async function handleSplSubmit(e) {
    if (e) e.preventDefault();

    // Pastikan nomor urut mutakhir dan tidak bentrok
    let splNo = document.getElementById('spl-doc-no')?.value?.trim();
    const existingList = getStoredSplList();
    if (!splNo || existingList.some(item => item && item.splNo === splNo)) {
        splNo = generateNextSplNumber();
    }
    const date = document.getElementById('spl-date')?.value;
    const area = document.getElementById('spl-area-select')?.value;
    const location = document.getElementById('spl-location-select')?.value;
    const reason = document.getElementById('spl-reason')?.value?.trim() || '';

    // Check selected employees dengan Individual Override
    const checkboxes = document.querySelectorAll('input[name="spl_emp_check"]:checked');
    const selectedEmps = Array.from(checkboxes).map(cb => {
        const [persNo, name] = cb.value.split('|');
        const card = cb.closest('.spl-emp-card');
        const indivStart = card?.querySelector('.spl-indiv-start')?.value || '17:00';
        const indivEnd = card?.querySelector('.spl-indiv-end')?.value || '21:00';
        const indivReason = card?.querySelector('.spl-indiv-reason')?.value?.trim() || reason;

        // Hitung durasi per karyawan
        const [isH, isM] = indivStart.split(':').map(Number);
        const [ieH, ieM] = indivEnd.split(':').map(Number);
        let isMin = (isNaN(isH) ? 17 : isH) * 60 + (isNaN(isM) ? 0 : isM);
        let ieMin = (isNaN(ieH) ? 21 : ieH) * 60 + (isNaN(ieM) ? 0 : ieM);
        if (ieMin < isMin) ieMin += 24 * 60;
        const indivDuration = parseFloat(((ieMin - isMin) / 60).toFixed(1));

        return {
            persNo,
            name,
            startTime: indivStart,
            endTime: indivEnd,
            duration: indivDuration,
            reason: indivReason
        };
    });

    if (!date) {
        alert('Mohon lengkapi tanggal lembur!');
        return;
    }

    // Periksa role user saat submit
    const currentUser = getCurrentUserSession();
    const isKabagCreator = currentUser && currentUser.role === 'KABAG';
    const isManagerCreator = currentUser && currentUser.role === 'MANAGER';

    // Validasi aturan batas tanggal: Kasie dilarang mengajukan tanggal lampau (backdate)
    const todayStr = getTodayYmd();
    if (date < todayStr && !isKabagCreator && !isManagerCreator) {
        alert(`⚠️ Pengajuan Ditolak!\n\nTanggal lembur (${date}) sudah terlewat.\nSebagai Kepala Seksi (Kasie), Anda hanya dapat mengajukan SPL untuk hari ini (${todayStr}) atau tanggal mendatang.\n\nUntuk pengajuan lembur susulan (tanggal lampau), pembuatan SPL harus diajukan oleh Kepala Bagian (Kabag) atau Manager.`);
        updateSplDateRestriction(false);
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

    const startTime = selectedEmps[0].startTime;
    const endTime = selectedEmps[0].endTime;
    const durationHours = selectedEmps[0].duration;

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

    if (isManagerCreator && (!kabagNo || !kabagName || kabagName === '-')) {
        alert('Kabag untuk area/lokasi yang dipilih tidak ditemukan. Periksa data master SPL sebelum mengajukan.');
        return;
    }

    let creatorRole = 'KASIE';
    let kasieObj = { 
        no: kasieNo, 
        name: kasieName, 
        email: kasieEmail, 
        status: 'approved', 
        date: new Date().toLocaleString('id-ID') 
    };
    let kabagObj = { 
        no: kabagNo, 
        name: kabagName, 
        email: kabagEmail, 
        status: 'pending', 
        date: null 
    };
    let managerObj = { 
        no: mgrNo || '5078', 
        name: mgrName || 'Wawan Kurniawan', 
        email: mgrEmail, 
        status: 'pending', 
        date: null 
    };
    let finalStatus = 'Menunggu Kabag';

    if (isManagerCreator) {
        creatorRole = 'MANAGER';
        kasieObj = {
            no: currentUser.persNo || '5078',
            name: currentUser.name || 'Wawan Kurniawan',
            email: getApproverEmailByPersNo(currentUser.persNo, currentUser.name),
            status: 'approved',
            date: new Date().toLocaleString('id-ID')
        };
        managerObj = {
            no: mgrNo || currentUser.persNo || '5078',
            name: mgrName || currentUser.name || 'Wawan Kurniawan',
            email: mgrEmail || getApproverEmailByPersNo(currentUser.persNo, currentUser.name),
            status: 'pending',
            date: null
        };
    } else if (isKabagCreator) {
        creatorRole = 'KABAG';
        kasieObj = {
            no: currentUser.persNo,
            name: currentUser.name,
            email: getApproverEmailByPersNo(currentUser.persNo, currentUser.name),
            status: 'approved',
            date: new Date().toLocaleString('id-ID')
        };
        kabagObj = {
            no: currentUser.persNo,
            name: currentUser.name,
            email: getApproverEmailByPersNo(currentUser.persNo, currentUser.name),
            status: 'approved',
            date: new Date().toLocaleString('id-ID')
        };
        managerObj = {
            no: mgrNo || '5078',
            name: mgrName || 'Wawan Kurniawan',
            email: mgrEmail,
            status: 'pending',
            date: null
        };
        finalStatus = 'Menunggu Manager';
    }

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
        creatorRole: creatorRole,
        kasie: kasieObj,
        kabag: kabagObj,
        manager: managerObj,
        finalStatus: finalStatus
    };

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

    if (isManagerCreator) {
        alert(`Surat Perintah Lembur (${splNo}) berhasil diajukan oleh Manager (${currentUser.name})!\n\nStatus: Menunggu persetujuan Kabag, lalu Manager.\n\n📧 NOTIFIKASI EMAIL TERKIRIM KE:\n• Approver 1 (Kabag)    : ${kabagEmail} (${kabagName})\n• Approver 2 (Manager) : ${mgrEmail} (${mgrName})`);
    } else if (isKabagCreator) {
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

    // Update pending count
    const pendingCount = list.filter(item => item.finalStatus !== 'Disetujui' && item.finalStatus !== 'Ditolak').length;
    if (badgeCount) {
        badgeCount.textContent = pendingCount;
        badgeCount.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    // Sinkronkan active class pada tombol filter pill agar warna berpindah otomatis
    document.querySelectorAll('.spl-filter-pill').forEach(btn => {
        if (btn.getAttribute('data-filter') === filterStatus) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

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
        card.style.cssText = 'background: #ffffff; border: 2px solid #cbd5e1; border-radius: 16px; padding: 16px; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(15,23,42,0.06); font-family: "Inter", sans-serif;';

        const isApproved = item.finalStatus === 'Disetujui';
        const isRejected = item.finalStatus.includes('Ditolak');
        const isWaitingManager = item.finalStatus === 'Menunggu Manager';
        const isWaitingKabag = item.finalStatus === 'Menunggu Kabag';

        // Badge Status Utama di Header Card
        let badgeText = item.finalStatus;
        let badgeBg = '#fef3c7';
        let badgeColor = '#b45309';

        if (isApproved) {
            badgeBg = '#dcfce7';
            badgeColor = '#15803d';
            if (item.kabag && item.kabag.note && item.kabag.note.includes('Manager')) {
                badgeText = '✓ Disetujui (Disahkan Manager)';
            } else {
                badgeText = '✓ Disetujui (Lengkap)';
            }
        } else if (isWaitingManager) {
            badgeBg = '#e0f2fe';
            badgeColor = '#0369a1';
            badgeText = '⌛ Menunggu Manager (Kabag ✓)';
        } else if (isWaitingKabag) {
            badgeBg = '#fef3c7';
            badgeColor = '#b45309';
            badgeText = '⌛ Menunggu Kabag';
        } else if (isRejected) {
            badgeBg = '#fee2e2';
            badgeColor = '#dc2626';
            badgeText = `✕ ${item.finalStatus}`;
        }

        const empNames = item.employees.map(e => e.name).join(', ');
        const creatorDisplayName = (item.kasie && item.kasie.name && item.kasie.name !== '-') ? item.kasie.name : (item.employees[0] ? item.employees[0].name : '-');
        const hasOtherEmployees = item.employees && item.employees.length > 0 && !(item.employees.length === 1 && item.employees[0].name === creatorDisplayName);
        const hasCustomOverrides = Array.isArray(item.employees) && item.employees.some(e => e && e.startTime && (e.startTime !== item.startTime || e.endTime !== item.endTime || (e.reason && e.reason !== item.reason)));

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 8px;">
                <div>
                    <span style="font-weight: 700; font-size: 1.05rem; color: #0f172a;">${item.splNo}</span>
                    <div style="font-size: 0.82rem; color: #64748b; margin-top: 2px;">${item.area} • ${item.location} • ${item.date}</div>
                </div>
                <span style="background: ${badgeBg}; color: ${badgeColor}; padding: 4px 10px; border-radius: 99px; font-size: 0.76rem; font-weight: 700; white-space: nowrap; border: 1px solid currentColor;">
                    ${badgeText}
                </span>
            </div>

            <div style="font-size: 0.88rem; color: #334155; margin-bottom: 12px; background: #f8fafc; padding: 12px 14px; border-radius: 12px; border: 1.5px solid #cbd5e1; line-height: 1.6;">
                <div style="display: flex; align-items: baseline; gap: 6px;">
                    <span style="display: inline-block; width: 72px; font-weight: 700; color: #1e293b; flex-shrink: 0;">Pembuat</span>
                    <span style="font-weight: 700; color: #64748b;">:</span>
                    <span style="font-weight: 600; color: #0f172a;">${creatorDisplayName}</span>
                </div>
                ${hasOtherEmployees ? `
                <div style="display: flex; align-items: baseline; gap: 6px; margin-top: 4px;">
                    <span style="display: inline-block; width: 72px; font-weight: 700; color: #1e293b; flex-shrink: 0;">Karyawan</span>
                    <span style="font-weight: 700; color: #64748b;">:</span>
                    <span>${empNames} <span style="color: #64748b; font-size: 0.8rem;">(${item.employees.length} Orang)</span></span>
                </div>
                ` : ''}
                <div style="display: flex; align-items: baseline; gap: 6px; margin-top: 4px;">
                    <span style="display: inline-block; width: 72px; font-weight: 700; color: #1e293b; flex-shrink: 0;">Waktu</span>
                    <span style="font-weight: 700; color: #64748b;">:</span>
                    <span>${item.startTime} - ${item.endTime} (${item.duration} Jam)</span>
                </div>
                <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #e2e8f0; color: #64748b; font-style: italic;">
                    "${item.reason}"
                </div>
                ${hasCustomOverrides ? `
                <div style="margin-top: 10px; padding-top: 8px; border-top: 1.5px dashed #bfdbfe; font-size: 0.8rem;">
                    <div style="font-weight: 700; color: #1e40af; margin-bottom: 5px;">📋 Rincian Lembur Masing-Masing Karyawan:</div>
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                        ${item.employees.map(e => `
                            <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 6px 10px; border-radius: 8px; border: 1px solid #cbd5e1;">
                                <div style="overflow: hidden; text-overflow: ellipsis;">
                                    <strong style="color: #0f172a;">${e.name}</strong> <span style="color: #64748b; font-size: 0.74rem;">(NIK: ${e.persNo})</span>
                                    ${e.reason && e.reason !== item.reason ? `<div style="font-size: 0.74rem; color: #475569; font-style: italic;">"${e.reason}"</div>` : ''}
                                </div>
                                <span style="font-weight: 700; color: #0284c7; font-size: 0.76rem; background: #e0f2fe; padding: 2px 8px; border-radius: 99px; border: 1px solid #bae6fd; white-space: nowrap; margin-left: 8px;">
                                    ${e.startTime || item.startTime} - ${e.endTime || item.endTime} (${e.duration || item.duration} Jam)
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>

            <!-- Approval Stepper -->
            ${(() => {
                const isManagerCreator = item.creatorRole === 'MANAGER' ||
                                         (item.kasie && String(item.kasie.no).trim() === '5078') ||
                                         (item.kasie && item.kasie.name && item.kasie.name.includes('Wawan'));
                const isKabagSkipped = item.kabag &&
                                       (item.kabag.status === 'empty' || item.kabag.name === '-' || String(item.kabag.no).trim() === '5078');
                const isKabagSpl = !isKabagSkipped && (item.creatorRole === 'KABAG' || (item.kasie && item.kabag && item.kasie.no === item.kabag.no));

                const kabagApproved = item.kabag && item.kabag.status === 'approved';
                const kabagRejected = item.kabag && item.kabag.status === 'rejected';
                const mgrApproved = item.manager && item.manager.status === 'approved';
                const mgrRejected = item.manager && item.manager.status === 'rejected';

                let kabagStatusSubtext = '⌛ Menunggu';
                if (kabagApproved) {
                    kabagStatusSubtext = (item.kabag.note && item.kabag.note.includes('Manager')) ? '✓ Sah (Manager)' : '✓ Disetujui';
                } else if (kabagRejected) {
                    kabagStatusSubtext = '✕ Ditolak';
                }

                let mgrStatusSubtext = '⌛ Menunggu';
                if (mgrApproved) {
                    mgrStatusSubtext = '✓ Disetujui';
                } else if (mgrRejected) {
                    mgrStatusSubtext = '✕ Ditolak';
                }

                return `
                <div style="display: flex; align-items: center; justify-content: space-between; margin: 14px 0 12px; padding: 12px 14px; background: #ffffff; border: 1.5px dashed #cbd5e1; border-radius: 12px; font-size: 0.8rem;">
                    <!-- Creator Step -->
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1;">
                        <div style="width: 28px; height: 28px; border-radius: 50%; background: #16a34a; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-bottom: 4px;">✓</div>
                        <span style="font-weight: 700; color: #0f172a;">${isManagerCreator ? 'Manager (Dibuat)' : (isKabagSpl ? 'Kabag (Dibuat)' : 'Kasie (Dibuat)')}</span>
                        <span style="color: #64748b; font-size: 0.74rem;">${item.kasie ? item.kasie.name.split(',')[0] : '-'}</span>
                        <span style="color: #16a34a; font-size: 0.68rem; font-weight: 600;">✓ Dibuat</span>
                    </div>
                    <div style="height: 3px; background: ${isKabagSkipped ? '#e2e8f0' : (kabagApproved ? '#16a34a' : (kabagRejected ? '#ef4444' : '#cbd5e1'))}; flex: 0.6;"></div>

                    <!-- Kabag Step -->
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; ${isKabagSkipped ? 'opacity: 0.45;' : ''}">
                        <div style="width: 28px; height: 28px; border-radius: 50%; background: ${isKabagSkipped ? '#94a3b8' : (kabagApproved ? '#16a34a' : (kabagRejected ? '#ef4444' : '#f59e0b'))}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-bottom: 4px;">
                            ${isKabagSkipped ? '-' : (kabagApproved ? '✓' : (kabagRejected ? '✕' : '⌛'))}
                        </div>
                        <span style="font-weight: 700; color: #0f172a;">Kabag</span>
                        <span style="color: #64748b; font-size: 0.74rem;">${isKabagSkipped ? '(Dilewati)' : (item.kabag ? item.kabag.name.split(',')[0] : '-')}</span>
                        <span style="color: ${kabagApproved ? '#16a34a' : (kabagRejected ? '#ef4444' : '#d97706')}; font-size: 0.68rem; font-weight: 600;">${kabagStatusSubtext}</span>
                    </div>
                    <div style="height: 3px; background: ${mgrApproved ? '#16a34a' : (mgrRejected ? '#ef4444' : '#cbd5e1')}; flex: 0.6;"></div>

                    <!-- Manager Step -->
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1;">
                        <div style="width: 28px; height: 28px; border-radius: 50%; background: ${mgrApproved ? '#16a34a' : (mgrRejected ? '#ef4444' : '#f59e0b')}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-bottom: 4px;">
                            ${mgrApproved ? '✓' : (mgrRejected ? '✕' : '⌛')}
                        </div>
                        <span style="font-weight: 700; color: #0f172a;">Manager</span>
                        <span style="color: #64748b; font-size: 0.74rem;">${item.manager ? item.manager.name : 'Wawan Kurniawan'}</span>
                        <span style="color: ${mgrApproved ? '#16a34a' : (mgrRejected ? '#ef4444' : '#d97706')}; font-size: 0.68rem; font-weight: 600;">${mgrStatusSubtext}</span>
                    </div>
                </div>
                `;
            })()}

            <!-- Action Buttons -->
            <div style="display: flex; gap: 10px; justify-content: flex-end; align-items: center; margin-top: 10px; border-top: 1px solid #f1f5f9; padding-top: 10px; position: relative; z-index: 10; pointer-events: auto;">
                <button type="button" onclick="printSplDocument('${item.id}')" style="background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; padding: 8px 16px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; cursor: pointer !important; display: inline-flex; align-items: center; gap: 6px; pointer-events: auto !important; position: relative; z-index: 20;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    <span>Cetak SPL</span>
                </button>

                <button type="button" onclick="deleteSpl('${item.id}')" title="Hapus SPL" style="background: transparent; color: #ef4444; border: none; padding: 8px 10px; border-radius: 8px; font-size: 0.85rem; cursor: pointer !important; pointer-events: auto !important; position: relative; z-index: 20;">
                    ✕
                </button>
            </div>
        `;

        container.appendChild(card);
    });

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

function deleteSpl(id) {
    if (!confirm('Yakin ingin menghapus dokumen SPL ini?')) return;
    let list = getStoredSplList();
    list = list.filter(s => s.id !== id);
    saveSplList(list);
    if (typeof generateNextSplNumber === 'function') generateNextSplNumber();
    renderSplHistoryList();
}

function printSplDocument(id) {
    const list = getStoredSplList();
    const item = list.find(s => s.id === id);
    if (!item) return;

    const employeeRows = item.employees.map((e, idx) => `
        <tr>
            <td style="border: 1px solid #333; padding: 5px 6px; text-align: center; font-size: 10.5px;">${idx + 1}</td>
            <td style="border: 1px solid #333; padding: 5px 6px; text-align: center; font-size: 10.5px; white-space: nowrap;">${e.persNo}</td>
            <td style="border: 1px solid #333; padding: 5px 8px; font-size: 10.5px;">
                <strong>${e.name}</strong>
                ${e.reason && e.reason !== item.reason ? `<div style="font-size: 9.5px; color: #555; font-style: italic;">(${e.reason})</div>` : ''}
            </td>
            <td style="border: 1px solid #333; padding: 5px 6px; text-align: center; font-size: 10.5px; white-space: nowrap;">${item.area} / ${item.location}</td>
            <td style="border: 1px solid #333; padding: 5px 6px; text-align: center; font-size: 10.5px; white-space: nowrap;">${e.startTime || item.startTime} - ${e.endTime || item.endTime}</td>
            <td style="border: 1px solid #333; padding: 5px 6px; text-align: center; font-size: 10.5px; white-space: nowrap;">${e.duration || item.duration} Jam</td>
        </tr>
    `).join('');

    // Cek apakah SPL dibuat oleh Manager atau Kabag
    const isManagerCreated = item.creatorRole === 'MANAGER' || 
                             (item.kasie && String(item.kasie.no).trim() === '5078') || 
                             (item.kasie && item.kasie.name && item.kasie.name.includes('Wawan'));

    const isKabagCreated = !isManagerCreated && (item.creatorRole === 'KABAG' || (item.kasie && item.kabag && item.kasie.no === item.kabag.no));
    const isKabagApprovalSkipped = item.kabag &&
                                   (item.kabag.status === 'empty' || item.kabag.name === '-' || String(item.kabag.no).trim() === '5078');

    // Kolom 1 (Dibuat Oleh):
    let creatorTitle = 'Kepala Seksi (Kasie)';
    if (isManagerCreated) creatorTitle = 'Manager Warehouse';
    else if (isKabagCreated) creatorTitle = 'Kepala Bagian (Kabag)';

    let creatorName = item.kasie ? item.kasie.name : (isManagerCreated ? 'Wawan Kurniawan' : '-');
    let creatorNo = item.kasie && item.kasie.no && item.kasie.no !== '-' ? item.kasie.no : (isManagerCreated ? '5078' : '-');
    let creatorDate = item.kasie ? (item.kasie.date || item.date || '') : '';

    // Kolom 2 (Disetujui Oleh (1) / Kabag - TTD TENGAH):
    let middleTitle = 'Kepala Bagian (Kabag)';
    let middleStampHtml = '';
    let middleName = '-';
    let middleNo = '-';

    if (isKabagApprovalSkipped) {
        middleStampHtml = '<div style="height: 60px; display: flex; align-items: center; justify-content: center; color: #cbd5e1; font-size: 20px;">-</div>';
        middleName = '-';
        middleNo = '-';
    } else if (item.kabag && item.kabag.status === 'approved') {
        middleStampHtml = `<div class="stamp">APPROVE<br><span style="font-size: 9px;">${item.kabag.date || ''}</span></div>`;
        middleName = item.kabag.name;
        middleNo = item.kabag.no && item.kabag.no !== '-' ? `NIK: ${item.kabag.no}` : '-';
    } else {
        middleStampHtml = '<div style="color: #999; font-style: italic;">[Menunggu Approval]</div>';
        middleName = item.kabag ? item.kabag.name : '-';
        middleNo = item.kabag && item.kabag.no && item.kabag.no !== '-' ? `NIK: ${item.kabag.no}` : '-';
    }

    // Kolom 3 (Disetujui Oleh (2) / Manager):
    let rightTitle = 'Manager Warehouse';
    let rightStampHtml = '';
    let rightName = item.manager ? item.manager.name : 'Wawan Kurniawan';
    let rightNo = item.manager && item.manager.no && item.manager.no !== '-' ? `NIK: ${item.manager.no}` : 'NIK: 5078';

    if (item.manager && item.manager.status === 'approved') {
        rightStampHtml = `<div class="stamp">APPROVE<br><span style="font-size: 9px;">${item.manager.date || ''}</span></div>`;
    } else {
        rightStampHtml = '<div style="color: #999; font-style: italic;">[Menunggu Approval]</div>';
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
            <style>
                @page {
                    size: A4 portrait;
                    margin: 0 !important;
                }
                html, body {
                    margin: 0 !important;
                    padding: 14mm 16mm 12mm 16mm;
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                    color: #0f172a;
                    line-height: 1.35;
                    font-size: 11px;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                .header-table { width: 100%; border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px; }
                .title { text-align: center; font-size: 14px; font-weight: bold; text-decoration: underline; margin-bottom: 2px; letter-spacing: 0.3px; }
                .subtitle { text-align: center; font-size: 11px; margin-bottom: 14px; font-weight: 500; color: #1e293b; }
                .meta-table { width: 100%; margin-bottom: 14px; border-collapse: collapse; font-size: 10.5px; }
                .meta-table td { padding: 3px 4px; vertical-align: top; }
                .emp-table { width: 100%; border-collapse: collapse; margin-bottom: 18px; }
                .emp-table th { border: 1px solid #333; background: #f8fafc; padding: 5px 4px; font-size: 10.5px; font-weight: 700; color: #0f172a; }
                .sign-table { width: 100%; margin-top: 22px; text-align: center; border-collapse: collapse; font-size: 10.5px; }
                .sign-table td { width: 33.3%; padding: 4px 6px; vertical-align: top; }
                .stamp { color: #16a34a; font-weight: bold; border: 1.5px solid #16a34a; display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 9.5px; transform: rotate(-4deg); margin: 4px 0; }
                @media print {
                    .no-print { display: none !important; }
                    body { padding: 14mm 16mm 12mm 16mm !important; }
                }
            </style>
        </head>
        <body>
            <div class="no-print" style="margin-bottom: 16px; background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; padding: 10px 16px; font-size: 12px; color: #166534; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
                <div>
                    <strong>💡 Tips Cetak Bersih:</strong> Pada panel printer Chrome sebelah kanan, klik <strong>More settings</strong> ➔ hilangkan centang di <strong>"Headers and footers"</strong> agar tulisan tanggal & <code>about:blank</code> tidak muncul.
                </div>
                <button onclick="window.print()" style="background: #16a34a; color: white; border: none; padding: 7px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; white-space: nowrap; margin-left: 12px; font-size: 12px;">
                    🖨️ Cetak Dokumen
                </button>
            </div>
            <table class="header-table">
                <tr>
                    <td style="font-size: 14px; font-weight: bold; letter-spacing: 0.5px; white-space: nowrap;">PT GREAT GIANT PINEAPPLE</td>
                    <td style="text-align: right; font-size: 10.5px; font-weight: 600; color: #475569; white-space: nowrap;">WAREHOUSE & TRANSPORT DEPARTEMEN</td>
                </tr>
            </table>

            <div class="title">SURAT PERINTAH LEMBUR (SPL)</div>
            <div class="subtitle">Nomor: <strong>${item.splNo}</strong></div>

            <table class="meta-table">
                <tr>
                    <td style="width: 85px;"><strong>Bagian</strong></td>
                    <td style="width: 8px; text-align: center;">:</td>
                    <td style="width: 190px; white-space: nowrap;">${item.area}</td>
                    <td style="width: 105px;"><strong>Tanggal Lembur</strong></td>
                    <td style="width: 8px; text-align: center;">:</td>
                    <td style="white-space: nowrap;">${item.date}</td>
                </tr>
                <tr>
                    <td><strong>Lokasi Kerja</strong></td>
                    <td style="text-align: center;">:</td>
                    <td style="white-space: nowrap;">${item.location}</td>
                    <td><strong>Jam Kerja Lembur</strong></td>
                    <td style="text-align: center;">:</td>
                    <td style="white-space: nowrap;">${item.startTime} s/d ${item.endTime} (${item.duration} Jam)</td>
                </tr>
                <tr>
                    <td><strong>Uraian Pekerjaan</strong></td>
                    <td style="text-align: center;">:</td>
                    <td colspan="4">${item.reason}</td>
                </tr>
            </table>

            <div style="font-weight: bold; margin-bottom: 6px; font-size: 10.5px;">Daftar Karyawan yang Ditugaskan:</div>
            <table class="emp-table">
                <thead>
                    <tr>
                        <th style="width: 35px;">No</th>
                        <th style="width: 95px;">NIK / Pers.No</th>
                        <th>Nama Karyawan</th>
                        <th style="width: 140px;">Area / Lokasi</th>
                        <th style="width: 110px;">Jam Lembur</th>
                        <th style="width: 65px;">Durasi</th>
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
                        <div style="color: #475569;">Dibuat Oleh:</div>
                        <div style="font-weight: 700; margin-top: 2px;">${creatorTitle}</div>
                        <div style="height: 50px; display: flex; align-items: center; justify-content: center;">
                            <div class="stamp">APPROVE<br><span style="font-size: 8px;">${creatorDate}</span></div>
                        </div>
                        <div style="font-weight: bold; text-decoration: underline;">${creatorName}</div>
                        <div style="font-size: 10px; color: #64748b; margin-top: 1px;">${creatorNo && creatorNo !== '-' ? `NIK: ${creatorNo}` : '-'}</div>
                    </td>
                    <td>
                        <div style="color: #475569;">Disetujui Oleh :</div>
                        <div style="font-weight: 700; margin-top: 2px;">${middleTitle}</div>
                        <div style="height: 50px; display: flex; align-items: center; justify-content: center;">
                            ${middleStampHtml}
                        </div>
                        <div style="font-weight: bold; text-decoration: underline;">${middleName}</div>
                        <div style="font-size: 10px; color: #64748b; margin-top: 1px;">${middleNo}</div>
                    </td>
                    <td>
                        <div style="color: #475569;">Disetujui Oleh :</div>
                        <div style="font-weight: 700; margin-top: 2px;">${rightTitle}</div>
                        <div style="height: 50px; display: flex; align-items: center; justify-content: center;">
                            ${rightStampHtml}
                        </div>
                        <div style="font-weight: bold; text-decoration: underline;">${rightName}</div>
                        <div style="font-size: 10px; color: #64748b; margin-top: 1px;">${rightNo}</div>
                    </td>
                </tr>
            </table>

            <div class="no-print" style="margin-top: 30px; text-align: center;">
                <button onclick="window.print()" style="padding: 10px 24px; font-size: 14px; font-weight: bold; background: #007AFF; color: white; border: none; border-radius: 6px; cursor: pointer;">
                    🖨️ Cetak / Simpan PDF
                </button>
            </div>
        </body>
        </html>
    `;

    try {
        let printWindow = window.open('', '_blank');
        if (printWindow && !printWindow.closed) {
            printWindow.document.open();
            printWindow.document.write(htmlContent);
            printWindow.document.close();
            return;
        }
    } catch(err) {
        console.warn('Popup window blocked, using hidden iframe fallback:', err);
    }

    // Fallback: cetak langsung via hidden iframe jika popup diblokir browser
    let iframe = document.getElementById('spl-hidden-print-iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'spl-hidden-print-iframe';
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        iframe.style.opacity = '0';
        document.body.appendChild(iframe);
    }
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(htmlContent);
    doc.close();
    setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 250);
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
                            <input type="email" id="approver-email-3152137" class="custom-approver-input" data-persno="3152137" placeholder="Contoh: syukronalif9@gmail.com" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
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
        if (customMap['3152137'] === '93setiawan@gmail.com') {
            customMap['3152137'] = 'syukronalif9@gmail.com';
            localStorage.setItem('SPL_CUSTOM_APPROVER_EMAILS', JSON.stringify(customMap));
        }
        document.querySelectorAll('.custom-approver-input').forEach(input => {
            const pNo = input.dataset.persno;
            if (pNo === '3152137' && (!customMap[pNo] || customMap[pNo] === '93setiawan@gmail.com')) {
                input.value = 'syukronalif9@gmail.com';
            } else if (customMap[pNo]) {
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
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overtime Approval Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:25px 12px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:540px;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">

          <tr>
            <td style="background-color:#0f172a;padding:26px 24px;text-align:center;">
              <span style="display:inline-block;background-color:#22c55e;color:#ffffff;font-size:11px;font-weight:800;letter-spacing:0.8px;padding:4px 12px;border-radius:99px;text-transform:uppercase;margin-bottom:10px;">
                Approval Request
              </span>
              <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:800;letter-spacing:-0.3px;">
                Overtime Order Letter (SPL)
              </h1>
              <p style="color:#94a3b8;margin:4px 0 0;font-size:13px;">
                Warehouse Operation Management System
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 16px;font-size:14px;color:#334155;line-height:1.5;">
                Dear Approver,<br>
                A new overtime request has been submitted by <strong>{{creator_name}} (ID: {{creator_nik}})</strong> requiring your approval:
              </p>

              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:14px;border:1px solid #e2e8f0;margin-bottom:20px;font-size:13px;">
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;color:#64748b;width:38%;">Document No.</td>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;font-weight:700;color:#0f172a;">{{{clean_spl_no}}}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;color:#64748b;">Dept &amp; Location</td>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;font-weight:600;color:#0f172a;">{{bagian}} • {{lokasi}}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;color:#64748b;">Schedule</td>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;font-weight:600;color:#0284c7;">{{overtime_date}} ({{overtime_time}})</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;color:#64748b;">Total Personnel</td>
                  <td style="padding:12px 14px;border-bottom:1px dashed #e2e8f0;font-weight:700;color:#0f172a;">{{employee_count}} Persons</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;color:#64748b;vertical-align:top;">Reason / Task</td>
                  <td style="padding:12px 14px;color:#334155;font-style:italic;">“{{reason}}”</td>
                </tr>
              </table>

              <div style="background-color:#ffffff;border:1px solid #cbd5e1;border-radius:12px;padding:14px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">
                  Assigned Personnel List
                </div>
                <div style="font-size:13px;color:#0f172a;white-space:pre-line;line-height:1.6;font-weight:500;">{{employee_list}}</div>
              </div>

              <!-- 2 BUTTONS APPROVAL (ENGLISH ONLY) -->
              <div style="background-color:#f8fafc;border:1.5px solid #e2e8f0;border-radius:14px;padding:20px 16px;text-align:center;">
                <div style="font-size:12px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">
                  APPROVAL DECISION:
                </div>

                <a href="{{{approve_url}}}" target="_blank" rel="noopener noreferrer" style="display:block;background-color:#16a34a;color:#ffffff;text-align:center;padding:15px 16px;border-radius:12px;text-decoration:none;font-size:15px;font-weight:800;letter-spacing:0.5px;margin-bottom:10px;box-shadow:0 4px 10px rgba(22,163,74,0.25);">
                  ✓ APPROVE
                </a>

                <a href="{{{reject_url}}}" target="_blank" rel="noopener noreferrer" style="display:block;background-color:#ef4444;color:#ffffff;text-align:center;padding:14px 16px;border-radius:12px;text-decoration:none;font-size:14px;font-weight:800;letter-spacing:0.5px;box-shadow:0 4px 10px rgba(239,68,68,0.2);">
                  ✕ REJECT
                </a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
                    <strong>ℹ️ Format 2 Tombol Praktis:</strong><br>
                    Email kini hanya membutuhkan <strong>2 Tombol (APPROVE & REJECT)</strong>. Baik Kabag maupun Manager dapat langsung menyetujui, dan jika <strong>Manager menyetujui terlebih dahulu</strong>, status SPL di web langsung berubah menjadi <strong>"Disetujui"</strong> tanpa menunggu persetujuan Kabag!<br><br>
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

    // Selalu gunakan baseUrl publik HTTPS (Vercel) agar bisa diklik di Gmail
    const baseUrl = getPublicBaseUrl();
    const sampleApproveUrl = `${baseUrl}approve.html?id=SPL-TEST-EMAIL&spl_no=SPL%2FWH%2F2026%2F04%2FTEST&area=Packaging&action=approve`;
    const sampleRejectUrl = `${baseUrl}approve.html?id=SPL-TEST-EMAIL&spl_no=SPL%2FWH%2F2026%2F04%2FTEST&area=Packaging&action=reject`;

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
                app_url: 'https://genadm.vercel.app/dashboard.html',
                approve_url: sampleApproveUrl,
                reject_url: sampleRejectUrl,
                setujui_url: sampleApproveUrl,
                tolak_url: sampleRejectUrl,
                link_setujui: sampleApproveUrl,
                link_tolak: sampleRejectUrl,
                url_setujui: sampleApproveUrl,
                url_tolak: sampleRejectUrl,
                kabag_approve_url: sampleApproveUrl,
                kabag_reject_url: sampleRejectUrl,
                manager_approve_url: sampleApproveUrl,
                manager_reject_url: sampleRejectUrl,
                approve_url_raw: sampleApproveUrl.replace(/^https?:\/\//, ''),
                reject_url_raw: sampleRejectUrl.replace(/^https?:\/\//, ''),
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

// ========================================================
// AUTO-POPULATE EMPLOYEES - Langsung tampilkan bawahan setelah verifikasi NIK
// ========================================================
function autoPopulateEmployees() {
    const user = getCurrentUserSession();
    if (!user || !user.canCreateSpl) return;

    const areaSelect = document.getElementById('spl-area-select');
    const locSelect = document.getElementById('spl-location-select');
    const empContainer = document.getElementById('spl-employee-list-container');
    if (!empContainer) return;

    // Tentukan daftar bawahan berdasarkan role
    let members = [];
    if (user.role === 'MANAGER') {
        // Manager: HANYA tampilkan nama Manager saja (Wawan Kurniawan)
        members = [{
            persNo: user.persNo || '5078',
            name: user.name || 'Wawan Kurniawan',
            roleBadge: 'Manager',
            area: user.area || 'Semua Area Warehouse',
            location: user.location || 'Semua Lokasi',
            kabagNo: '-',
            kabagName: '-',
            kasieNo: '-',
            kasieName: '-',
            mgrNo: user.persNo || '5078',
            mgrName: user.name || 'Wawan Kurniawan'
        }];
    } else if (user.role === 'KABAG') {
        // Kabag: tampilkan semua karyawan di bawah kabag ini
        members = SPL_MASTER_DATA.filter(d => String(d.kabagNo).trim() === String(user.persNo).trim());
        // Sertakan juga Kabag sendiri di urutan teratas agar bisa mengajukan SPL untuk diri sendiri
        if (!members.some(m => String(m.persNo).trim() === String(user.persNo).trim())) {
            members.unshift({
                persNo: user.persNo,
                name: user.name,
                roleBadge: 'Kabag',
                area: user.area || (members[0] ? members[0].area : ''),
                location: user.location || (members[0] ? members[0].location : ''),
                kabagNo: user.persNo,
                kabagName: user.name,
                kasieNo: members[0] ? members[0].kasieNo : '',
                kasieName: members[0] ? members[0].kasieName : '',
                mgrNo: members[0] ? members[0].mgrNo : '5078',
                mgrName: members[0] ? members[0].mgrName : 'Wawan Kurniawan'
            });
        }
    } else if (user.role === 'KASIE') {
        // Kasie: tampilkan semua karyawan di bawah kasie ini
        members = SPL_MASTER_DATA.filter(d => String(d.kasieNo).trim() === String(user.persNo).trim());
        // Sertakan juga Kasie sendiri di urutan teratas
        if (!members.some(m => String(m.persNo).trim() === String(user.persNo).trim())) {
            members.unshift({
                persNo: user.persNo,
                name: user.name,
                roleBadge: 'Kasie',
                area: user.area || (members[0] ? members[0].area : ''),
                location: user.location || (members[0] ? members[0].location : ''),
                kabagNo: members[0] ? members[0].kabagNo : '',
                kabagName: members[0] ? members[0].kabagName : '',
                kasieNo: user.persNo,
                kasieName: user.name,
                mgrNo: members[0] ? members[0].mgrNo : '5078',
                mgrName: members[0] ? members[0].mgrName : 'Wawan Kurniawan'
            });
        }
    }

    if (members.length === 0) {
        empContainer.innerHTML = '<div style="color: #ef4444; font-size: 0.8rem; text-align: center; padding: 12px;">Tidak ada karyawan yang terdaftar untuk pejabat ini</div>';
        return;
    }

    // Render Employee Checkboxes langsung
    empContainer.innerHTML = '';

    members.forEach((m, idx) => {
        if (typeof window.createSplEmpCard === 'function') {
            empContainer.appendChild(window.createSplEmpCard(m));
        } else {
            const item = document.createElement('label');
            item.className = 'spl-emp-card';
            item.innerHTML = `
                <input type="checkbox" name="spl_emp_check" value="${m.persNo}|${m.name}" class="spl-emp-checkbox" onchange="if(window.updateSplSelectedCount) window.updateSplSelectedCount();">
                <div class="spl-emp-avatar">👤</div>
                <div style="flex: 1; display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 8px;">
                    <strong class="spl-emp-name">${m.name}</strong> 
                    <span class="spl-emp-nik">NIK: ${m.persNo}</span>
                </div>
            `;
            empContainer.appendChild(item);
        }
    });
    if (window.updateSplSelectedCount) window.updateSplSelectedCount();

    // Set Approvers dari member yang memiliki info approver lengkap
    try {
        const ref = members.find(m => m.kasieName && m.kabagName) || members[0];
        setApproverInfo(ref.kasieName, ref.kasieNo, ref.kabagName, ref.kabagNo, ref.mgrName, ref.mgrNo);
    } catch (err) {
        console.warn('Error setting approver info:', err);
    }
}

// Expose globals for HTML
window.initSplModule = initSplModule;
window.generateNextSplNumber = generateNextSplNumber;
window.onSplAreaChange = onSplAreaChange;
window.onSplLocationChange = onSplLocationChange;
window.handleSplSubmit = handleSplSubmit;
window.renderSplHistoryList = renderSplHistoryList;
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
window.testSendSplEmail = runDirectEmailTest;
window.previewSampleEmailContent = previewSampleEmailContent;
window.runDirectEmailTest = runDirectEmailTest;
window.manualRefreshSpl = manualRefreshSpl;
window.autoPopulateEmployees = autoPopulateEmployees;
window.onSplDateChange = onSplDateChange;
window.updateSplDateRestriction = updateSplDateRestriction;
window.getTodayYmd = getTodayYmd;

if (!window.updateSplSelectedCount) {
    window.updateSplSelectedCount = function() {
        const all = document.querySelectorAll('input[name="spl_emp_check"]');
        const checked = document.querySelectorAll('input[name="spl_emp_check"]:checked').length;
        const total = all.length;
        const counterEl = document.getElementById('spl-selected-counter');
        const selectAllBtn = document.getElementById('btn-spl-select-all');
        if (counterEl) {
            counterEl.textContent = `${checked} dari ${total} Dipilih`;
            if (checked > 0) {
                counterEl.style.background = '#dbeafe';
                counterEl.style.color = '#1d4ed8';
                counterEl.style.borderColor = '#93c5fd';
            } else {
                counterEl.style.background = '#e0f2fe';
                counterEl.style.color = '#0284c7';
                counterEl.style.borderColor = '#bae6fd';
            }
        }
        if (selectAllBtn && total > 0) {
            if (checked === total) {
                selectAllBtn.textContent = '✕ Batal Semua';
                selectAllBtn.style.color = '#dc2626';
                selectAllBtn.style.borderColor = '#fca5a5';
            } else {
                selectAllBtn.textContent = '✓ Pilih Semua';
                selectAllBtn.style.color = '#2563eb';
                selectAllBtn.style.borderColor = '#cbd5e1';
            }
        }
    };
}

if (!window.toggleSelectAllSplEmployees) {
    window.toggleSelectAllSplEmployees = function() {
        const all = document.querySelectorAll('input[name="spl_emp_check"]');
        if (all.length === 0) return;
        const allChecked = Array.from(all).every(cb => cb.checked);
        all.forEach(cb => { cb.checked = !allChecked; });
        if (window.updateSplSelectedCount) window.updateSplSelectedCount();
    };
}
