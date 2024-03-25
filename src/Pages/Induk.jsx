import Anak from "../Components/Anak";
import Button from "../Components/Button";

function Induk() {
    const bioData = {kondisi:"sehat", nama:"cici"};
    function handleClick() {
        alert('Anak anda telah terdata')
    }
    return ( 
        <div>
            <Anak data={bioData}/>
            <Button onClick={handleClick}/>
        </div>
     );
}

export default Induk;