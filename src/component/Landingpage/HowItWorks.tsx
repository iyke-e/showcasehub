import { Images } from "@/assets"

const HowItWorks = () => {
    return (
        <div className=" px-pad bg-gray-50 py-20">
            <p className="text-primary mb-2 text-center">How it Works</p>
            <h2 className="text-4xl font-space font-medium text-dark-green text-center ">Get Started in 3 Easy Steps</h2>


            <div className="grid grid-cols-3 gap-10 mt-10">
                <div className="relative ">
                    <p className=" font-medium text-primary  left-0 font-jetbrain">01</p>
                    <h3 className="text-dark-green font-bold font-space text-2xl mb-1">Create Your Account</h3>
                    <p className="text-gray-700 text-sm">Sign up for free and set up your creator profile.</p>
                    <div className="bg px-10 pt-10 red-500/5 border flex flex-col items-center justify-end  border-red-500/10 backdrop-blur-md rounded-lg mt-8  aspect-square">
                        <img className="h-full w-full rounded-t-lg object-cover opacity-60" src={Images.Programmer} alt="" />
                    </div>
                </div>
                <div className="relative mt-24">

                    <p className=" font-medium text-primary ">02</p>
                    <h3 className="text-dark-green text-2xl mb-1">Add Your Projects</h3>
                    <p className="text-gray-700 text-sm">Upload project details, images, and tell your story.</p>
                    <div className="bg px-10 pt-10 red-500/5 border flex flex-col items-center justify-end  border-red-500/10 backdrop-blur-md rounded-lg mt-8  aspect-square">
                        <img className="h-full w-full rounded-t-lg object-cover opacity-90" src={Images.Programmer} alt="" />
                    </div>

                </div>
                <div className="relative mt-48">
                    <p className="font-medium text-primary ">03</p>
                    <h3 className="text-dark-green text-2xl mb-1">Share & Get Discovered</h3>
                    <p className="text-gray-700 text-sm">Publish your work, get featured, and connect with the community.</p>
                    <div className="bg px-10 pt-10 red-500/5 border flex flex-col items-center justify-end  border-red-500/10 backdrop-blur-md rounded-lg mt-8  aspect-square">
                        <img className="h-full w-full rounded-t-lg object-cover opacity-80" src={Images.Programmer} alt="" />
                    </div>
                </div>




            </div>

        </div>
    )
}

export default HowItWorks