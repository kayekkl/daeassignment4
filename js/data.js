// 開源硬體資料
const yogaPoses = [
    {
        id: 1,
        name: "Raspberry Pi",
        name_en: "Raspberry Pi",
        effect: "單板電腦，通用計算平台，用於教育、物聯網、伺服器、媒體中心等。",
        effect_en: "Single-Board Computer，Improve balance, posture, anGeneral-purpose computing platform for education, IoT, servers, media centers, etc.d strengthen leg and core muscles",
        caution: "支援多種作業系統（如Raspberry Pi OS、Ubuntu）",
        caution_en: "Supports multiple operating systems (e.g., Raspberry Pi OS, Ubuntu)",
        image: "https://assets.raspberrypi.com/static/c671804c05a51efc4e3c2a1bdcbafbcf/e8238/raspberry-pi-5.webp",
        video: "https://www.youtube.com/watch?v=yul4gq_LrOI&ab_channel=RaspberryPi"
    },
    {
        id: 2,
        name: "Arduino Uno",
        name_en: "Arduino Uno",
        effect: "微控制器開發板，用於感測器控制、機器人、物聯網設備開發。",
        effect_en: "Microcontroller Development Board，Sensor control, robotics, IoT device development.",
        caution: "易於程式設計（使用Arduino IDE）",
        caution_en: "Easy to program (using Arduino IDE)",
        image: "https://store.arduino.cc/cdn/shop/files/A000066_03.front_1000x750.jpg?v=1727098250",
        video: "https://www.youtube.com/watch?v=FkTgKc-IOyM&ab_channel=ExplainingComputers"
    },
    {
        id: 3,
        name: "BeagleBone Black",
        name_en: "BeagleBone Black",
        effect: "單板電腦，嵌入式系統開發，適用於機器人、工業控制。",
        effect_en: "Strengthen leg and core muscles, improve focus and balance",
        caution: "高效能AM335x 1GHz ARM處理器",
        caution_en: "High-performance AM335x 1GHz ARM processor",
        image: "https://www.beagleboard.org/app/uploads/2023/07/DSC00505-1024x882.webp",
        video: "https://www.youtube.com/watch?v=prZypwTqdCU&ab_channel=TechieYanTechnologies"
    },
    {
        id: 4,
        name: "Pine64 PinePhone",
        name_en: "Pine64 PinePhone",
        effect: "開源智慧手機，運行開源作業系統（如Ubuntu Touch、Manjaro），用於隱私保護和客製化。",
        effect_en: "Runs open-source OS (e.g., Ubuntu Touch, Manjaro) for privacy and customization.",
        caution: "可拆卸硬體，易於維修",
        caution_en: "Modular hardware, easy to repair",
        image: "https://pine64.org/devices/images/pinephone.png",
        video: "https://www.youtube.com/watch?v=xlIBJyGESmQ&ab_channel=IvonHuang"
    },
    {
        id: 5,
        name: "ESP32",
        name_en: "ESP32",
        effect: "微控制器模組，物聯網應用、無線通訊（Wi-Fi和藍牙）。",
        effect_en: "IoT applications, wireless communication (Wi-Fi and Bluetooth).",
        caution: "雙核處理器，高效能",
        caution_en: "Dual-core processor, high performance",
        image: "https://blog.jmaker.com.tw/content/images/size/w2000/2020/04/esp32-4-1.png",
        video: "https://www.youtube.com/watch?v=UuxBfKA3U5M&ab_channel=Lucca%27sLab"
    },
    {
        id: 6,
        name: "OpenWrt Router",
        name_en: "OpenWrt Router",
        effect: "路由器固件（硬體相容）,將消費級路由器轉為高效能、可客製化的網路設備。",
        effect_en: "Router Firmware (Hardware Compatible), Converts consumer routers into high-performance, customizable network devices.",
        caution: "支援數百款路由器型號",
        caution_en: "Supports hundreds of router models",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5oX_5GMJyovGcY27uyg0DeASrjgHfgKzKQ&s",
        video: "https://www.youtube.com/watch?v=S-3ZAamD72Q&list=PLcllAaz-ymn8cUqRjafoBcsfzTB7HN9xs&ab_channel=STARTUPHAKK"
    },
    {
        id: 7,
        name: "PocketBeagle",
        name_en: "PocketBeagle",
        effect: "迷你單板電腦,嵌入式系統、教育、物聯網原型設計。",
        effect_en: "Mini Single-Board Computer, Embedded systems, education, IoT prototyping.",
        caution: "小於名片尺寸，超便攜",
        caution_en: "Smaller than a business card, ultra-portable",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZiGgjSA_YdRsnZhaZUfaAaufk-g5MT74BQ&s",
        video: "https://www.youtube.com/watch?v=2nyP1a_Vp9Q&ab_channel=%E5%B0%8FK%E8%A8%93%E7%B7%B4%E6%97%A5%E5%B8%B8"
    },
    {
        id: 8,
        name: "Teensy 4.1",
        name_en: "Teensy 4.1",
        effect: "微控制器開發板, 高性能嵌入式應用，如音訊處理、感測器控制。",
        effect_en: "Microcontroller Development Board, High-performance embedded applications like audio processing, sensor control.",
        caution: "600MHz ARM Cortex-M7處理器",
        caution_en: "600MHz ARM Cortex-M7 processor",
        image: "https://www.pjrc.com/store/teensy41_4.jpg",
        video: "https://www.youtube.com/watch?v=75IvTqRwNsE&ab_channel=ZackFreedman"
    },
    {
        id: 9,
        name: "Adafruit Circuit Playground Express",
        name_en: "Adafruit Circuit Playground Express",
        effect: "微控制器開發板, 教育、互動式電子項目（如穿戴設備）。",
        effect_en: "Microcontroller Development Board, Education, interactive electronics projects (e.g., wearables).",
        caution: "內建感測器（光、聲音、加速度計等）",
        caution_en: "Built-in sensors (light, sound, accelerometer, etc.)",
        image: "https://cdn-shop.adafruit.com/970x728/3333-05.jpg",
        video: "https://www.youtube.com/watch?v=L1H_-ctldx4&list=PL9VJ9OpT-IPRo77roCKMzIh4q4Mu2dCBU&ab_channel=Prof.JohnGallaugher"
    },
    {
        id: 10,
        name: "Olimex OLinuXino",
        name_en: "Olimex OLinuXino",
        effect: "單板電腦, 工業控制、嵌入式系統開發。",
        effect_en: "Single-Board Computer, Industrial control, embedded system development.",
        caution: "全開源設計（包括PCB佈局）",
        caution_en: "Fully open-source design (including PCB layout)",
        image: "https://mm.digikey.com/Volume0/opasdata/d220001/derivates/6/003/220/186/A20-OLINUXINO-MICRO-S16M_web%28640x640%29.jpg",
        video: "https://www.youtube.com/watch?v=kxCBwUviO-Q&ab_channel=LeonAnavi"
    },
    {
        id: 11,
        name: "RISC-V Freedom E310",
        name_en: "RISC-V Freedom E310",
        effect: "微控制器, 基於RISC-V架構的嵌入式應用。",
        effect_en: "Microcontroller, RISC-V-based embedded applications.",
        caution: "完全開源的RISC-V指令集架構",
        caution_en: "Fully open-source RISC-V architecture",
        image: "https://images.prismic.io/sifive/Zw13yYF3NbkBXaxR_HiFive-Premier-P550-Image-1.png?auto=compress,format&w=1920&q=70",
        video: "https://www.youtube.com/watch?v=vBnFYMYMjlE&ab_channel=RISC-VInternational"
    },
    {
        id: 12,
        name: "Novena Laptop",
        name_en: "Novena Laptop",
        effect: "開源筆記型電腦, 客製化計算平台，適合硬體駭客。",
        effect_en: "Open-Source Laptop, Customizable computing platform for hardware hackers.",
        caution: "全開源硬體設計",
        caution_en: "Fully open-source hardware design",
        image: "https://hackaday.com/wp-content/uploads/2016/01/novena.png?w=800",
        video: "https://www.youtube.com/watch?v=WaOP1orfeqI&ab_channel=element14presents"
    },
    {
        id: 13,
        name: "OpenMoko",
        name_en: "OpenMoko",
        effect: "開源手機, 早期開源手機項目，支援客製化作業系統。",
        effect_en: "Open-Source Phone, Early open-source phone project, supports custom OS.",
        caution: "完全開放的硬體規格",
        caution_en: "Fully open hardware specifications",
        image: "https://wiki.openmoko.org/images/e/eb/Neo_front_3.gif",
        video: "https://www.youtube.com/watch?v=dyxfzMWjohQ&ab_channel=ThoughtAmps"
    },
    {
        id: 14,
        name: "HackRF One",
        name_en: "HackRF One",
        effect: "軟體定義無線電 (SDR), 無線信號分析、研究和開發。",
        effect_en: "Software-Defined Radio (SDR), Wireless signal analysis, research, and development.",
        caution: "頻率範圍1MHz至6GHz",
        caution_en: "Frequency range 1MHz to 6GHz",
        image: "https://www.linkwen.com.tw/eng/images/HackRFOne/hackrfone.jpeg",
        video: "https://www.youtube.com/watch?v=XY24rer1sIY&ab_channel=ElektorTV"
    },
    {
        id: 15,
        name: "Trezor One",
        name_en: "Trezor One",
        effect: "硬體加密錢包, 加密貨幣安全儲存。",
        effect_en: "Hardware Crypto Wallet, Secure storage for cryptocurrencies.",
        caution: "開源硬體和固件",
        caution_en: "Open-source hardware and firmware",
        image: "https://imagedelivery.net/dvYzklbs_b5YaLRtI16Mnw/647cde15-4de2-41b8-7ced-75120c4efa00/public",
        video: "https://www.youtube.com/watch?v=Ecb3SF_RKQA&ab_channel=Petiksmode"
    },
    {
        id: 16,
        name: "RepRap 3D Printer",
        name_en: "RepRap 3D Printer",
        effect: "3D列印機, 自製3D列印設備，支援客製化製造。",
        effect_en: "3D Printer, DIY 3D printing, supports custom manufacturing.",
        caution: "自複製設計（可列印自身零件）",
        caution_en: "Self-replicating design (can print its own parts)",
        image: "https://zh.treatstock.com/static/uploads/printers/sku-220815-1.jpg",
        video: "https://www.youtube.com/watch?v=v-m7cG1Kgxo&ab_channel=MarkMills"
    },
    {
        id: 17,
        name: "OpenBCI",
        name_en: "OpenBCI",
        effect: "腦機介面設備, 腦電波記錄和分析，用於研究和應用。",
        effect_en: "Brain-Computer Interface Device, EEG recording and analysis for research and applications.",
        caution: "開源硬體和軟體",
        caution_en: "Open-source hardware and software",
        image: "https://shop.openbci.com/cdn/shop/files/UCM4-001.png?v=1700584925&width=1260",
        video: "https://www.youtube.com/watch?v=T4OqNtNh_Ls&ab_channel=ConorRussomanno"
    },
    {
        id: 18,
        name: "Milk-V Duo",
        name_en: "Milk-V Duo",
        effect: "單板電腦, 基於RISC-V的物聯網和嵌入式應用。",
        effect_en: "Single-Board Computer, RISC-V-based IoT and embedded applications.",
        caution: "低成本（約$10）",
        caution_en: "Low cost (~$10)",
        image: "https://milkv.io/zh/assets/images/duo-v1.2-9bf1d36ef7632ffba032796978cda903.png",
        video: "https://www.youtube.com/watch?v=YqUtGk0DHbQ&ab_channel=PlatimaTinkers"
    },
    {
        id: 19,
        name: "Chumby",
        name_en: "Chumby",
        effect: "開源迷你電腦, 網路小工具，用於顯示天氣、音樂、社交媒體。",
        effect_en: "Open-Source Mini Computer, Internet widget for weather, music, social media displays.",
        caution: "全開源硬體設計",
        caution_en: "Fully open-source hardware design",
        image: "https://s.yimg.com/ny/api/res/1.2/C17PAasO03dhEeCsvzzODg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYwODtjZj13ZWJw/https://o.aolcdn.com/images/dar/5845cadfecd996e0372f/352b02c9938969d32e006a4b09bcab8c2ba85c72/aHR0cDovL28uYW9sY2RuLmNvbS9oc3Mvc3RvcmFnZS9taWRhcy9hYTRmNmFlNDc1NmUxZjI0YWFlOGQzMzkxYmZhODI3Zi8yMDAzNTMyMTgvY2h1bWJ5LmpwZw==",
        video: "https://www.youtube.com/watch?v=LfKyo5lzxVY&ab_channel=ChumbyIndustries"
    },
    {
        id: 20,
        name: "MinnowBoard",
        name_en: "MinnowBoard",
        effect: "單板電腦, 嵌入式系統開發，支援Windows和Linux。",
        effect_en: "Single-Board Computer, Embedded system development, supports Windows and Linux.",
        caution: "基於Intel Atom處理器",
        caution_en: "Intel Atom processor-based",
        image: "https://canada1.discourse-cdn.com/flex036/uploads/mender/original/1X/656c2d82b4368c03a7c8268567929530bfe038ed.jpeg",
        video: "https://www.youtube.com/watch?v=2RN6Gr9c7_U&ab_channel=SethJennings"
    }
];

// 難度對應的中文
const difficultyMap = {
    'beginner': '初級',
    'intermediate': '中級',
    'advanced': '高級'
};

// 效果分類標籤
const effectTags = {
    'strength': '增強力量',
    'flexibility': '提升柔軟度',
    'balance': '開源硬體',
    'relax': '放鬆減壓'
};

// 根據效果描述為每個瑜伽動作添加效果標籤
yogaPoses.forEach(pose => {
    pose.effectTags = [];
    
    if (pose.effect.includes('平衡')) {
        pose.effectTags.push('balance');
    }

    
    // 如果沒有標籤，添加一個預設標籤
    if (pose.effectTags.length === 0) {
        pose.effectTags.push('balance');
    }
}); 