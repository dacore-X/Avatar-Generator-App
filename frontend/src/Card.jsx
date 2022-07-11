import React from 'react'


function Card({ seed, item }) {
    return (
        <div className="rounded-lg mt-4 border-black border-2">
            <div className="flex space-x-4">
                <div className="max-w-sm m-4">
                    <img src={item.image} alt="troll" />
                </div>
                <div className="h-full m-8 space-y-8">
                    <div className="flex flex-col">
                        <div className="flex flex-row space-x-8">
                            <div className='font-bold text-3xl'>
                                {item.name}
                            </div>
                            {seed && <div className="bg-black text-white text-sm font-bold rounded-lg px-4 m-auto">Seed: #{seed}</div>}
                        </div>
                        <div className="text-gray-600 text-sm font-semibold">
                            Hash: {item.description}
                        </div>

                    </div>

                    <div className="w-2/3">
                        {item.attributes?.map((attribute) =>
                            <div className="flex flex-row my-4 justify-between" key={attribute.trait_type}>
                                {attribute.trait_rarity === 'Common' &&
                                    <div className="bg-gray-500 inline-block pl-4 pr-4 rounded-xl font-bold text-black">
                                        {attribute.trait_type}
                                    </div>
                                }
                                {attribute.trait_rarity === 'Rare' &&
                                    <div className="bg-purple-800 inline-block pl-4 pr-4 rounded-xl font-bold text-black">
                                        {attribute.trait_type}
                                    </div>
                                }
                                {attribute.trait_rarity === 'Epic' &&
                                    <div className="bg-red-400 inline-block pl-4 pr-4 rounded-xl font-bold text-black">
                                        {attribute.trait_type}
                                    </div>
                                }
                                <div>
                                    {attribute.value}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card