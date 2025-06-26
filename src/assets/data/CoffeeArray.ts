import coffeegrinder from "@/assets/equipmentImages/coffeegrinder.jpg";
import coffeepot from "@/assets/equipmentImages/coffeepot.jpg";
import hariov60 from "@/assets/equipmentImages/hariov60.jpg";
import kalitawave from "@/assets/equipmentImages/kalitawave.jpg";
import origami from "@/assets/equipmentImages/origamidripper.jpg";
 interface Equipment {
    id: number
    title: string;
    imageSrc: string;
    shopUrl: string;

}

export const CoffeeArray : Equipment[]  = [
    {
        id: 0,
        title: "Comandante C40 MK4",
        imageSrc:coffeegrinder,
        shopUrl:"https://comandantegrinder.com/products/c40-mk4-nitro-blade-black?srsltid=AfmBOoqE4yBI0Y-AkrLrv-zgkCh1R7nxYpoDOeI5QKje4QkNKZvXrLf0",

    },
    {
        id: 1,
        title: "Tsukiusagi Enamel Pot",
        imageSrc:coffeepot,
        shopUrl:"https://www.amazon.ca/Tsuki-Usagi-Slim-Pot-23-7/dp/B0007CM3CE",
    },
    {
        id: 2,
        title: "Hario V60 Dripper",
        imageSrc:hariov60,
        shopUrl:"https://www.amazon.ca/Hario-Ceramic-Coffee-Dripper-Maker/dp/B0BWHKPCLL/ref=sr_1_1?crid=DZXP1ZQ7JR9M&dib=eyJ2IjoiMSJ9.4Z-UMGAdHEWbFWRHztSX-SksPoUIj89htYcVu8ym5sDD0ZfveoA97oVarAr_Z-0SJpBv7_ANML6YdXn76jenTFKzYCav_Q2AycAxrXfmj8AGmyie9HKM53V4Wugvywedi1XgU-hB8SRAA-Ud0RobqWkUEQT5u5iHiFhXIkM25Y_Z8hm24Y5_Az0h18nPRcTcZ-eESZprbibwxn8D-IpH2-mNu9AO0lpc1Fq3IW-E8wk.ONBpOI1hmnBGi9ZxBcigH9skMghdSoI1mrNrswCcUpI&dib_tag=se&keywords=hario+v60&qid=1750715115&s=kitchen&sprefix=hariov60%2Ckitchen%2C199&sr=1-1",
    },
    {
        id: 3,
        title: "Kalita Wave Dripper",
        imageSrc:kalitawave,
        shopUrl:"https://www.amazon.ca/Kalita-Wave-Dripper-185-People/dp/B0991SLKW5/ref=sr_1_2?crid=3D5HHMDYYFLK7&dib=eyJ2IjoiMSJ9.YZ1mHJf9iThxH5E40rKZ5i6nkV0f4dO-i5gV7fKOfT5Z7NSaxA2yluVhkX-qzXe8WLjmC_UMQXWvX7WycCCzL4B1L73Ts1VRqLcsALudSPuo1EwG1gtrUe0zxKZkjkEon_Mai_z2DVUuvnQQWX5E9birNKBF7gg-Ilhip_hgURq11CyK3DqVdL8PdpcMYO0vHkavv1NNdy752Y0fAqkduPK5IdzDBxk_EjWBW1jKvac.RKOfzuWLwYUG1IEI_023_LsdMUL9xNvpEcGz1JQZrqE&dib_tag=se&keywords=Kalita%2Bwave&qid=1750715475&s=kitchen&sprefix=kalita%2Bwave%2Ckitchen%2C174&sr=1-2&th=1",
    },
    {
        id: 4,
        title: "Origami Dripper",
        imageSrc:origami,
        shopUrl:"https://www.amazon.ca/Reusable-Origami-Strainer-Practical-Appliance/dp/B0DL9C2B9R/ref=sr_1_1_sspa?crid=93CYQ5977UCL&dib=eyJ2IjoiMSJ9.Un1hXldHuITzd3lX8p91XVS0E63GvoB-BZjyp3ac3Wf0O23dWO11nOuZhSv7c8Ac8xjRCfoIo4zYEqLnm-UxRQxEXoVhPOTc-rQty2SFi-FNoMWJcMpKtVqhaY91inirkFjbEFhT8eXIerOZRo6mf1dGWQupm8Me7Xk1eOKbg98i8U4fNLTCejMSdNzaydMmIpdFn8TKXYs1FqzHvjkrmp9qLznAfrDZHP-WQPZtsNU.v66NDLi3o5DbgXI630pjFyJqM5YgE18W65VjFwLx4rE&dib_tag=se&keywords=origami%2Bdripper&qid=1750715584&s=kitchen&sprefix=origami%2Bdripper%2Ckitchen%2C183&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    }
]