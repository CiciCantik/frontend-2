import Anak from "../Components/Array";

const Mak = () => {
    const biodata ={
        "kamar": "1",
        "nama": "marco",
        "jenis kelamin": "LakiLaki",
        "berat": "5kg",
        "status": true
    };
    const biodata2 ={
        "kamar": "2",
        "nama": "caca",
        "jenis kelamin": "Perempuan",
        "berat": "6,7kg",
        "status": true
    };
    const biodata3 ={
        "kamar": "3",
        "nama": "risa",
        "jenis kelamin": "Perempuan",
        "berat": "4,9kg",
        "status": false
    };
    const jeniskelamin= ["LakiLaki", "Perempuan"];
    return ( 
        <>
           <Anak jeniskelamin={jeniskelamin} biodata={biodata}/>
           <Anak jeniskelamin={jeniskelamin} biodata={biodata2}/>
           <Anak jeniskelamin={jeniskelamin} biodata={biodata3}/>
        </>
     );
}
 
export default Mak;