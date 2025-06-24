import macmini from "../../../public/equipmentImages/macmini.jpg";
import macbookair from "../../../public/equipmentImages/macbookair.jpg";
import monitor from "../../../public/equipmentImages/monitor.jpg";
import mouse from "../../../public/equipmentImages/mouse.jpg";
 interface Equipment {
     id: number
     title: string;
     imageSrc: string;
     shopUrl: string;

}

export const PcArray : Equipment[]  = [
    {
        id: 0,
        title: "Mac mini M4",
        imageSrc:macmini,
        shopUrl:"https://www.apple.com/ca/shop/buy-mac/mac-mini/apple-m4-chip-with-10-core-cpu-and-10-core-gpu-16gb-memory-256gb",

    },
    {
        id: 1,
        title: "MacBook Air M1",
        imageSrc:macbookair,
        shopUrl:"https://support.apple.com/en-ca/111883",
    },
    {
        id: 2,
        title: "27 Xiaomi 4K Monitor",
        imageSrc:monitor,
        shopUrl:"https://www.displayspecifications.com/en/model/15ca35dc",
    },
    {
        id: 3,
        title: "Logitech MX Master 2S",
        imageSrc:mouse,
        shopUrl:"https://www.amazon.ca/Logitech-Master-Bluetooth-Wireless-Mouse/dp/B0C4XXH2FV/ref=asc_df_B0C4XXH2FV?mcid=62f0db260b2b337bbcc198b8ab714f77&tag=googleshopc0c-20&linkCode=df0&hvadid=706731432645&hvpos=&hvnetw=g&hvrand=9519171003205021648&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001561&hvtargid=pla-2324385515517&hvocijid=9519171003205021648-B0C4XXH2FV-&hvexpln=0&gad_source=1&th=1",
    }
]