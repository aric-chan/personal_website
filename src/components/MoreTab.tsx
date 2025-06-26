import ShinyText from "@/components/ui/ShinyText.tsx";
import {Fade} from "react-awesome-reveal";




const MoreTab = () => {

    return (

            <Fade>
                <ShinyText
                    className="!text-5xl !font-bold !leading-snug"
                    text="More to come"
                    disabled={false}
                    speed={3}
                />
            </Fade>
    );
};

export default MoreTab;