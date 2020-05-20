function submitProses() {
    const nama = document.getElementById('nama');
    const stambuk = document.getElementById('stambuk');
    const kelas = document.getElementById('kelas');
    const nilai_tugas = document.getElementById('nilai_tugas');
    const nilai_mid = document.getElementById('nilai_mid');
    const nilai_final = document.getElementById('nilai_final');

    const nilai_akhir = (parseFloat(nilai_tugas.value) * 0.2) + (parseFloat(nilai_mid.value) * 0.3) + (parseFloat(nilai_final.value) * 0.5);

    const hasil_penilaian = document.getElementById('hasil_penilaian');

    var index_nilai;

    if (nilai_akhir > 85){
        index_nilai = 'A';
    }else if(nilai_akhir >= 81 && nilai_akhir <= 85){
        index_nilai = 'A-';
    }else if(nilai_akhir >= 76 && nilai_akhir <= 80){
        index_nilai = 'B+';
    }else if(nilai_akhir >= 71 && nilai_akhir <= 75){
        index_nilai = 'B';
    }else if(nilai_akhir >= 66 && nilai_akhir <= 70){
        index_nilai = 'B-';
    }else if(nilai_akhir >= 61 && nilai_akhir <= 65){
        index_nilai = 'C+';
    }else if(nilai_akhir >= 50 && nilai_akhir <= 60){
        index_nilai = 'C';
    }else if(nilai_akhir < 50){
        index_nilai = 'E';
    }else{
        index_nilai = 'Index Error';
    }


    if (nama.value != '' && stambuk.value != '' && kelas.value != '' && nilai_tugas.value != '' && nilai_mid.value != '' && nilai_final.value != '') {
        hasil_penilaian.innerHTML = `
        <div class="card text-left">
                <div class="card-header bg-success">
                    <h1 class="text-white">Hasil Penilaian</h1>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Nama</label>
                        <input type="text" class="form-control p-2" value="`+nama.value+`" disabled>
                    </div>
                    <div class="form-group">
                        <label>Stambuk</label>
                        <input type="text" class="form-control p-2" value="`+stambuk.value+`" disabled>
                    </div>
                    <div class="form-group">
                        <label>Kelas</label>
                        <input type="text" class="form-control p-2" value="`+kelas.value+`" disabled>
                    </div>
                    <div class="form-group">
                        <label>Total Nilai</label>
                        <input type="text" class="form-control p-2" value="`+nilai_akhir+`" disabled>
                    </div>
                    <div class="form-group">
                        <label>Index Nilai</label>
                        <input type="text" class="form-control p-2" value="`+index_nilai+`" disabled>
                    </div>
                </div>
            </div>
        `
    }
}

function resetProses(){
    const hasil_penilaian = document.getElementById('hasil_penilaian');
    
    hasil_penilaian.innerHTML = '';
}