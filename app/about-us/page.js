import React from 'react'
import Navbar from '../components/navbar'
import fisher from '../../public/imgs/fisher.jpeg'
import Image from 'next/image'
import Footer from '../components/footer'
import boat1 from '../../public/imgs/boat1.webp'
import boat2 from '../../public/imgs/boat2.webp'
import boat3 from '../../public/imgs/boat3.webp'
import boat4 from '../../public/imgs/boat4.jpeg'
import boat5 from '../../public/imgs/boat5.jpeg'
import boat6 from '../../public/imgs/boat6.jpeg'
export default function About() {
    return (
        <>
            <Navbar />
            <div className='max-w-[90%] mx-auto my-24'>
                <h2 className='font-primary text-6xl text-center text-primary'>Meet Our Awesome Guides</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-8'>
                    <div className='order-2 md:order-1'>
                        <h3 className='font-sec font-bold text-4xl mt-6 text-center md:text-left'>Tim Cook</h3>
                        <p className='font-bold text-xl font-sec text-secondary  text-center md:text-left'>Owner,Head Guide and Instructor</p>
                        <p className='font-sec text-xl mt-6'>Tim Parrish started fishing as a toddler for bass, crappie, and trout. His personal best bass weighed in at 13lbs, trout 12lbs, crappie 3lbs, catfish 35lbs, carp 32lbs, and sturgeon 10′ 2″. He has traveled all over the US fishing for bass. He has also saltwater fished in Mexico, Hawaii, and the Pacific Coast and caught multiple species on the fly and conventional gear. His biggest accomplishment was catching a 63lb grey ghost (white sea bass) on 15lb line. He has also enjoyed catching yellowtail, cabrilla, amberjack, grouper, yellowfin tuna, bluefin tuna, albacore tuna, marlin, dorado, barracuda, calico, and sandbass.≈</p>
                    </div>
                    <div className='flex justify-center items-center md:order-1'>
                        <Image src={fisher} alt='' height={500} width={320}/>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-8'>
                    <div className='flex justify-center items-center'>
                        <Image src={fisher} alt='' height={500} width={320}/>
                    </div>
                    <div className=''>
                        <h3 className='font-sec font-bold text-4xl mt-6 text-center md:text-left'>Tim Cook</h3>
                        <p className='font-bold text-xl font-sec text-secondary  text-center md:text-left'>Owner,Head Guide and Instructor</p>
                        <p className='font-sec text-xl mt-6'>Tim Parrish started fishing as a toddler for bass, crappie, and trout. His personal best bass weighed in at 13lbs, trout 12lbs, crappie 3lbs, catfish 35lbs, carp 32lbs, and sturgeon 10′ 2″. He has traveled all over the US fishing for bass. He has also saltwater fished in Mexico, Hawaii, and the Pacific Coast and caught multiple species on the fly and conventional gear. His biggest accomplishment was catching a 63lb grey ghost (white sea bass) on 15lb line. He has also enjoyed catching yellowtail, cabrilla, amberjack, grouper, yellowfin tuna, bluefin tuna, albacore tuna, marlin, dorado, barracuda, calico, and sandbass.≈</p>
                    </div>
                   

                </div>

                <hr></hr>


                <div className='mt-8'>
                    <h3 className='font-primary text-6xl text-center text-primary mb-8'>OUR BOATS</h3>


                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        <div>
                            <Image src={boat1} alt=''/>
                            <h3 className='font-primary text-xl mt-4'>2022 Skeeter 22′ Bass Boat</h3>
                            <span className='font-sec text-secondary'>(4 anglers maximum)</span>
                        </div>
                        <div>
                            <Image src={boat2} alt=''/>
                            <h3 className='font-primary text-xl mt-4'>2022 Skeeter 22′ Bass Boat</h3>
                            <span className='font-sec text-secondary'>(4 anglers maximum)</span>
                        </div>
                        <div>
                            <Image src={boat3} alt=''/>
                            <h3 className='font-primary text-xl mt-4'>2019 Excel 1860 Mud Buddy</h3>
                            <span className='font-sec text-secondary'>(3 anglers maximum)</span>
                        </div>
                        <div>
                            <Image src={boat4} alt=''/>
                            <h3 className='font-primary text-xl mt-4'>2005 Alumaweld Super Vee Jet Sled 25</h3>
                            <span className='font-sec text-secondary'>(6 anglers maximum)</span>
                        </div>
                        <div>
                            <Image src={boat5} alt=''/>
                            <h3 className='font-primary text-xl mt-4'>Clackamax Drift Boat</h3>
                            <span className='font-sec text-secondary'>(2 anglers maximum)</span>
                        </div>
                        <div>
                            <Image src={boat6} alt=''/>
                            <h3 className='font-primary text-xl mt-4'>2019 Excel 1860 Mud Buddy</h3>
                            <span className='font-sec text-secondary'>(3 anglers maximum)</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}
