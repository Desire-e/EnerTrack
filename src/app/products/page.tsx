import ProductsHero from './_components/ProductsHero'
import TabList from "./_components/TabList"


export default function Products() {
    // ---------------------
    // Data
    // ---------------------

    const tabItems = [
    {
        id: "energy-monitoring",
        label: "Energy Monitoring",
        content: <p>Contenido 1</p>,
    },
    {
        id: "power-quality",
        label: "Power Quality",
        content: <p>Contenido 2</p>,
    },
    {
        id: "energy-management",
        label: "Energy Management",
        content: <p>Contenido 3.</p>,
    },
    ];

    const products = [
    {
        id: "product-0",
        categoryId: "energy-monitoring",
        title: "Energy Monitor",
        description:
        "A connected monitoring device that provides real-time visibility into electricity consumption across your facilities.",
        features: [
        "Real-time measurements",
        "IoT connectivity",
        "Consumption tracking",
        "Industrial environments",
        ],
        specifications: [
        "Measurement: 3-phase",
        "Connectivity: Ethernet / Wi-Fi",
        "Data interval: Real-time",
        "Installation: DIN rail",
        "Voltage: Up to 400 V",
        ],
        image: "",
    },
    {
        id: "product-1",
        categoryId: "power-quality",
        title: "Power Quality Monitor",
        description:
        "An advanced monitoring solution designed to detect electrical anomalies and analyze the quality of your power supply.",
        features: [
        "Voltage monitoring",
        "Current monitoring",
        "Harmonic analysis",
        "Event detection",
        ],
        specifications: [
        "Measurement: 3-phase",
        "Voltage: Up to 400 V",
        "Frequency: 50 / 60 Hz",
        "Connectivity: Ethernet",
        "Monitoring: Continuous",
        ],
        image: "",
    },
    {
        id: "product-2",
        categoryId: "energy-management",
        title: "Energy Gateway",
        description:
        "A central gateway that collects data from multiple energy devices and makes it available for analysis through a unified platform.",
        features: [
        "Multi-device connectivity",
        "Centralized data",
        "IoT communication",
        "Cloud integration",
        ],
        specifications: [
        "Connectivity: Ethernet / 4G",
        "Protocols: Modbus / MQTT",
        "Devices: Multiple",
        "Data transmission: Real-time",
        "Deployment: Industrial",
        ],
        image: "",
    },
    {
        id: "product-3",
        categoryId: "energy-management",
        title: "Energy Management Platform",
        description: "A centralized platform for monitoring consumption, analyzing performance, and identifying opportunities for energy optimization.",
        features: [
        "Real-time dashboards",
        "Historical data",
        "Consumption analytics",
        "Alerts & notifications",
        "Reports",
        ],
        specifications: [
        "Access: Web",
        "Data: Real-time + historical",
        "Dashboards: Customizable",
        "Alerts: Configurable",
        "Deployment: Cloud",
        ],
        image: "",
    },
    ];
    
    // ---------------------
    // Render
    // ---------------------

    return (
      <main>
            <ProductsHero />

            {/* Content */}
            <div className="flex flex-col w-full max-w-[95%] mx-auto py-20 gap-25">
                <section className='flex flex-col md:gap-15 gap-10 w-full'>
                    <TabList 
                    items={tabItems} // every section - Tab items 
                    defaultTabId={tabItems[0].id} // default Tab item selected
                    products={products} // every product
                    />
                </section>
            </div>  
      </main>
  );
}

