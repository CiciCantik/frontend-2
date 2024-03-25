//Menggunakan Jenis array
function Anak(anak) {
    const {kamar, nama, berat, jeniskelamin, status} = anak.biodata;
    return ( 
        <>
            <h2>Rumah Sakit Bunda</h2>
            {status ?
                <div>
                    <h3>Biodata Anak</h3>
                    <p>kamar : {kamar}</p>
                    <p>nama : {nama}</p>
                    <p>jeniskelamin: {jeniskelamin}</p>
                    <p>berat : {berat}</p>
                </div>
                :
                <p>anak tidak terdata</p>
            }
            
        </>
     );
}

export default Anak;
