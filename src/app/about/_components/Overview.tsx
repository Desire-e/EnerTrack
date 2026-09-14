export default function Overview() {
    return (
        <section className=" relative flex flex-col w-full h-[60vh] md:py-20">
            {/* Decorative chart */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute left-0 w-full h-full opacity-40
                md:stroke-[2px] stroke-[4px] md:scale-[1] scale-[1.45] md:bottom-0 bottom-[-20] " 
                viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 713.61c12.8-5.294 38.4-19.791 64-26.472 25.6-6.68 38.4.879 64-6.928 25.6-7.808 38.4-18.298 64-32.108 25.6-13.81 38.4-29.254 64-36.942 25.6-7.688 38.4-.755 64-1.498 25.6-.742 38.4 4.138 64-2.216s38.4-9.21 64-29.553 38.4-50.248 64-72.162c25.6-21.914 38.4-19.863 64-37.408s38.4-32.109 64-50.319 38.4-33.529 64-40.73c25.6-7.203 38.4-6.232 64 4.72 25.6 10.954 38.4 71.172 64 50.045 25.6-21.128 38.4-107.233 64-155.68 25.6-48.448 38.4-69.592 64-86.558 25.6-16.965 38.4 14.18 64 1.729 25.6-12.452 38.4-79.45 64-63.985 25.6 15.466 38.4 107.453 64 141.312 25.6 33.86 38.4 61.732 64 27.983 25.6-33.75 51.2-157.382 64-196.728V720H0Z" 
                    fill="#00787000"/>
                    <path d="M0 713.61c12.8-5.294 38.4-19.791 64-26.472 25.6-6.68 38.4.879 64-6.928 25.6-7.808 38.4-18.298 64-32.108 25.6-13.81 38.4-29.254 64-36.942 25.6-7.688 38.4-.755 64-1.498 25.6-.742 38.4 4.138 64-2.216s38.4-9.21 64-29.553 38.4-50.248 64-72.162c25.6-21.914 38.4-19.863 64-37.408s38.4-32.109 64-50.319 38.4-33.529 64-40.73c25.6-7.203 38.4-6.232 64 4.72 25.6 10.954 38.4 71.172 64 50.045 25.6-21.128 38.4-107.233 64-155.68 25.6-48.448 38.4-69.592 64-86.558 25.6-16.965 38.4 14.18 64 1.729 25.6-12.452 38.4-79.45 64-63.985 25.6 15.466 38.4 107.453 64 141.312 25.6 33.86 38.4 61.732 64 27.983 25.6-33.75 51.2-157.382 64-196.728" 
                    fill="none" stroke="#00786f" />
                    <g fill="#00786f"><circle cy="713.611" r="6"/><circle cx="64" cy="687.138" r="6"/><circle cx="128" cy="680.21" r="6"/><circle cx="192" cy="648.102" r="6"/><circle cx="256" cy="611.16" r="6"/><circle cx="320" cy="609.662" r="6"/><circle cx="384" cy="607.446" r="6"/><circle cx="448" cy="577.893" r="6"/><circle cx="512" cy="505.731" r="6"/><circle cx="576" cy="468.323" r="6"/><circle cx="640" cy="418.004" r="6"/><circle cx="704" cy="377.273" r="6"/><circle cx="768" cy="381.995" r="6"/><circle cx="832" cy="432.039" r="6"/><circle cx="896" cy="276.359" r="6"/><circle cx="960" cy="189.801" r="6"/><circle cx="1024" cy="191.53" r="6"/><circle cx="1088" cy="127.545" r="6"/><circle cx="1152" cy="268.857" r="6"/><circle cx="1216" cy="296.84" r="6"/><circle cx="1280" cy="100.112" r="6"/></g>
                </svg>
            </div>      

            <div className='text-sm relative flex flex-col gap-5 md:max-w-[50%] items-center self-center text-center'>
                <h1 className="font-heading md:text-5xl text-3xl font-extrabold mb-3">
                    About Us
                </h1>

                <p>
                    We provide <span className="font-semibold">IoT-based energy monitoring solutions</span> that help 
                    industrial and commercial facilities <span className="font-semibold">understand how energy is consumed</span> across 
                    their operations.
                </p>
                <p>
                    By combining connected sensors, real-time monitoring, and actionable data, we give businesses the 
                    visibility they need <span className="font-semibold">to identify inefficiencies, reduce unnecessary consumption, and 
                    make better operational decisions.</span>
                </p>
            </div>
        </section>
    );
}

