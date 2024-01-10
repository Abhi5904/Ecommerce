"use client"
import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { currencyType, languageType } from '@/types/navbar'

interface DropDownProps {
    data: languageType[] | currencyType[]
}

const DropDown = ({ data }: DropDownProps) => {
    const [selected, setSelected] = useState(data[0])
    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative col-span-2">
                <Listbox.Button className="">
                    {selected.name}
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute -bottom-0 mt-1 max-h-60 w-[230px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {data.map((person, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-black text-white' : 'text-gray-900'
                                    }`
                                }
                                value={person}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {person.name}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default DropDown
