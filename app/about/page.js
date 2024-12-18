import React from 'react';

function Page() {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">About Get Me a Chai</h1>
                <p className="mb-8">
                    Get Me a Chai! is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start space-x-4">
                        <div className="rounded-full">
                            <img className="rounded-full bg-slate-500 w-[100px]" src="/images/download.jpg" alt="Man working" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Fans Want to Collaborate</h2>
                            <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="rounded-full">
                            <img className="rounded-full bg-slate-500 w-[100px]" src="/images/dollar.gif" alt="Man working" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Support Through Chai</h2>
                            <p>Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Benefits for Creators</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Direct financial support from your fanbase</li>
                        <li>Engage with your fans on a more personal level</li>
                        <li>Access to a platform tailored for creative projects</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Benefits for Fans</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Directly contribute to the success of your favorite creators</li>
                        <li>Exclusive rewards and perks for supporting creators</li>
                        <li>Be part of the creative process and connect with creators</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page;
export const metadata = {
    title: 'About Us',

}