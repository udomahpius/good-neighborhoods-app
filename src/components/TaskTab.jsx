import { DocumentIcon, CalendarIcon, ChevronUpIcon, CheckCircleIcon, AtSymbolIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { Button } from ".";

function TaskTab() {
    return (
        <div className="mx-auto w-[70%] px-5 py-3 bg-white">
                <div className="mb-8 border-2 border-white py-4 px-5 w-full bg-setly-300 text-center text-white font-medium">
                    <p>You need to connect with John Doe</p>
                </div>


                <form>
                    {/* <div className="grid grid-cols-2 gap-5 mb-4">
                        <div className="">
                            <label className="mb-2 text-gray text-sm flex font-semibold">Linkedin Messaging</label>
                            <select name="industry" className="bg-white h-12 hover:border-setly-100 hover:border-2 rounded-lg flex px-2 py-1 border border-gray w-full outline-none text-gray-400">
                                <option selected disabled>Select an Industry</option>
                                <option>Ecommerce</option>
                                <option>Communication</option>
                                <option>Tech</option>
                            </select>
                        </div>

                        <div className="">
                            <label className="mb-2 text-gray text-sm flex font-semibold">Select Template</label>
                            <select name="industry" className="bg-white h-12 hover:border-setly-100 hover:border-2 rounded-lg flex px-2 py-1 border border-gray w-full outline-none text-gray-400">
                                <option selected disabled>Select an Industry</option>
                                <option>Ecommerce</option>
                                <option>Communication</option>
                                <option>Tech</option>
                            </select>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-2 gap-5 mb-4">
                        <div className="mb-4 w-full">
                            <label className="mb-2 text-gray text-sm flex font-semibold">Messaging Info</label>
                            <textarea className="w-full px-2 py-1 border border-gray-400" rows={3} placeholder="Write what your message is about in plain language"></textarea>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="mb-2 text-gray text-sm flex font-semibold">Call to Action</label>
                            <textarea className="w-full px-2 py-1 border border-gray-400" rows={3} placeholder="Write a call to action"></textarea>
                        </div>
                    </div>

                    

                    <div className="flex gap-4 mb-10">
                        <Button text="Save" background="black" />
                        {/* <Button text="Save" /> */}
                        <Button text="Reset" background="red" />
                    </div>

                    {/* <div className="flex justify-center mb-5">
                        <Button text="Generate Message" />
                    </div> */}

                    <div className="flex gap-3 items-center">
                      <div className="w-[70%]">
                        <textarea className="border w-full px-1 rounded-md"></textarea>
                      </div>
                      <div>
                        <Button text="Send Connection" background="black" disable={false} disabled={false} />
                      </div>
                    </div>
                </form>

                
            </div>
    );
}

export default TaskTab;