'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const data = {
        labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
        datasets: [
            {
                label:
                    'Today Leads',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderColor: 'rgb(96,91,255)', // Change line color
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Today Leads',
                color: 'rgb(70,70,70)',
                font: {
                    size: 18,
                    weight: 20
                }
            },
            tooltip: {
                callbacks: {
                    title: () => 'Today Leads',
                    label: (context) => `Time: ${context.label}, Leads: ${context.raw} `,
                },
                displayColors: false,
                backgroundColor: 'rgba(96, 91, 255, 0.8)', // Tooltip background color
            },
        },
        scales: {
            x: {
                type: 'category',
                labels: data.labels,
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    stepSize: 0.2,
                    callback: (value) => value.toFixed(1),
                },
                border: {
                    display: false
                }
            },
        },
    };



    return (
        <div className='min-h-screen'>
            <div className="flex bg-white shadow-lg justify-between mobiles:py-2 pl-4 md:py-0 md:pb-0 lg:py-0">
                <div className="flex items-center mobiles:gap-2 gap-3">
                    <div className="lg:hidden">
                        <svg
                            className="cursor-pointer w-6 mobiles:w-5 md:w-8 block lg:hidden"
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={toggleMenu}
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </div>
                    <div className="hidden lg:block">
                        {/* Image for Devices Larger than Tablets */}
                        <img
                            src="https://dev.crm.skill-capital.com/_next/static/media/menu.59f55fe5.svg"
                            alt="Menu"
                            className="cursor-pointer w-8"
                        />
                    </div>
                    <div className='mobiles:w-21 md:w-44 lg:w-96'>
                        <img
                            src="https://dev.crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=3840&q=75"
                            className="cursor-pointer object-contain "
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-10 pt-0 md:gap-4 md:py-4 px-4">
                    {/* Full Menu for Desktop */}
                    <div className="hidden lg:flex items-center gap-4 md:pt-2 gap-x-1 cursor-pointer">
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Home</span>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Leads</span>
                            <div className='w-4'>
                                <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" />
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Opportunities</span>
                            <div className='w-4'>
                                <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" />
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Learners</span>
                            <div className='w-4'>
                                <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" />
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Courses</span>
                            <div className='w-4'>
                                <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" />
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Activities</span>
                            <div className='w-4'>
                                <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" />
                            </div>
                        </div>
                        <div className="flex items-center px-1 xl:py-2 xl:mx-0.5 rounded-t gap-2 hover:border-b-2 border-b-red-500">
                            <span className="md:text-base lg:text-lg">Analytics</span>
                            <div className='w-4'>
                                <img src="https://dev.crm.skill-capital.com/_next/static/media/downarrow.a06dec2f.svg" alt="Arrow" />
                            </div>
                        </div>
                    </div>

                    {/* Dropdown Menu for Tablet and Mobile */}
                    {isMenuOpen && (
                        <div className="lg:hidden flex flex-col gap-2 bg-white shadow-lg p-4 px-7 top-10 md:px-10 top-12 absolute left-0 w-full z-10">
                            <span className="text-lg">Home</span>
                            <span className="text-lg">Leads</span>
                            <span className="text-lg">Opportunities</span>
                            <span className="text-lg">Learners</span>
                            <span className="text-lg">Courses</span>
                            <span className="text-lg">Activities</span>
                            <span className="text-lg">Analytics</span>
                        </div>
                    )}
                    <div className="flex items-center mobiles:gap-2 gap-3">
                        <div className='mobiles:w-7 md:w-7'>
                            <svg className='cursor-pointer object-contain' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>
                        </div>
                        <div className='mobiles:w-8 md:w-7'>
                            <img src="/Stars.webp" className="cursor-pointer object-contain" alt="Stars" />
                        </div>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                className="cursor-pointer mobiles:w-6 md:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M905.616 711.888c-37.344-45.424-88.48-109.742-88.48-175.358V327.57c0-180.016-134.64-326.479-306.688-326.479-172.08 0-305.664 146.464-305.664 326.479v208.96c0 64.512-55.489 125.487-90.672 172.799-31.649 42.512-56.624 76.096-39.76 109.664 14.832 29.536 51.968 33.328 82.655 33.328h183.36c.048 94.208 76.448 170.576 170.672 170.576 94.24 0 170.641-76.368 170.688-170.576h187.664c19.52 0 65.152 0 80.863-33.2 15.857-33.616-9.52-64.513-44.64-107.232zm-394.609 243.97c-57.216 0-103.632-46.352-103.712-103.536h207.424c-.08 57.184-46.464 103.535-103.712 103.535zm358.384-171.665H157.006c-4.896 0-8.991-.16-12.367-.368 6.592-10.208 16.271-23.248 24.143-33.857 38.993-52.4 104.145-126.368 104.145-213.424v-208.96c0-142.464 103.04-258.352 237.521-258.352S749.01 185.12 749.01 327.584v208.96c0 90.016 60.08 165.248 103.968 218.608 7.392 8.993 16.24 19.76 23.12 28.96-2.033.048-4.273.08-6.705.08z"></path>
                            </svg>
                        </div>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 496 512"
                                className="cursor-pointer mobiles:w-6 md:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F4F6F9] h-full px-10 py-4'>
                <div className='mt-7 mx-5 flex gap-5 flex-wrap'>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"></path></svg>
                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Not contacted</p>
                            <p className='text-2xl font-bold'>2</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l40-40,15.08-15.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41Zm-41.87,41.86L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm-25.72,34.8a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path></svg>
                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Attempted</p>
                            <p className='text-2xl font-bold'>5</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"></path></svg>                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Not contacted</p>
                            <p className='text-2xl font-bold'>10</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"></path><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path></svg>                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Contacted</p>
                            <p className='text-2xl font-bold'>2</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z"></path></svg>                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>_</p>
                            <p className='text-2xl font-bold'>2</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg>                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Warm Lead</p>
                            <p className='text-2xl font-bold'>3</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M384 64c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H448v96c0 17.7-14.3 32-32 32H320v96c0 17.7-14.3 32-32 32H192v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V320c0-17.7 14.3-32 32-32h96V192c0-17.7 14.3-32 32-32h96V64z"></path></svg>                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Opportunity</p>
                            <p className='text-2xl font-bold'>24</p>
                        </div>
                    </div>
                    <div className='bg-white gap-5 h-24 w-64 rounded-2xl shadow flex items-center px-4 py-5'>
                        <div className='bg-[#F4F7FE] p-5 rounded-full'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z"></path></svg>                        </div>
                        <div>
                            <p className='text-sm text-[#A8C6DF] font-medium'>Cold Lead</p>
                            <p className='text-2xl font-bold'>3</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 px-6 py-4 mt-4'>
                    <div className='flex-1'>
                        <Line data={data} options={options} className='md:w-80 w-auto bg-white max-h-96 px-4' />
                    </div>
                    <div className='w-96 bg-white p-4 max-h-96 flex flex-col items-center justify-center'>
                        <p className='text-center text-slate-600 text-lg font-medium'>Analytics</p>
                        <div className='rounded-full border border-black p-36 w-16 h-16 flex flex-col items-center justify-center mt-3'>
                            <p className='text-center font-extrabold'>0</p>
                            <p className='text-center font-extrabold'>Leads</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
