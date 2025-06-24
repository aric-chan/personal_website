import switches from "../../../public/equipmentImages/cherryblack.jpg";
import keycaps from "../../../public/equipmentImages/keycaps.jpg";
import leopold from "../../../public/equipmentImages/leopold660c.jpg";
import lucky65 from "../../../public/equipmentImages/lucky65v2.jpg";
 interface Equipment {
     id: number
     title: string;
     imageSrc: string;
     shopUrl: string;

}

export const KeyboardArray : Equipment[]  = [
    {
        id: 0,
        title: "Cherry MX Silent Black Switches",
        imageSrc: switches,
        shopUrl:"https://www.cherry.de/en-gb/product/mx2a-silent-black",

    },
    {
        id: 1,
        title: "Black PBT Keycaps",
        imageSrc:keycaps,
        shopUrl:"https://www.aliexpress.us/item/1005005960254201.html?spm=a2g0o.productlist.main.3.32ab30c5KHoVG1&algo_pvid=76eb6a05-7266-4bd2-9830-b8fb8dfb3667&algo_exp_id=76eb6a05-7266-4bd2-9830-b8fb8dfb3667-2&pdp_ext_f=%7B%22order%22%3A%2248%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21CAD%2153.76%2148.44%21%21%2138.19%2134.41%21%402103244b17506854116821919efcd2%2112000035092027617%21sea%21CA%210%21ABX&curPageLogUid=nJrbAzhCL7ho&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        id: 2,
        title: "Lucky65 v2",
        imageSrc:lucky65,
        shopUrl:"https://www.aliexpress.us/item/1005008630838524.html?spm=a2g0o.productlist.main.1.5452c89cl55fAe&algo_pvid=472a409f-decc-44e6-87be-ad81ed4bf7e5&algo_exp_id=472a409f-decc-44e6-87be-ad81ed4bf7e5-0&pdp_ext_f=%7B%22order%22%3A%22114%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21CAD%21201.48%2198.03%21%21%211028.48%21500.39%21%402101c72a17507139830978372e59e0%2112000046024930787%21sea%21CA%210%21ABX&curPageLogUid=8RGTCLEKNJIm&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        id: 3,
        title: "Leopold FC660C",
        imageSrc:leopold,
        shopUrl:"https://mechanicalkeyboards.com/products/leopold-fc660c-blue-grey?_pos=14&_sid=e57574dbf&_ss=r",
    }
]