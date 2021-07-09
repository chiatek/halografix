import Image from "next/image";
import loading from "../assets/images/loading.gif";

function Loading() {
    return (
        <div className="loading">
            <div className="image-container">
                <Image src={loading} className="image" alt="loading" layout="fill" />
            </div>
        </div>
    );
}

export default Loading;